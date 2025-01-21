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
                colors: {
                    ...extractColorConfig(data.baseJson),
                    ...extractColorConfig(data.designTokenJson),
                    ...extractColorConfig(data.gradientJson)
                },
                spacing: extractSpacingConfig(data.baseJson),
                borderRadius: extractRadiusConfig(data.baseJson),
                width: extractSizeConfig(data.baseJson),
                height: extractSizeConfig(data.baseJson),
                minWidth: extractSizeConfig(data.baseJson),
                minHeight: extractSizeConfig(data.baseJson),
                maxWidth: extractSizeConfig(data.baseJson),
                maxHeight: extractSizeConfig(data.baseJson),
                gap: extractSpacingConfig(data.baseJson),
                padding: extractSpacingConfig(data.baseJson),
                margin: extractSpacingConfig(data.baseJson),
            }
        },
        plugins: []
    };

    return `/** @type {import('tailwindcss').Config} */\nmodule.exports = ${JSON.stringify(config, null, 2)}`;
}

// 提取颜色配置
function extractColorConfig(json) {
    const colors = {};

    json.variables.forEach(v => {
        if (v.type === 'COLOR') {
            const [category, ...nameParts] = v.name.split('/');
            const categoryKey = category.toLowerCase().replace(/\s+/g, '-');
            const name = nameParts.join('/').toLowerCase().replace(/%/g, 'percent');
            const value = rgbaToHex(v.resolvedValuesByMode['6346:1']?.resolvedValue ||
                v.resolvedValuesByMode['5823:0']?.resolvedValue ||
                v.resolvedValuesByMode['5261:0']?.resolvedValue);

            if (!colors[categoryKey]) {
                colors[categoryKey] = {};
            }
            colors[categoryKey][name] = value;
        }
    });

    return colors;
}

// 提取间距配置
function extractSpacingConfig(json) {
    const spacing = {};

    json.variables.forEach(v => {
        if (v.name.includes('Spacing/')) {
            const name = v.name.split('/')[1].toLowerCase().replace('spacing-', '');
            const value = `${v.resolvedValuesByMode['5261:0'].resolvedValue}px`;
            spacing[name] = value;
        }
    });

    return spacing;
}

// 提取圆角配置
function extractRadiusConfig(json) {
    const radius = {};

    json.variables.forEach(v => {
        if (v.name.includes('Redius/')) {
            const name = v.name.split('/')[1].toLowerCase().replace('radius-', '');
            const value = `${v.resolvedValuesByMode['5261:0'].resolvedValue}px`;
            radius[name] = value;
        }
    });

    return radius;
}

// 提取尺寸配置
function extractSizeConfig(json) {
    const sizes = {};

    json.variables.forEach(v => {
        if (v.name.includes('Size/')) {
            const name = v.name.split('/')[1].toLowerCase().replace('size-', '');
            const value = `${v.resolvedValuesByMode['5261:0'].resolvedValue}px`;
            sizes[name] = value;
        }
    });

    return sizes;
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

    data.gradientJson.variables.forEach(v => {
        if (v.type === 'COLOR') {
            const [category, ...nameParts] = v.name.split('/');
            const name = `${category}-${nameParts.join('-')}`
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/%/g, 'percent');
            const value = rgbaToHex(v.resolvedValuesByMode['6346:1'].resolvedValue);
            variables.push(`  --color-${name}: ${value};`);
        }
    });

    return variables.join('\n');
}

// 生成 global.css
function generateGlobalCss(data) {
    return `@tailwind base;
@tailwind components;
@tailwind utilities;

/* 基础变量 */
:root {
${generateCssVariables(data)}
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