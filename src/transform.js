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
    const config = {
        content: [],
        theme: {
            extend: {
                borderRadius: extractRadiusConfig(data.baseJson),
                spacing: extractSpacingConfig(data.baseJson),
                colors: extractColorConfig(data.designTokenJson, data.gradientJson)
            }
        },
        plugins: []
    };

    return `/** @type {import('tailwindcss').Config} */\nmodule.exports = ${JSON.stringify(config, null, 2)}`;
}

// 提取圆角配置
function extractRadiusConfig(baseJson) {
    const radiusVars = baseJson.variables.filter(v => v.name.includes('Redius/'));
    const config = {};

    radiusVars.forEach(v => {
        const name = v.name.split('/')[1].replace('radius-', '').toLowerCase();
        const value = v.resolvedValuesByMode['5261:0'].resolvedValue;
        config[name] = `${value}px`;
    });

    return config;
}

// 提取间距配置
function extractSpacingConfig(baseJson) {
    const spacingVars = baseJson.variables.filter(v => v.name.includes('Spacing/'));
    const config = {};

    spacingVars.forEach(v => {
        const name = v.name.split('/')[1].replace('spacing-', '').toLowerCase();
        const value = v.resolvedValuesByMode['5261:0'].resolvedValue;
        config[name] = `${value}px`;
    });

    return config;
}

// 提取颜色配置
function extractColorConfig(designTokenJson, gradientJson) {
    const colors = {};

    // 处理 Design Token 中的颜色
    designTokenJson.variables.forEach(v => {
        if (v.type === 'COLOR') {
            const [category, ...nameParts] = v.name.split('/');
            const name = nameParts.join('/').toLowerCase();
            const lightValue = rgbaToHex(v.resolvedValuesByMode['5823:0'].resolvedValue);
            const darkValue = v.resolvedValuesByMode['6961:0']
                ? rgbaToHex(v.resolvedValuesByMode['6961:0'].resolvedValue)
                : lightValue;

            if (!colors[category.toLowerCase()]) {
                colors[category.toLowerCase()] = {};
            }
            colors[category.toLowerCase()][name] = {
                DEFAULT: lightValue,
                dark: darkValue
            };
        }
    });

    // 处理 Gradient Palette 中的颜色
    gradientJson.variables.forEach(v => {
        if (v.type === 'COLOR') {
            const [category, ...nameParts] = v.name.split('/');
            const name = nameParts.join('/').toLowerCase();
            const value = rgbaToHex(v.resolvedValuesByMode['6346:1'].resolvedValue);

            if (!colors[category.toLowerCase()]) {
                colors[category.toLowerCase()] = {};
            }
            colors[category.toLowerCase()][name] = value;
        }
    });

    return colors;
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

// 生成 global.css
function generateGlobalCss(data) {
    return `@tailwind base;
@tailwind components;
@tailwind utilities;

/* 基础变量 */
:root {
${generateCssVariables(data)}
}

/* 暗色主题 */
@media (prefers-color-scheme: dark) {
  :root {
${generateDarkThemeVariables(data)}
  }
}

/* 工具类 */
@layer utilities {
${generateUtilities(data)}
}`;
}

// 生成 CSS 变量
function generateCssVariables(data) {
    const variables = [];

    // 添加圆角变量
    const radiusVars = data.baseJson.variables.filter(v => v.name.includes('Redius/'));
    radiusVars.forEach(v => {
        const name = v.name.split('/')[1].replace('radius-', '').toLowerCase();
        const value = v.resolvedValuesByMode['5261:0'].resolvedValue;
        variables.push(`  --radius-${name}: ${value}px;`);
    });

    // 添加间距变量
    const spacingVars = data.baseJson.variables.filter(v => v.name.includes('Spacing/'));
    spacingVars.forEach(v => {
        const name = v.name.split('/')[1].replace('spacing-', '').toLowerCase();
        const value = v.resolvedValuesByMode['5261:0'].resolvedValue;
        variables.push(`  --spacing-${name}: ${value}px;`);
    });

    // 添加颜色变量
    data.designTokenJson.variables.forEach(v => {
        if (v.type === 'COLOR') {
            const [category, ...nameParts] = v.name.split('/');
            const name = `${category}-${nameParts.join('-')}`.toLowerCase();
            const value = rgbaToHex(v.resolvedValuesByMode['5823:0'].resolvedValue);
            variables.push(`  --color-${name}: ${value};`);
        }
    });

    return variables.join('\n');
}

// 生成暗色主题变量
function generateDarkThemeVariables(data) {
    const variables = [];

    data.designTokenJson.variables.forEach(v => {
        if (v.type === 'COLOR' && v.resolvedValuesByMode['6961:0']) {
            const [category, ...nameParts] = v.name.split('/');
            const name = `${category}-${nameParts.join('-')}`.toLowerCase();
            const value = rgbaToHex(v.resolvedValuesByMode['6961:0'].resolvedValue);
            variables.push(`    --color-${name}: ${value};`);
        }
    });

    return variables.join('\n');
}

// 生成工具类
function generateUtilities(data) {
    const utilities = [];

    // 圆角工具类
    const radiusVars = data.baseJson.variables.filter(v => v.name.includes('Redius/'));
    radiusVars.forEach(v => {
        const name = v.name.split('/')[1].replace('radius-', '').toLowerCase();
        utilities.push(`  .radius-${name} { border-radius: var(--radius-${name}); }`);
    });

    // 间距工具类
    const spacingVars = data.baseJson.variables.filter(v => v.name.includes('Spacing/'));
    spacingVars.forEach(v => {
        const name = v.name.split('/')[1].replace('spacing-', '').toLowerCase();
        utilities.push(`  .spacing-${name} { gap: var(--spacing-${name}); }`);
        utilities.push(`  .p-${name} { padding: var(--spacing-${name}); }`);
        utilities.push(`  .m-${name} { margin: var(--spacing-${name}); }`);
    });

    return utilities.join('\n');
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