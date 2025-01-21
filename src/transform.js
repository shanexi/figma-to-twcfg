const fs = require('fs');
const path = require('path');

// 读取 Figma 变量文件
function readFigmaFiles() {
    const baseJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/Base.json'), 'utf8'));
    const gradientJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/_Gradient Palette.json'), 'utf8'));
    const designTokenJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/Design Token.json'), 'utf8'));
    return { baseJson, gradientJson, designTokenJson };
}

// 生成 tailwind 配置
function generateTailwindConfig(data) {
    let output = [];
    output.push('/** @type {import(\'tailwindcss\').Config} */');
    output.push('module.exports = {');
    output.push('  content: [],');
    output.push('  theme: {');
    output.push('    extend: {');
    output.push('      colors: {');

    // 处理每个 JSON 文件的颜色变量
    const processedCategories = new Set();
    let isFirstCategory = true;

    [
        { json: data.baseJson, fileName: 'Base.json' },
        { json: data.designTokenJson, fileName: 'Design Token.json' },
        { json: data.gradientJson, fileName: '_Gradient Palette.json' }
    ].forEach(({ json, fileName }) => {
        const categoryGroups = {};

        // 首先按类别分组
        json.variables.forEach(v => {
            if (v.type === 'COLOR') {
                const [category, ...nameParts] = v.name.split('/');
                const categoryKey = category.toLowerCase().replace(/\s+/g, '-');
                const name = nameParts.join('/').toLowerCase().replace(/%/g, 'percent');
                const varName = formatVariableName(category, nameParts);
                const hasDarkMode = v.resolvedValuesByMode && v.resolvedValuesByMode['6961:0'];

                if (!categoryGroups[categoryKey]) {
                    categoryGroups[categoryKey] = [];
                }

                categoryGroups[categoryKey].push({
                    name,
                    varName,
                    hasDarkMode,
                    originalName: v.name,
                    fileName
                });
            }
        });

        // 然后按类别输出
        Object.entries(categoryGroups).forEach(([categoryKey, variables], categoryIndex, categories) => {
            if (!processedCategories.has(categoryKey)) {
                if (!isFirstCategory) {
                    output.push('      },');
                }
                output.push(`        ${JSON.stringify(categoryKey)}: {`);
                processedCategories.add(categoryKey);
                isFirstCategory = false;
            }

            variables.forEach(({ name, varName, hasDarkMode, originalName, fileName }, index) => {
                output.push(`          // ${originalName} (${fileName})`);
                if (hasDarkMode) {
                    output.push(`          ${JSON.stringify(name)}: {`);
                    output.push(`            DEFAULT: "var(--color-${varName})",`);
                    output.push(`            dark: "var(--color-${varName}-dark)"`);
                    output.push('          },');
                } else {
                    output.push(`          ${JSON.stringify(name)}: "var(--color-${varName})",`);
                }
            });
        });
    });

    // 关闭最后一个类别和 colors 对象
    if (processedCategories.size > 0) {
        output.push('      }');
    }

    // 添加其他配置
    output.push('      },');

    // 添加间距配置
    const { spacing, comments: spacingComments } = extractSpacingConfig(data.baseJson);
    output.push('      spacing: ' + generateConfigString(spacing, spacingComments) + ',');

    // 添加圆角配置
    const { radius, comments: radiusComments } = extractRadiusConfig(data.baseJson);
    output.push('      borderRadius: ' + generateConfigString(radius, radiusComments) + ',');

    // 添加尺寸配置
    const { sizes: widthSizes, comments: widthComments } = extractSizeConfig(data.baseJson);
    output.push('      width: ' + generateConfigString(widthSizes, widthComments) + ',');
    output.push('      height: ' + generateConfigString(widthSizes, widthComments) + ',');
    output.push('      minWidth: ' + generateConfigString(widthSizes, widthComments) + ',');
    output.push('      minHeight: ' + generateConfigString(widthSizes, widthComments) + ',');
    output.push('      maxWidth: ' + generateConfigString(widthSizes, widthComments) + ',');
    output.push('      maxHeight: ' + generateConfigString(widthSizes, widthComments) + ',');

    // 添加间距相关配置
    output.push('      gap: ' + generateConfigString(spacing, spacingComments) + ',');
    output.push('      padding: ' + generateConfigString(spacing, spacingComments) + ',');
    output.push('      margin: ' + generateConfigString(spacing, spacingComments));

    output.push('    }');
    output.push('  },');
    output.push('  plugins: []');
    output.push('}');

    return output.join('\n');
}

// 为颜色对象添加注释
function addCommentsToColors(colors, comments) {
    const result = {};
    const commentMap = new Map(comments.map(comment => {
        const name = comment.split(' (')[0].substring(3);
        return [name, comment];
    }));

    for (const [category, values] of Object.entries(colors)) {
        result[category] = {};
        for (const [key, value] of Object.entries(values)) {
            const fullKey = `${category}/${key}`;
            const comment = commentMap.get(fullKey);
            if (comment) {
                result[category][`${key} /* ${comment} */`] = value;
            } else {
                result[category][key] = value;
            }
        }
    }

    return result;
}

// 处理变量名
function formatVariableName(category, nameParts) {
    return `${category}-${nameParts.join('-')}`
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/%/g, 'percent')
        .replace(/&/g, 'and');
}

// 提取颜色配置 - 使用 CSS 变量，支持暗色模式
function extractColorConfig(json, fileName) {
    const colors = {};
    const comments = [];

    json.variables.forEach(v => {
        if (v.type === 'COLOR') {
            const [category, ...nameParts] = v.name.split('/');
            const categoryKey = category.toLowerCase().replace(/\s+/g, '-');
            const name = nameParts.join('/').toLowerCase().replace(/%/g, 'percent');
            const varName = formatVariableName(category, nameParts);
            const hasDarkMode = v.resolvedValuesByMode && v.resolvedValuesByMode['6961:0'];

            // 添加注释 - 只包含变量名和文件名
            comments.push(`// ${v.name} (${fileName})`);

            if (hasDarkMode) {
                const value = {
                    DEFAULT: `var(--color-${varName})`,
                    dark: `var(--color-${varName}-dark)`
                };
                if (!colors[categoryKey]) {
                    colors[categoryKey] = {};
                }
                colors[categoryKey][name] = value;
            } else {
                const value = `var(--color-${varName})`;
                if (!colors[categoryKey]) {
                    colors[categoryKey] = {};
                }
                colors[categoryKey][name] = value;
            }
        }
    });

    return { colors, comments };
}

// 提取间距配置
function extractSpacingConfig(json) {
    const spacing = {};
    const comments = [];

    json.variables.forEach(v => {
        if (v.name.includes('Spacing/')) {
            const name = v.name.split('/')[1].toLowerCase().replace('spacing-', '');
            const value = `${v.resolvedValuesByMode['5261:0'].resolvedValue}px`;
            spacing[name] = value;
            comments.push(`// ${v.name} (Base.json)`);
        }
    });

    return { spacing, comments };
}

// 提取圆角配置
function extractRadiusConfig(json) {
    const radius = {};
    const comments = [];

    json.variables.forEach(v => {
        if (v.name.includes('Redius/')) {
            const name = v.name.split('/')[1].toLowerCase().replace('radius-', '');
            const value = `${v.resolvedValuesByMode['5261:0'].resolvedValue}px`;
            radius[name] = value;
            comments.push(`// ${v.name} (Base.json)`);
        }
    });

    return { radius, comments };
}

// 提取尺寸配置
function extractSizeConfig(json) {
    const sizes = {};
    const comments = [];

    json.variables.forEach(v => {
        if (v.name.includes('Size/')) {
            const name = v.name.split('/')[1].toLowerCase().replace('size-', '');
            const value = `${v.resolvedValuesByMode['5261:0'].resolvedValue}px`;
            sizes[name] = value;
            comments.push(`// ${v.name} (Base.json)`);
        }
    });

    return { sizes, comments };
}

// 生成配置对象字符串（带注释）
function generateConfigString(obj, comments) {
    const lines = ['{'];
    Object.entries(obj).forEach(([key, value], index) => {
        if (comments[index]) {
            lines.push(`        ${comments[index]}`);
        }
        lines.push(`        ${JSON.stringify(key)}: ${JSON.stringify(value)}${index < Object.keys(obj).length - 1 ? ',' : ''}`);
    });
    lines.push('      }');
    return lines.join('\n');
}

// RGBA 转 Hex
function rgbaToHex({ r, g, b, a = 1 }) {
    const toHex = (n) => {
        const hex = Math.round(n * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    return a === 1 ? hex.toUpperCase() : `${hex}${toHex(a)}`.toUpperCase();
}

// 生成 CSS 变量 (只处理 Gradient Palette)
function generateCssVariables(data) {
    const variables = [];
    const darkVariables = [];
    const comments = [];
    const darkComments = [];

    data.gradientJson.variables.forEach(v => {
        if (v.type === 'COLOR') {
            const [category, ...nameParts] = v.name.split('/');
            const name = formatVariableName(category, nameParts);
            const value = rgbaToHex(v.resolvedValuesByMode['6346:1'].resolvedValue);
            variables.push(`  --color-${name}: ${value};`);
            comments.push(`  /* ${v.name} (_Gradient Palette.json) */`);
        }
    });

    // 添加 Design Token 的暗色模式变量
    data.designTokenJson.variables.forEach(v => {
        if (v.type === 'COLOR' && v.resolvedValuesByMode['6961:0']) {
            const [category, ...nameParts] = v.name.split('/');
            const name = formatVariableName(category, nameParts);
            const darkValue = rgbaToHex(v.resolvedValuesByMode['6961:0'].resolvedValue);
            darkVariables.push(`  --color-${name}-dark: ${darkValue};`);
            darkComments.push(`  /* ${v.name} (Design Token.json) */`);
        }
    });

    return {
        light: variables.map((v, i) => `${comments[i]}\n${v}`).join('\n'),
        dark: darkVariables.map((v, i) => `${darkComments[i]}\n${v}`).join('\n')
    };
}

// 生成 global.css
function generateGlobalCss(data) {
    const cssVars = generateCssVariables(data);
    return `@tailwind base;
@tailwind components;
@tailwind utilities;

/* 基础变量 */
:root {
${cssVars.light}
}

/* 暗色主题变量 */
:root[data-theme="dark"] {
${cssVars.dark}
}`;
}

// 主函数
function main() {
    try {
        // 确保输出目录存在
        if (!fs.existsSync(path.join(__dirname, '../output'))) {
            fs.mkdirSync(path.join(__dirname, '../output'));
        }

        // 读取数据
        const data = readFigmaFiles();

        // 生成并写入 tailwind.config.js
        const tailwindConfig = generateTailwindConfig(data);
        fs.writeFileSync(
            path.join(__dirname, '../output/tailwind.config.js'),
            tailwindConfig
        );

        // 生成并写入 global.css
        const globalCss = generateGlobalCss(data);
        fs.writeFileSync(
            path.join(__dirname, '../output/global.css'),
            globalCss
        );

        console.log('转换完成!');
    } catch (error) {
        console.error('转换失败:', error);
    }
}

main(); 