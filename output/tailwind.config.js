/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "surface": {
          // Surface/Primary/Default (Design Token.json)
          "primary/default": {
            DEFAULT: "var(--color-surface-primary-default)",
            dark: "var(--color-surface-primary-default-dark)"
          },
          // Surface/Primary/Hovered (Design Token.json)
          "primary/hovered": {
            DEFAULT: "var(--color-surface-primary-hovered)",
            dark: "var(--color-surface-primary-hovered-dark)"
          },
          // Surface/Primary/Pressed (Design Token.json)
          "primary/pressed": {
            DEFAULT: "var(--color-surface-primary-pressed)",
            dark: "var(--color-surface-primary-pressed-dark)"
          },
          // Surface/Default (Design Token.json)
          "default": {
            DEFAULT: "var(--color-surface-default)",
            dark: "var(--color-surface-default-dark)"
          },
          // Surface/Subtle (Design Token.json)
          "subtle": {
            DEFAULT: "var(--color-surface-subtle)",
            dark: "var(--color-surface-subtle-dark)"
          },
          // Surface/Container/Default (Design Token.json)
          "container/default": {
            DEFAULT: "var(--color-surface-container-default)",
            dark: "var(--color-surface-container-default-dark)"
          },
          // Surface/Success/Default (Design Token.json)
          "success/default": {
            DEFAULT: "var(--color-surface-success-default)",
            dark: "var(--color-surface-success-default-dark)"
          },
          // Surface/Success/Hovered (Design Token.json)
          "success/hovered": {
            DEFAULT: "var(--color-surface-success-hovered)",
            dark: "var(--color-surface-success-hovered-dark)"
          },
          // Surface/Critical/Default (Design Token.json)
          "critical/default": {
            DEFAULT: "var(--color-surface-critical-default)",
            dark: "var(--color-surface-critical-default-dark)"
          },
          // Surface/Critical/Hovered (Design Token.json)
          "critical/hovered": {
            DEFAULT: "var(--color-surface-critical-hovered)",
            dark: "var(--color-surface-critical-hovered-dark)"
          },
          // Surface/Critical/Pressed (Design Token.json)
          "critical/pressed": {
            DEFAULT: "var(--color-surface-critical-pressed)",
            dark: "var(--color-surface-critical-pressed-dark)"
          },
          // Surface/Warning/Default (Design Token.json)
          "warning/default": {
            DEFAULT: "var(--color-surface-warning-default)",
            dark: "var(--color-surface-warning-default-dark)"
          },
          // Surface/Lemon/Bold (Design Token.json)
          "lemon/bold": {
            DEFAULT: "var(--color-surface-lemon-bold)",
            dark: "var(--color-surface-lemon-bold-dark)"
          },
          // Surface/Lemon/Default (Design Token.json)
          "lemon/default": {
            DEFAULT: "var(--color-surface-lemon-default)",
            dark: "var(--color-surface-lemon-default-dark)"
          },
          // Surface/Lemon/Subtle (Design Token.json)
          "lemon/subtle": {
            DEFAULT: "var(--color-surface-lemon-subtle)",
            dark: "var(--color-surface-lemon-subtle-dark)"
          },
          // Surface/Hovered (Design Token.json)
          "hovered": {
            DEFAULT: "var(--color-surface-hovered)",
            dark: "var(--color-surface-hovered-dark)"
          },
          // Surface/Disabled (Design Token.json)
          "disabled": {
            DEFAULT: "var(--color-surface-disabled)",
            dark: "var(--color-surface-disabled-dark)"
          },
          // Surface/Pressed (Design Token.json)
          "pressed": {
            DEFAULT: "var(--color-surface-pressed)",
            dark: "var(--color-surface-pressed-dark)"
          },
          // Surface/Critical/Subtle/Hovered (Design Token.json)
          "critical/subtle/hovered": {
            DEFAULT: "var(--color-surface-critical-subtle-hovered)",
            dark: "var(--color-surface-critical-subtle-hovered-dark)"
          },
          // Surface/Critical/Subtle/Pressed (Design Token.json)
          "critical/subtle/pressed": {
            DEFAULT: "var(--color-surface-critical-subtle-pressed)",
            dark: "var(--color-surface-critical-subtle-pressed-dark)"
          },
          // Surface/Primary/Subtle/Default (Design Token.json)
          "primary/subtle/default": {
            DEFAULT: "var(--color-surface-primary-subtle-default)",
            dark: "var(--color-surface-primary-subtle-default-dark)"
          },
          // Surface/Success/Pressed (Design Token.json)
          "success/pressed": {
            DEFAULT: "var(--color-surface-success-pressed)",
            dark: "var(--color-surface-success-pressed-dark)"
          },
          // Surface/Success/Subtle/Default (Design Token.json)
          "success/subtle/default": {
            DEFAULT: "var(--color-surface-success-subtle-default)",
            dark: "var(--color-surface-success-subtle-default-dark)"
          },
          // Surface/Info/Default (Design Token.json)
          "info/default": {
            DEFAULT: "var(--color-surface-info-default)",
            dark: "var(--color-surface-info-default-dark)"
          },
          // Surface/Info/Hovered (Design Token.json)
          "info/hovered": {
            DEFAULT: "var(--color-surface-info-hovered)",
            dark: "var(--color-surface-info-hovered-dark)"
          },
          // Surface/Info/Subtle/Default (Design Token.json)
          "info/subtle/default": {
            DEFAULT: "var(--color-surface-info-subtle-default)",
            dark: "var(--color-surface-info-subtle-default-dark)"
          },
          // Surface/Container/Hovered (Design Token.json)
          "container/hovered": {
            DEFAULT: "var(--color-surface-container-hovered)",
            dark: "var(--color-surface-container-hovered-dark)"
          },
          // Surface/Warning/Subtle/Default (Design Token.json)
          "warning/subtle/default": {
            DEFAULT: "var(--color-surface-warning-subtle-default)",
            dark: "var(--color-surface-warning-subtle-default-dark)"
          },
          // Surface/Container/Pressed (Design Token.json)
          "container/pressed": {
            DEFAULT: "var(--color-surface-container-pressed)",
            dark: "var(--color-surface-container-pressed-dark)"
          },
          // Surface/SearchField (Design Token.json)
          "searchfield": {
            DEFAULT: "var(--color-surface-searchfield)",
            dark: "var(--color-surface-searchfield-dark)"
          },
          // Surface/Warning/Subtle/Hovered (Design Token.json)
          "warning/subtle/hovered": {
            DEFAULT: "var(--color-surface-warning-subtle-hovered)",
            dark: "var(--color-surface-warning-subtle-hovered-dark)"
          },
          // Surface/Warning/Subtle/Pressed (Design Token.json)
          "warning/subtle/pressed": {
            DEFAULT: "var(--color-surface-warning-subtle-pressed)",
            dark: "var(--color-surface-warning-subtle-pressed-dark)"
          },
          // Surface/Critical/Subtle/Default (Design Token.json)
          "critical/subtle/default": {
            DEFAULT: "var(--color-surface-critical-subtle-default)",
            dark: "var(--color-surface-critical-subtle-default-dark)"
          },
          // Surface/Success/Subtle/Hovered (Design Token.json)
          "success/subtle/hovered": {
            DEFAULT: "var(--color-surface-success-subtle-hovered)",
            dark: "var(--color-surface-success-subtle-hovered-dark)"
          },
          // Surface/Success/Subtle/Pressed (Design Token.json)
          "success/subtle/pressed": {
            DEFAULT: "var(--color-surface-success-subtle-pressed)",
            dark: "var(--color-surface-success-subtle-pressed-dark)"
          },
          // Surface/Primary/Subtle/Hovered (Design Token.json)
          "primary/subtle/hovered": {
            DEFAULT: "var(--color-surface-primary-subtle-hovered)",
            dark: "var(--color-surface-primary-subtle-hovered-dark)"
          },
          // Surface/Primary/Subtle/Pressed (Design Token.json)
          "primary/subtle/pressed": {
            DEFAULT: "var(--color-surface-primary-subtle-pressed)",
            dark: "var(--color-surface-primary-subtle-pressed-dark)"
          },
          // Surface/Warning/Hovered (Design Token.json)
          "warning/hovered": {
            DEFAULT: "var(--color-surface-warning-hovered)",
            dark: "var(--color-surface-warning-hovered-dark)"
          },
          // Surface/Warning/Pressed (Design Token.json)
          "warning/pressed": {
            DEFAULT: "var(--color-surface-warning-pressed)",
            dark: "var(--color-surface-warning-pressed-dark)"
          },
          // Surface/Info/Pressed (Design Token.json)
          "info/pressed": {
            DEFAULT: "var(--color-surface-info-pressed)",
            dark: "var(--color-surface-info-pressed-dark)"
          },
          // Surface/Info/Subtle/Hovered (Design Token.json)
          "info/subtle/hovered": {
            DEFAULT: "var(--color-surface-info-subtle-hovered)",
            dark: "var(--color-surface-info-subtle-hovered-dark)"
          },
          // Surface/Info/Subtle/Pressed (Design Token.json)
          "info/subtle/pressed": {
            DEFAULT: "var(--color-surface-info-subtle-pressed)",
            dark: "var(--color-surface-info-subtle-pressed-dark)"
          },
          // Surface/Accent/Red/Subtlest (Design Token.json)
          "accent/red/subtlest": {
            DEFAULT: "var(--color-surface-accent-red-subtlest)",
            dark: "var(--color-surface-accent-red-subtlest-dark)"
          },
          // Surface/Accent/Red/Bolder (Design Token.json)
          "accent/red/bolder": {
            DEFAULT: "var(--color-surface-accent-red-bolder)",
            dark: "var(--color-surface-accent-red-bolder-dark)"
          },
          // Surface/Accent/Red/Subtler (Design Token.json)
          "accent/red/subtler": {
            DEFAULT: "var(--color-surface-accent-red-subtler)",
            dark: "var(--color-surface-accent-red-subtler-dark)"
          },
          // Surface/Accent/Red/Subtle (Design Token.json)
          "accent/red/subtle": {
            DEFAULT: "var(--color-surface-accent-red-subtle)",
            dark: "var(--color-surface-accent-red-subtle-dark)"
          },
          // Surface/Accent/Yellow/Subtlest (Design Token.json)
          "accent/yellow/subtlest": {
            DEFAULT: "var(--color-surface-accent-yellow-subtlest)",
            dark: "var(--color-surface-accent-yellow-subtlest-dark)"
          },
          // Surface/Accent/Yellow/Subtler (Design Token.json)
          "accent/yellow/subtler": {
            DEFAULT: "var(--color-surface-accent-yellow-subtler)",
            dark: "var(--color-surface-accent-yellow-subtler-dark)"
          },
          // Surface/Accent/Yellow/Subtle (Design Token.json)
          "accent/yellow/subtle": {
            DEFAULT: "var(--color-surface-accent-yellow-subtle)",
            dark: "var(--color-surface-accent-yellow-subtle-dark)"
          },
          // Surface/Accent/Yellow/Bolder (Design Token.json)
          "accent/yellow/bolder": {
            DEFAULT: "var(--color-surface-accent-yellow-bolder)",
            dark: "var(--color-surface-accent-yellow-bolder-dark)"
          },
          // Surface/Accent/Blue/Subtlest (Design Token.json)
          "accent/blue/subtlest": {
            DEFAULT: "var(--color-surface-accent-blue-subtlest)",
            dark: "var(--color-surface-accent-blue-subtlest-dark)"
          },
          // Surface/Accent/Blue/Subtler (Design Token.json)
          "accent/blue/subtler": {
            DEFAULT: "var(--color-surface-accent-blue-subtler)",
            dark: "var(--color-surface-accent-blue-subtler-dark)"
          },
          // Surface/Accent/Blue/Subtle (Design Token.json)
          "accent/blue/subtle": {
            DEFAULT: "var(--color-surface-accent-blue-subtle)",
            dark: "var(--color-surface-accent-blue-subtle-dark)"
          },
          // Surface/Accent/Blue/Bolder (Design Token.json)
          "accent/blue/bolder": {
            DEFAULT: "var(--color-surface-accent-blue-bolder)",
            dark: "var(--color-surface-accent-blue-bolder-dark)"
          },
          // Surface/Accent/Gray/Subtlest (Design Token.json)
          "accent/gray/subtlest": {
            DEFAULT: "var(--color-surface-accent-gray-subtlest)",
            dark: "var(--color-surface-accent-gray-subtlest-dark)"
          },
          // Surface/Accent/Gray/Subtler (Design Token.json)
          "accent/gray/subtler": {
            DEFAULT: "var(--color-surface-accent-gray-subtler)",
            dark: "var(--color-surface-accent-gray-subtler-dark)"
          },
          // Surface/Accent/Gray/Subtle (Design Token.json)
          "accent/gray/subtle": {
            DEFAULT: "var(--color-surface-accent-gray-subtle)",
            dark: "var(--color-surface-accent-gray-subtle-dark)"
          },
          // Surface/Accent/Gray/Bolder (Design Token.json)
          "accent/gray/bolder": {
            DEFAULT: "var(--color-surface-accent-gray-bolder)",
            dark: "var(--color-surface-accent-gray-bolder-dark)"
          },
          // Surface/Accent/Aqua/Subtlest (Design Token.json)
          "accent/aqua/subtlest": {
            DEFAULT: "var(--color-surface-accent-aqua-subtlest)",
            dark: "var(--color-surface-accent-aqua-subtlest-dark)"
          },
          // Surface/Accent/Aqua/Subtler (Design Token.json)
          "accent/aqua/subtler": {
            DEFAULT: "var(--color-surface-accent-aqua-subtler)",
            dark: "var(--color-surface-accent-aqua-subtler-dark)"
          },
          // Surface/Accent/Aqua/Subtle (Design Token.json)
          "accent/aqua/subtle": {
            DEFAULT: "var(--color-surface-accent-aqua-subtle)",
            dark: "var(--color-surface-accent-aqua-subtle-dark)"
          },
          // Surface/Accent/Aqua/Bolder (Design Token.json)
          "accent/aqua/bolder": {
            DEFAULT: "var(--color-surface-accent-aqua-bolder)",
            dark: "var(--color-surface-accent-aqua-bolder-dark)"
          },
          // Surface/Accent/Green/Subtlest (Design Token.json)
          "accent/green/subtlest": {
            DEFAULT: "var(--color-surface-accent-green-subtlest)",
            dark: "var(--color-surface-accent-green-subtlest-dark)"
          },
          // Surface/Accent/Green/Subtler (Design Token.json)
          "accent/green/subtler": {
            DEFAULT: "var(--color-surface-accent-green-subtler)",
            dark: "var(--color-surface-accent-green-subtler-dark)"
          },
          // Surface/Accent/Green/Subtle (Design Token.json)
          "accent/green/subtle": {
            DEFAULT: "var(--color-surface-accent-green-subtle)",
            dark: "var(--color-surface-accent-green-subtle-dark)"
          },
          // Surface/Accent/Green/Bolder (Design Token.json)
          "accent/green/bolder": {
            DEFAULT: "var(--color-surface-accent-green-bolder)",
            dark: "var(--color-surface-accent-green-bolder-dark)"
          },
          // Surface/Container/Selected/Default (Design Token.json)
          "container/selected/default": {
            DEFAULT: "var(--color-surface-container-selected-default)",
            dark: "var(--color-surface-container-selected-default-dark)"
          },
          // Surface/Container/Selected/Hovered (Design Token.json)
          "container/selected/hovered": {
            DEFAULT: "var(--color-surface-container-selected-hovered)",
            dark: "var(--color-surface-container-selected-hovered-dark)"
          },
          // Surface/Container/Selected/Pressed (Design Token.json)
          "container/selected/pressed": {
            DEFAULT: "var(--color-surface-container-selected-pressed)",
            dark: "var(--color-surface-container-selected-pressed-dark)"
          },
          // Surface/Inverse (Design Token.json)
          "inverse": {
            DEFAULT: "var(--color-surface-inverse)",
            dark: "var(--color-surface-inverse-dark)"
          },
          // Surface/Lemon/Subtlest (Design Token.json)
          "lemon/subtlest": {
            DEFAULT: "var(--color-surface-lemon-subtlest)",
            dark: "var(--color-surface-lemon-subtlest-dark)"
          },
          // Surface/Static/White (Design Token.json)
          "static/white": {
            DEFAULT: "var(--color-surface-static-white)",
            dark: "var(--color-surface-static-white-dark)"
          },
          // Surface/None (Design Token.json)
          "none": {
            DEFAULT: "var(--color-surface-none)",
            dark: "var(--color-surface-none-dark)"
          },
          // Surface/Static/Black (Design Token.json)
          "static/black": {
            DEFAULT: "var(--color-surface-static-black)",
            dark: "var(--color-surface-static-black-dark)"
          },
          // Surface/Container/Special/Subtle (Design Token.json)
          "container/special/subtle": {
            DEFAULT: "var(--color-surface-container-special-subtle)",
            dark: "var(--color-surface-container-special-subtle-dark)"
          },
          // Surface/Container/Special/Default (Design Token.json)
          "container/special/default": {
            DEFAULT: "var(--color-surface-container-special-default)",
            dark: "var(--color-surface-container-special-default-dark)"
          },
          // Surface/Container/Special/Hovered (Design Token.json)
          "container/special/hovered": {
            DEFAULT: "var(--color-surface-container-special-hovered)",
            dark: "var(--color-surface-container-special-hovered-dark)"
          },
      },
        "text": {
          // Text/Default (Design Token.json)
          "default": {
            DEFAULT: "var(--color-text-default)",
            dark: "var(--color-text-default-dark)"
          },
          // Text/Subtler (Design Token.json)
          "subtler": {
            DEFAULT: "var(--color-text-subtler)",
            dark: "var(--color-text-subtler-dark)"
          },
          // Text/Disabled (Design Token.json)
          "disabled": {
            DEFAULT: "var(--color-text-disabled)",
            dark: "var(--color-text-disabled-dark)"
          },
          // Text/Warning/Default (Design Token.json)
          "warning/default": {
            DEFAULT: "var(--color-text-warning-default)",
            dark: "var(--color-text-warning-default-dark)"
          },
          // Text/Subtlest (Design Token.json)
          "subtlest": {
            DEFAULT: "var(--color-text-subtlest)",
            dark: "var(--color-text-subtlest-dark)"
          },
          // Text/Subtle (Design Token.json)
          "subtle": {
            DEFAULT: "var(--color-text-subtle)",
            dark: "var(--color-text-subtle-dark)"
          },
          // Text/Critical/Default (Design Token.json)
          "critical/default": {
            DEFAULT: "var(--color-text-critical-default)",
            dark: "var(--color-text-critical-default-dark)"
          },
          // Text/Success/Default (Design Token.json)
          "success/default": {
            DEFAULT: "var(--color-text-success-default)",
            dark: "var(--color-text-success-default-dark)"
          },
          // Text/Success/Bolder (Design Token.json)
          "success/bolder": {
            DEFAULT: "var(--color-text-success-bolder)",
            dark: "var(--color-text-success-bolder-dark)"
          },
          // Text/Warning/Bolder (Design Token.json)
          "warning/bolder": {
            DEFAULT: "var(--color-text-warning-bolder)",
            dark: "var(--color-text-warning-bolder-dark)"
          },
          // Text/Critical/Bolder (Design Token.json)
          "critical/bolder": {
            DEFAULT: "var(--color-text-critical-bolder)",
            dark: "var(--color-text-critical-bolder-dark)"
          },
          // Text/Brand (Design Token.json)
          "brand": {
            DEFAULT: "var(--color-text-brand)",
            dark: "var(--color-text-brand-dark)"
          },
          // Text/Static/White (Design Token.json)
          "static/white": {
            DEFAULT: "var(--color-text-static-white)",
            dark: "var(--color-text-static-white-dark)"
          },
          // Text/Static/Black (Design Token.json)
          "static/black": {
            DEFAULT: "var(--color-text-static-black)",
            dark: "var(--color-text-static-black-dark)"
          },
          // Text/Static/Brand (Design Token.json)
          "static/brand": {
            DEFAULT: "var(--color-text-static-brand)",
            dark: "var(--color-text-static-brand-dark)"
          },
          // Text/Inverse (Design Token.json)
          "inverse": {
            DEFAULT: "var(--color-text-inverse)",
            dark: "var(--color-text-inverse-dark)"
          },
      },
        "border": {
          // Border/Default (Design Token.json)
          "default": {
            DEFAULT: "var(--color-border-default)",
            dark: "var(--color-border-default-dark)"
          },
          // Border/Critical (Design Token.json)
          "critical": {
            DEFAULT: "var(--color-border-critical)",
            dark: "var(--color-border-critical-dark)"
          },
          // Border/Hovered (Design Token.json)
          "hovered": {
            DEFAULT: "var(--color-border-hovered)",
            dark: "var(--color-border-hovered-dark)"
          },
          // Border/Pressed (Design Token.json)
          "pressed": {
            DEFAULT: "var(--color-border-pressed)",
            dark: "var(--color-border-pressed-dark)"
          },
          // Border/Depressed (Design Token.json)
          "depressed": {
            DEFAULT: "var(--color-border-depressed)",
            dark: "var(--color-border-depressed-dark)"
          },
          // Border/Warning/Subtle (Design Token.json)
          "warning/subtle": {
            DEFAULT: "var(--color-border-warning-subtle)",
            dark: "var(--color-border-warning-subtle-dark)"
          },
          // Border/Warning/Default (Design Token.json)
          "warning/default": {
            DEFAULT: "var(--color-border-warning-default)",
            dark: "var(--color-border-warning-default-dark)"
          },
          // Border/Success (Design Token.json)
          "success": {
            DEFAULT: "var(--color-border-success)",
            dark: "var(--color-border-success-dark)"
          },
          // Border/Brand (Design Token.json)
          "brand": {
            DEFAULT: "var(--color-border-brand)",
            dark: "var(--color-border-brand-dark)"
          },
          // Border/Bolder (Design Token.json)
          "bolder": {
            DEFAULT: "var(--color-border-bolder)",
            dark: "var(--color-border-bolder-dark)"
          },
          // Border/Opaque (Design Token.json)
          "opaque": {
            DEFAULT: "var(--color-border-opaque)",
            dark: "var(--color-border-opaque-dark)"
          },
          // Border/Static (Design Token.json)
          "static": {
            DEFAULT: "var(--color-border-static)",
            dark: "var(--color-border-static-dark)"
          },
      },
        "alpha": {
          // Alpha/Facetime/White (Design Token.json)
          "facetime/white": {
            DEFAULT: "var(--color-alpha-facetime-white)",
            dark: "var(--color-alpha-facetime-white-dark)"
          },
          // Alpha/Facetime/Black (Design Token.json)
          "facetime/black": {
            DEFAULT: "var(--color-alpha-facetime-black)",
            dark: "var(--color-alpha-facetime-black-dark)"
          },
          // Alpha/Mask/Desktop (Design Token.json)
          "mask/desktop": {
            DEFAULT: "var(--color-alpha-mask-desktop)",
            dark: "var(--color-alpha-mask-desktop-dark)"
          },
          // Alpha/Mask/Mobile (Design Token.json)
          "mask/mobile": {
            DEFAULT: "var(--color-alpha-mask-mobile)",
            dark: "var(--color-alpha-mask-mobile-dark)"
          },
          // Alpha/Facetime/Static (Design Token.json)
          "facetime/static": {
            DEFAULT: "var(--color-alpha-facetime-static)",
            dark: "var(--color-alpha-facetime-static-dark)"
          },
          // Alpha/White-10 (Design Token.json)
          "white-10": {
            DEFAULT: "var(--color-alpha-white-10)",
            dark: "var(--color-alpha-white-10-dark)"
          },
          // Alpha/White-5 (Design Token.json)
          "white-5": {
            DEFAULT: "var(--color-alpha-white-5)",
            dark: "var(--color-alpha-white-5-dark)"
          },
          // Alpha/White-20 (Design Token.json)
          "white-20": {
            DEFAULT: "var(--color-alpha-white-20)",
            dark: "var(--color-alpha-white-20-dark)"
          },
          // Alpha/White-30 (Design Token.json)
          "white-30": {
            DEFAULT: "var(--color-alpha-white-30)",
            dark: "var(--color-alpha-white-30-dark)"
          },
          // Alpha/White-40 (Design Token.json)
          "white-40": {
            DEFAULT: "var(--color-alpha-white-40)",
            dark: "var(--color-alpha-white-40-dark)"
          },
          // Alpha/White-50 (Design Token.json)
          "white-50": {
            DEFAULT: "var(--color-alpha-white-50)",
            dark: "var(--color-alpha-white-50-dark)"
          },
          // Alpha/White-60 (Design Token.json)
          "white-60": {
            DEFAULT: "var(--color-alpha-white-60)",
            dark: "var(--color-alpha-white-60-dark)"
          },
          // Alpha/White-70 (Design Token.json)
          "white-70": {
            DEFAULT: "var(--color-alpha-white-70)",
            dark: "var(--color-alpha-white-70-dark)"
          },
          // Alpha/White-80 (Design Token.json)
          "white-80": {
            DEFAULT: "var(--color-alpha-white-80)",
            dark: "var(--color-alpha-white-80-dark)"
          },
          // Alpha/White-90 (Design Token.json)
          "white-90": {
            DEFAULT: "var(--color-alpha-white-90)",
            dark: "var(--color-alpha-white-90-dark)"
          },
          // Alpha/White-100 (Design Token.json)
          "white-100": {
            DEFAULT: "var(--color-alpha-white-100)",
            dark: "var(--color-alpha-white-100-dark)"
          },
          // Alpha/White-1 (Design Token.json)
          "white-1": {
            DEFAULT: "var(--color-alpha-white-1)",
            dark: "var(--color-alpha-white-1-dark)"
          },
          // Alpha/White-3 (Design Token.json)
          "white-3": {
            DEFAULT: "var(--color-alpha-white-3)",
            dark: "var(--color-alpha-white-3-dark)"
          },
          // Alpha/White-8 (Design Token.json)
          "white-8": {
            DEFAULT: "var(--color-alpha-white-8)",
            dark: "var(--color-alpha-white-8-dark)"
          },
          // Alpha/Black-1 (Design Token.json)
          "black-1": {
            DEFAULT: "var(--color-alpha-black-1)",
            dark: "var(--color-alpha-black-1-dark)"
          },
          // Alpha/Black-3 (Design Token.json)
          "black-3": {
            DEFAULT: "var(--color-alpha-black-3)",
            dark: "var(--color-alpha-black-3-dark)"
          },
          // Alpha/Black-5 (Design Token.json)
          "black-5": {
            DEFAULT: "var(--color-alpha-black-5)",
            dark: "var(--color-alpha-black-5-dark)"
          },
          // Alpha/Black-8 (Design Token.json)
          "black-8": {
            DEFAULT: "var(--color-alpha-black-8)",
            dark: "var(--color-alpha-black-8-dark)"
          },
          // Alpha/Black-10 (Design Token.json)
          "black-10": {
            DEFAULT: "var(--color-alpha-black-10)",
            dark: "var(--color-alpha-black-10-dark)"
          },
          // Alpha/Black-20 (Design Token.json)
          "black-20": {
            DEFAULT: "var(--color-alpha-black-20)",
            dark: "var(--color-alpha-black-20-dark)"
          },
          // Alpha/Black-30 (Design Token.json)
          "black-30": {
            DEFAULT: "var(--color-alpha-black-30)",
            dark: "var(--color-alpha-black-30-dark)"
          },
          // Alpha/Black-40 (Design Token.json)
          "black-40": {
            DEFAULT: "var(--color-alpha-black-40)",
            dark: "var(--color-alpha-black-40-dark)"
          },
          // Alpha/Black-50 (Design Token.json)
          "black-50": {
            DEFAULT: "var(--color-alpha-black-50)",
            dark: "var(--color-alpha-black-50-dark)"
          },
          // Alpha/Black-60 (Design Token.json)
          "black-60": {
            DEFAULT: "var(--color-alpha-black-60)",
            dark: "var(--color-alpha-black-60-dark)"
          },
          // Alpha/Black-70 (Design Token.json)
          "black-70": {
            DEFAULT: "var(--color-alpha-black-70)",
            dark: "var(--color-alpha-black-70-dark)"
          },
          // Alpha/Black-80 (Design Token.json)
          "black-80": {
            DEFAULT: "var(--color-alpha-black-80)",
            dark: "var(--color-alpha-black-80-dark)"
          },
          // Alpha/Black-90 (Design Token.json)
          "black-90": {
            DEFAULT: "var(--color-alpha-black-90)",
            dark: "var(--color-alpha-black-90-dark)"
          },
          // Alpha/Black-100 (Design Token.json)
          "black-100": {
            DEFAULT: "var(--color-alpha-black-100)",
            dark: "var(--color-alpha-black-100-dark)"
          },
      },
        "icon": {
          // Icon/Default (Design Token.json)
          "default": {
            DEFAULT: "var(--color-icon-default)",
            dark: "var(--color-icon-default-dark)"
          },
          // Icon/Subtle (Design Token.json)
          "subtle": {
            DEFAULT: "var(--color-icon-subtle)",
            dark: "var(--color-icon-subtle-dark)"
          },
          // Icon/Subtlest (Design Token.json)
          "subtlest": {
            DEFAULT: "var(--color-icon-subtlest)",
            dark: "var(--color-icon-subtlest-dark)"
          },
          // Icon/Disabled (Design Token.json)
          "disabled": {
            DEFAULT: "var(--color-icon-disabled)",
            dark: "var(--color-icon-disabled-dark)"
          },
          // Icon/Inverse (Design Token.json)
          "inverse": {
            DEFAULT: "var(--color-icon-inverse)",
            dark: "var(--color-icon-inverse-dark)"
          },
          // Icon/Critical (Design Token.json)
          "critical": {
            DEFAULT: "var(--color-icon-critical)",
            dark: "var(--color-icon-critical-dark)"
          },
          // Icon/Warning (Design Token.json)
          "warning": {
            DEFAULT: "var(--color-icon-warning)",
            dark: "var(--color-icon-warning-dark)"
          },
          // Icon/Success (Design Token.json)
          "success": {
            DEFAULT: "var(--color-icon-success)",
            dark: "var(--color-icon-success-dark)"
          },
          // Icon/Brand (Design Token.json)
          "brand": {
            DEFAULT: "var(--color-icon-brand)",
            dark: "var(--color-icon-brand-dark)"
          },
          // Icon/Static/White (Design Token.json)
          "static/white": {
            DEFAULT: "var(--color-icon-static-white)",
            dark: "var(--color-icon-static-white-dark)"
          },
          // Icon/Static/Black (Design Token.json)
          "static/black": {
            DEFAULT: "var(--color-icon-static-black)",
            dark: "var(--color-icon-static-black-dark)"
          },
          // Icon/Static/Brand (Design Token.json)
          "static/brand": {
            DEFAULT: "var(--color-icon-static-brand)",
            dark: "var(--color-icon-static-brand-dark)"
          },
      },
        "shadows": {
          // Shadows/Surface/Default (Design Token.json)
          "surface/default": {
            DEFAULT: "var(--color-shadows-surface-default)",
            dark: "var(--color-shadows-surface-default-dark)"
          },
          // Shadows/Surface/Bolder (Design Token.json)
          "surface/bolder": {
            DEFAULT: "var(--color-shadows-surface-bolder)",
            dark: "var(--color-shadows-surface-bolder-dark)"
          },
          // Shadows/Modal/Default&Bolder (Design Token.json)
          "modal/default&bolder": {
            DEFAULT: "var(--color-shadows-modal-defaultandbolder)",
            dark: "var(--color-shadows-modal-defaultandbolder-dark)"
          },
          // Shadows/Button/Basic (Design Token.json)
          "button/basic": {
            DEFAULT: "var(--color-shadows-button-basic)",
            dark: "var(--color-shadows-button-basic-dark)"
          },
          // Shadows/Button/Primary-1 (Design Token.json)
          "button/primary-1": {
            DEFAULT: "var(--color-shadows-button-primary-1)",
            dark: "var(--color-shadows-button-primary-1-dark)"
          },
          // Shadows/Button/Primary-2 (Design Token.json)
          "button/primary-2": {
            DEFAULT: "var(--color-shadows-button-primary-2)",
            dark: "var(--color-shadows-button-primary-2-dark)"
          },
          // Shadows/Button/Pressed (Design Token.json)
          "button/pressed": {
            DEFAULT: "var(--color-shadows-button-pressed)",
            dark: "var(--color-shadows-button-pressed-dark)"
          },
      },
        "focus-rings": {
          // Focus rings/Brand (Design Token.json)
          "brand": {
            DEFAULT: "var(--color-focus-rings-brand)",
            dark: "var(--color-focus-rings-brand-dark)"
          },
          // Focus rings/Error (Design Token.json)
          "error": {
            DEFAULT: "var(--color-focus-rings-error)",
            dark: "var(--color-focus-rings-error-dark)"
          },
      },
        "beta": {
          // Beta/White-1 (Design Token.json)
          "white-1": {
            DEFAULT: "var(--color-beta-white-1)",
            dark: "var(--color-beta-white-1-dark)"
          },
          // Beta/White-3 (Design Token.json)
          "white-3": {
            DEFAULT: "var(--color-beta-white-3)",
            dark: "var(--color-beta-white-3-dark)"
          },
          // Beta/White-5 (Design Token.json)
          "white-5": {
            DEFAULT: "var(--color-beta-white-5)",
            dark: "var(--color-beta-white-5-dark)"
          },
          // Beta/White-8 (Design Token.json)
          "white-8": {
            DEFAULT: "var(--color-beta-white-8)",
            dark: "var(--color-beta-white-8-dark)"
          },
          // Beta/White-10 (Design Token.json)
          "white-10": {
            DEFAULT: "var(--color-beta-white-10)",
            dark: "var(--color-beta-white-10-dark)"
          },
          // Beta/White-20 (Design Token.json)
          "white-20": {
            DEFAULT: "var(--color-beta-white-20)",
            dark: "var(--color-beta-white-20-dark)"
          },
          // Beta/White-30 (Design Token.json)
          "white-30": {
            DEFAULT: "var(--color-beta-white-30)",
            dark: "var(--color-beta-white-30-dark)"
          },
          // Beta/White-40 (Design Token.json)
          "white-40": {
            DEFAULT: "var(--color-beta-white-40)",
            dark: "var(--color-beta-white-40-dark)"
          },
          // Beta/White-50 (Design Token.json)
          "white-50": {
            DEFAULT: "var(--color-beta-white-50)",
            dark: "var(--color-beta-white-50-dark)"
          },
          // Beta/White-60 (Design Token.json)
          "white-60": {
            DEFAULT: "var(--color-beta-white-60)",
            dark: "var(--color-beta-white-60-dark)"
          },
          // Beta/White-70 (Design Token.json)
          "white-70": {
            DEFAULT: "var(--color-beta-white-70)",
            dark: "var(--color-beta-white-70-dark)"
          },
          // Beta/White-80 (Design Token.json)
          "white-80": {
            DEFAULT: "var(--color-beta-white-80)",
            dark: "var(--color-beta-white-80-dark)"
          },
          // Beta/White-90 (Design Token.json)
          "white-90": {
            DEFAULT: "var(--color-beta-white-90)",
            dark: "var(--color-beta-white-90-dark)"
          },
          // Beta/White-100 (Design Token.json)
          "white-100": {
            DEFAULT: "var(--color-beta-white-100)",
            dark: "var(--color-beta-white-100-dark)"
          },
          // Beta/Black-1 (Design Token.json)
          "black-1": {
            DEFAULT: "var(--color-beta-black-1)",
            dark: "var(--color-beta-black-1-dark)"
          },
          // Beta/Black-3 (Design Token.json)
          "black-3": {
            DEFAULT: "var(--color-beta-black-3)",
            dark: "var(--color-beta-black-3-dark)"
          },
          // Beta/Black-5 (Design Token.json)
          "black-5": {
            DEFAULT: "var(--color-beta-black-5)",
            dark: "var(--color-beta-black-5-dark)"
          },
          // Beta/Black-8 (Design Token.json)
          "black-8": {
            DEFAULT: "var(--color-beta-black-8)",
            dark: "var(--color-beta-black-8-dark)"
          },
          // Beta/Black-10 (Design Token.json)
          "black-10": {
            DEFAULT: "var(--color-beta-black-10)",
            dark: "var(--color-beta-black-10-dark)"
          },
          // Beta/Black-20 (Design Token.json)
          "black-20": {
            DEFAULT: "var(--color-beta-black-20)",
            dark: "var(--color-beta-black-20-dark)"
          },
          // Beta/Black-30 (Design Token.json)
          "black-30": {
            DEFAULT: "var(--color-beta-black-30)",
            dark: "var(--color-beta-black-30-dark)"
          },
          // Beta/Black-40 (Design Token.json)
          "black-40": {
            DEFAULT: "var(--color-beta-black-40)",
            dark: "var(--color-beta-black-40-dark)"
          },
          // Beta/Black-50 (Design Token.json)
          "black-50": {
            DEFAULT: "var(--color-beta-black-50)",
            dark: "var(--color-beta-black-50-dark)"
          },
          // Beta/Black-60 (Design Token.json)
          "black-60": {
            DEFAULT: "var(--color-beta-black-60)",
            dark: "var(--color-beta-black-60-dark)"
          },
          // Beta/Black-70 (Design Token.json)
          "black-70": {
            DEFAULT: "var(--color-beta-black-70)",
            dark: "var(--color-beta-black-70-dark)"
          },
          // Beta/Black-80 (Design Token.json)
          "black-80": {
            DEFAULT: "var(--color-beta-black-80)",
            dark: "var(--color-beta-black-80-dark)"
          },
          // Beta/Black-90 (Design Token.json)
          "black-90": {
            DEFAULT: "var(--color-beta-black-90)",
            dark: "var(--color-beta-black-90-dark)"
          },
          // Beta/Black-100 (Design Token.json)
          "black-100": {
            DEFAULT: "var(--color-beta-black-100)",
            dark: "var(--color-beta-black-100-dark)"
          },
      },
        "utility": {
          // Utility/Moss/50 (Design Token.json)
          "moss/50": {
            DEFAULT: "var(--color-utility-moss-50)",
            dark: "var(--color-utility-moss-50-dark)"
          },
          // Utility/Moss/100 (Design Token.json)
          "moss/100": {
            DEFAULT: "var(--color-utility-moss-100)",
            dark: "var(--color-utility-moss-100-dark)"
          },
          // Utility/Moss/200 (Design Token.json)
          "moss/200": {
            DEFAULT: "var(--color-utility-moss-200)",
            dark: "var(--color-utility-moss-200-dark)"
          },
          // Utility/Moss/300 (Design Token.json)
          "moss/300": {
            DEFAULT: "var(--color-utility-moss-300)",
            dark: "var(--color-utility-moss-300-dark)"
          },
          // Utility/Moss/400 (Design Token.json)
          "moss/400": {
            DEFAULT: "var(--color-utility-moss-400)",
            dark: "var(--color-utility-moss-400-dark)"
          },
          // Utility/Moss/500 (Design Token.json)
          "moss/500": {
            DEFAULT: "var(--color-utility-moss-500)",
            dark: "var(--color-utility-moss-500-dark)"
          },
          // Utility/Moss/600 (Design Token.json)
          "moss/600": {
            DEFAULT: "var(--color-utility-moss-600)",
            dark: "var(--color-utility-moss-600-dark)"
          },
          // Utility/Moss/700 (Design Token.json)
          "moss/700": {
            DEFAULT: "var(--color-utility-moss-700)",
            dark: "var(--color-utility-moss-700-dark)"
          },
          // Utility/Teal/50 (Design Token.json)
          "teal/50": {
            DEFAULT: "var(--color-utility-teal-50)",
            dark: "var(--color-utility-teal-50-dark)"
          },
          // Utility/Teal/100 (Design Token.json)
          "teal/100": {
            DEFAULT: "var(--color-utility-teal-100)",
            dark: "var(--color-utility-teal-100-dark)"
          },
          // Utility/Teal/200 (Design Token.json)
          "teal/200": {
            DEFAULT: "var(--color-utility-teal-200)",
            dark: "var(--color-utility-teal-200-dark)"
          },
          // Utility/Teal/300 (Design Token.json)
          "teal/300": {
            DEFAULT: "var(--color-utility-teal-300)",
            dark: "var(--color-utility-teal-300-dark)"
          },
          // Utility/Teal/400 (Design Token.json)
          "teal/400": {
            DEFAULT: "var(--color-utility-teal-400)",
            dark: "var(--color-utility-teal-400-dark)"
          },
          // Utility/Teal/500 (Design Token.json)
          "teal/500": {
            DEFAULT: "var(--color-utility-teal-500)",
            dark: "var(--color-utility-teal-500-dark)"
          },
          // Utility/Teal/600 (Design Token.json)
          "teal/600": {
            DEFAULT: "var(--color-utility-teal-600)",
            dark: "var(--color-utility-teal-600-dark)"
          },
          // Utility/Teal/700 (Design Token.json)
          "teal/700": {
            DEFAULT: "var(--color-utility-teal-700)",
            dark: "var(--color-utility-teal-700-dark)"
          },
          // Utility/Cyan/50 (Design Token.json)
          "cyan/50": {
            DEFAULT: "var(--color-utility-cyan-50)",
            dark: "var(--color-utility-cyan-50-dark)"
          },
          // Utility/Cyan/100 (Design Token.json)
          "cyan/100": {
            DEFAULT: "var(--color-utility-cyan-100)",
            dark: "var(--color-utility-cyan-100-dark)"
          },
          // Utility/Cyan/200 (Design Token.json)
          "cyan/200": {
            DEFAULT: "var(--color-utility-cyan-200)",
            dark: "var(--color-utility-cyan-200-dark)"
          },
          // Utility/Cyan/300 (Design Token.json)
          "cyan/300": {
            DEFAULT: "var(--color-utility-cyan-300)",
            dark: "var(--color-utility-cyan-300-dark)"
          },
          // Utility/Cyan/400 (Design Token.json)
          "cyan/400": {
            DEFAULT: "var(--color-utility-cyan-400)",
            dark: "var(--color-utility-cyan-400-dark)"
          },
          // Utility/Cyan/500 (Design Token.json)
          "cyan/500": {
            DEFAULT: "var(--color-utility-cyan-500)",
            dark: "var(--color-utility-cyan-500-dark)"
          },
          // Utility/Cyan/600 (Design Token.json)
          "cyan/600": {
            DEFAULT: "var(--color-utility-cyan-600)",
            dark: "var(--color-utility-cyan-600-dark)"
          },
          // Utility/Cyan/700 (Design Token.json)
          "cyan/700": {
            DEFAULT: "var(--color-utility-cyan-700)",
            dark: "var(--color-utility-cyan-700-dark)"
          },
          // Utility/Indigo/50 (Design Token.json)
          "indigo/50": {
            DEFAULT: "var(--color-utility-indigo-50)",
            dark: "var(--color-utility-indigo-50-dark)"
          },
          // Utility/Indigo/100 (Design Token.json)
          "indigo/100": {
            DEFAULT: "var(--color-utility-indigo-100)",
            dark: "var(--color-utility-indigo-100-dark)"
          },
          // Utility/Indigo/200 (Design Token.json)
          "indigo/200": {
            DEFAULT: "var(--color-utility-indigo-200)",
            dark: "var(--color-utility-indigo-200-dark)"
          },
          // Utility/Indigo/300 (Design Token.json)
          "indigo/300": {
            DEFAULT: "var(--color-utility-indigo-300)",
            dark: "var(--color-utility-indigo-300-dark)"
          },
          // Utility/Indigo/400 (Design Token.json)
          "indigo/400": {
            DEFAULT: "var(--color-utility-indigo-400)",
            dark: "var(--color-utility-indigo-400-dark)"
          },
          // Utility/Indigo/500 (Design Token.json)
          "indigo/500": {
            DEFAULT: "var(--color-utility-indigo-500)",
            dark: "var(--color-utility-indigo-500-dark)"
          },
          // Utility/Indigo/600 (Design Token.json)
          "indigo/600": {
            DEFAULT: "var(--color-utility-indigo-600)",
            dark: "var(--color-utility-indigo-600-dark)"
          },
          // Utility/Indigo/700 (Design Token.json)
          "indigo/700": {
            DEFAULT: "var(--color-utility-indigo-700)",
            dark: "var(--color-utility-indigo-700-dark)"
          },
          // Utility/Purple/50 (Design Token.json)
          "purple/50": {
            DEFAULT: "var(--color-utility-purple-50)",
            dark: "var(--color-utility-purple-50-dark)"
          },
          // Utility/Purple/100 (Design Token.json)
          "purple/100": {
            DEFAULT: "var(--color-utility-purple-100)",
            dark: "var(--color-utility-purple-100-dark)"
          },
          // Utility/Purple/200 (Design Token.json)
          "purple/200": {
            DEFAULT: "var(--color-utility-purple-200)",
            dark: "var(--color-utility-purple-200-dark)"
          },
          // Utility/Purple/300 (Design Token.json)
          "purple/300": {
            DEFAULT: "var(--color-utility-purple-300)",
            dark: "var(--color-utility-purple-300-dark)"
          },
          // Utility/Purple/400 (Design Token.json)
          "purple/400": {
            DEFAULT: "var(--color-utility-purple-400)",
            dark: "var(--color-utility-purple-400-dark)"
          },
          // Utility/Purple/500 (Design Token.json)
          "purple/500": {
            DEFAULT: "var(--color-utility-purple-500)",
            dark: "var(--color-utility-purple-500-dark)"
          },
          // Utility/Purple/600 (Design Token.json)
          "purple/600": {
            DEFAULT: "var(--color-utility-purple-600)",
            dark: "var(--color-utility-purple-600-dark)"
          },
          // Utility/Purple/700 (Design Token.json)
          "purple/700": {
            DEFAULT: "var(--color-utility-purple-700)",
            dark: "var(--color-utility-purple-700-dark)"
          },
          // Utility/Pink/50 (Design Token.json)
          "pink/50": {
            DEFAULT: "var(--color-utility-pink-50)",
            dark: "var(--color-utility-pink-50-dark)"
          },
          // Utility/Pink/100 (Design Token.json)
          "pink/100": {
            DEFAULT: "var(--color-utility-pink-100)",
            dark: "var(--color-utility-pink-100-dark)"
          },
          // Utility/Pink/200 (Design Token.json)
          "pink/200": {
            DEFAULT: "var(--color-utility-pink-200)",
            dark: "var(--color-utility-pink-200-dark)"
          },
          // Utility/Pink/300 (Design Token.json)
          "pink/300": {
            DEFAULT: "var(--color-utility-pink-300)",
            dark: "var(--color-utility-pink-300-dark)"
          },
          // Utility/Pink/400 (Design Token.json)
          "pink/400": {
            DEFAULT: "var(--color-utility-pink-400)",
            dark: "var(--color-utility-pink-400-dark)"
          },
          // Utility/Pink/500 (Design Token.json)
          "pink/500": {
            DEFAULT: "var(--color-utility-pink-500)",
            dark: "var(--color-utility-pink-500-dark)"
          },
          // Utility/Pink/600 (Design Token.json)
          "pink/600": {
            DEFAULT: "var(--color-utility-pink-600)",
            dark: "var(--color-utility-pink-600-dark)"
          },
          // Utility/Pink/700 (Design Token.json)
          "pink/700": {
            DEFAULT: "var(--color-utility-pink-700)",
            dark: "var(--color-utility-pink-700-dark)"
          },
          // Utility/Rosé/50 (Design Token.json)
          "rosé/50": {
            DEFAULT: "var(--color-utility-rosé-50)",
            dark: "var(--color-utility-rosé-50-dark)"
          },
          // Utility/Rosé/100 (Design Token.json)
          "rosé/100": {
            DEFAULT: "var(--color-utility-rosé-100)",
            dark: "var(--color-utility-rosé-100-dark)"
          },
          // Utility/Rosé/200 (Design Token.json)
          "rosé/200": {
            DEFAULT: "var(--color-utility-rosé-200)",
            dark: "var(--color-utility-rosé-200-dark)"
          },
          // Utility/Rosé/300 (Design Token.json)
          "rosé/300": {
            DEFAULT: "var(--color-utility-rosé-300)",
            dark: "var(--color-utility-rosé-300-dark)"
          },
          // Utility/Rosé/400 (Design Token.json)
          "rosé/400": {
            DEFAULT: "var(--color-utility-rosé-400)",
            dark: "var(--color-utility-rosé-400-dark)"
          },
          // Utility/Rosé/500 (Design Token.json)
          "rosé/500": {
            DEFAULT: "var(--color-utility-rosé-500)",
            dark: "var(--color-utility-rosé-500-dark)"
          },
          // Utility/Rosé/600 (Design Token.json)
          "rosé/600": {
            DEFAULT: "var(--color-utility-rosé-600)",
            dark: "var(--color-utility-rosé-600-dark)"
          },
          // Utility/Rosé/700 (Design Token.json)
          "rosé/700": {
            DEFAULT: "var(--color-utility-rosé-700)",
            dark: "var(--color-utility-rosé-700-dark)"
          },
          // Utility/Orange/50 (Design Token.json)
          "orange/50": {
            DEFAULT: "var(--color-utility-orange-50)",
            dark: "var(--color-utility-orange-50-dark)"
          },
          // Utility/Orange/100 (Design Token.json)
          "orange/100": {
            DEFAULT: "var(--color-utility-orange-100)",
            dark: "var(--color-utility-orange-100-dark)"
          },
          // Utility/Orange/200 (Design Token.json)
          "orange/200": {
            DEFAULT: "var(--color-utility-orange-200)",
            dark: "var(--color-utility-orange-200-dark)"
          },
          // Utility/Orange/300 (Design Token.json)
          "orange/300": {
            DEFAULT: "var(--color-utility-orange-300)",
            dark: "var(--color-utility-orange-300-dark)"
          },
          // Utility/Orange/400 (Design Token.json)
          "orange/400": {
            DEFAULT: "var(--color-utility-orange-400)",
            dark: "var(--color-utility-orange-400-dark)"
          },
          // Utility/Orange/500 (Design Token.json)
          "orange/500": {
            DEFAULT: "var(--color-utility-orange-500)",
            dark: "var(--color-utility-orange-500-dark)"
          },
          // Utility/Orange/600 (Design Token.json)
          "orange/600": {
            DEFAULT: "var(--color-utility-orange-600)",
            dark: "var(--color-utility-orange-600-dark)"
          },
          // Utility/Orange/700 (Design Token.json)
          "orange/700": {
            DEFAULT: "var(--color-utility-orange-700)",
            dark: "var(--color-utility-orange-700-dark)"
          },
          // Utility/Amber/50 (Design Token.json)
          "amber/50": {
            DEFAULT: "var(--color-utility-amber-50)",
            dark: "var(--color-utility-amber-50-dark)"
          },
          // Utility/Amber/100 (Design Token.json)
          "amber/100": {
            DEFAULT: "var(--color-utility-amber-100)",
            dark: "var(--color-utility-amber-100-dark)"
          },
          // Utility/Amber/200 (Design Token.json)
          "amber/200": {
            DEFAULT: "var(--color-utility-amber-200)",
            dark: "var(--color-utility-amber-200-dark)"
          },
          // Utility/Amber/300 (Design Token.json)
          "amber/300": {
            DEFAULT: "var(--color-utility-amber-300)",
            dark: "var(--color-utility-amber-300-dark)"
          },
          // Utility/Amber/400 (Design Token.json)
          "amber/400": {
            DEFAULT: "var(--color-utility-amber-400)",
            dark: "var(--color-utility-amber-400-dark)"
          },
          // Utility/Amber/500 (Design Token.json)
          "amber/500": {
            DEFAULT: "var(--color-utility-amber-500)",
            dark: "var(--color-utility-amber-500-dark)"
          },
          // Utility/Amber/600 (Design Token.json)
          "amber/600": {
            DEFAULT: "var(--color-utility-amber-600)",
            dark: "var(--color-utility-amber-600-dark)"
          },
          // Utility/Amber/700 (Design Token.json)
          "amber/700": {
            DEFAULT: "var(--color-utility-amber-700)",
            dark: "var(--color-utility-amber-700-dark)"
          },
          // Utility/Sky Blue/50 (Design Token.json)
          "sky blue/50": {
            DEFAULT: "var(--color-utility-sky-blue-50)",
            dark: "var(--color-utility-sky-blue-50-dark)"
          },
          // Utility/Sky Blue/100 (Design Token.json)
          "sky blue/100": {
            DEFAULT: "var(--color-utility-sky-blue-100)",
            dark: "var(--color-utility-sky-blue-100-dark)"
          },
          // Utility/Sky Blue/200 (Design Token.json)
          "sky blue/200": {
            DEFAULT: "var(--color-utility-sky-blue-200)",
            dark: "var(--color-utility-sky-blue-200-dark)"
          },
          // Utility/Sky Blue/300 (Design Token.json)
          "sky blue/300": {
            DEFAULT: "var(--color-utility-sky-blue-300)",
            dark: "var(--color-utility-sky-blue-300-dark)"
          },
          // Utility/Sky Blue/400 (Design Token.json)
          "sky blue/400": {
            DEFAULT: "var(--color-utility-sky-blue-400)",
            dark: "var(--color-utility-sky-blue-400-dark)"
          },
          // Utility/Sky Blue/500 (Design Token.json)
          "sky blue/500": {
            DEFAULT: "var(--color-utility-sky-blue-500)",
            dark: "var(--color-utility-sky-blue-500-dark)"
          },
          // Utility/Sky Blue/600 (Design Token.json)
          "sky blue/600": {
            DEFAULT: "var(--color-utility-sky-blue-600)",
            dark: "var(--color-utility-sky-blue-600-dark)"
          },
          // Utility/Sky Blue/700 (Design Token.json)
          "sky blue/700": {
            DEFAULT: "var(--color-utility-sky-blue-700)",
            dark: "var(--color-utility-sky-blue-700-dark)"
          },
      },
        "neutral": {
          // Neutral/0 (_Gradient Palette.json)
          "0": "var(--color-neutral-0)",
          // Neutral/10 (_Gradient Palette.json)
          "10": "var(--color-neutral-10)",
          // Neutral/40 (_Gradient Palette.json)
          "40": "var(--color-neutral-40)",
          // Neutral/50 (_Gradient Palette.json)
          "50": "var(--color-neutral-50)",
          // Neutral/60 (_Gradient Palette.json)
          "60": "var(--color-neutral-60)",
          // Neutral/70 (_Gradient Palette.json)
          "70": "var(--color-neutral-70)",
          // Neutral/75 (_Gradient Palette.json)
          "75": "var(--color-neutral-75)",
          // Neutral/80 (_Gradient Palette.json)
          "80": "var(--color-neutral-80)",
          // Neutral/85 (_Gradient Palette.json)
          "85": "var(--color-neutral-85)",
          // Neutral/90 (_Gradient Palette.json)
          "90": "var(--color-neutral-90)",
          // Neutral/95 (_Gradient Palette.json)
          "95": "var(--color-neutral-95)",
          // Neutral/99 (_Gradient Palette.json)
          "99": "var(--color-neutral-99)",
          // Neutral/100 (_Gradient Palette.json)
          "100": "var(--color-neutral-100)",
          // Neutral/20 (_Gradient Palette.json)
          "20": "var(--color-neutral-20)",
          // Neutral/30 (_Gradient Palette.json)
          "30": "var(--color-neutral-30)",
      },
        "neutral-variant": {
          // Neutral Variant/20 (_Gradient Palette.json)
          "20": "var(--color-neutral-variant-20)",
          // Neutral Variant/30 (_Gradient Palette.json)
          "30": "var(--color-neutral-variant-30)",
          // Neutral Variant/40 (_Gradient Palette.json)
          "40": "var(--color-neutral-variant-40)",
          // Neutral Variant/50 (_Gradient Palette.json)
          "50": "var(--color-neutral-variant-50)",
          // Neutral Variant/60 (_Gradient Palette.json)
          "60": "var(--color-neutral-variant-60)",
          // Neutral Variant/70 (_Gradient Palette.json)
          "70": "var(--color-neutral-variant-70)",
          // Neutral Variant/80 (_Gradient Palette.json)
          "80": "var(--color-neutral-variant-80)",
          // Neutral Variant/85 (_Gradient Palette.json)
          "85": "var(--color-neutral-variant-85)",
          // Neutral Variant/99 (_Gradient Palette.json)
          "99": "var(--color-neutral-variant-99)",
          // Neutral Variant/0 (_Gradient Palette.json)
          "0": "var(--color-neutral-variant-0)",
          // Neutral Variant/95 (_Gradient Palette.json)
          "95": "var(--color-neutral-variant-95)",
          // Neutral Variant/90 (_Gradient Palette.json)
          "90": "var(--color-neutral-variant-90)",
          // Neutral Variant/88 (_Gradient Palette.json)
          "88": "var(--color-neutral-variant-88)",
          // Neutral Variant/5 (_Gradient Palette.json)
          "5": "var(--color-neutral-variant-5)",
          // Neutral Variant/10 (_Gradient Palette.json)
          "10": "var(--color-neutral-variant-10)",
          // Neutral Variant/15 (_Gradient Palette.json)
          "15": "var(--color-neutral-variant-15)",
          // Neutral Variant/35 (_Gradient Palette.json)
          "35": "var(--color-neutral-variant-35)",
      },
        "blue": {
          // Blue/5 (_Gradient Palette.json)
          "5": "var(--color-blue-5)",
          // Blue/10 (_Gradient Palette.json)
          "10": "var(--color-blue-10)",
          // Blue/20 (_Gradient Palette.json)
          "20": "var(--color-blue-20)",
          // Blue/30 (_Gradient Palette.json)
          "30": "var(--color-blue-30)",
          // Blue/40 (_Gradient Palette.json)
          "40": "var(--color-blue-40)",
          // Blue/50 (_Gradient Palette.json)
          "50": "var(--color-blue-50)",
          // Blue/60 (_Gradient Palette.json)
          "60": "var(--color-blue-60)",
          // Blue/70 (_Gradient Palette.json)
          "70": "var(--color-blue-70)",
          // Blue/90 (_Gradient Palette.json)
          "90": "var(--color-blue-90)",
          // Blue/95 (_Gradient Palette.json)
          "95": "var(--color-blue-95)",
          // Blue/80 (_Gradient Palette.json)
          "80": "var(--color-blue-80)",
          // Blue/15 (_Gradient Palette.json)
          "15": "var(--color-blue-15)",
          // Blue/0 (_Gradient Palette.json)
          "0": "var(--color-blue-0)",
          // Blue/Dark/10 (_Gradient Palette.json)
          "dark/10": "var(--color-blue-dark-10)",
          // Blue/Dark/20 (_Gradient Palette.json)
          "dark/20": "var(--color-blue-dark-20)",
          // Blue/Dark/30 (_Gradient Palette.json)
          "dark/30": "var(--color-blue-dark-30)",
          // Blue/Dark/40 (_Gradient Palette.json)
          "dark/40": "var(--color-blue-dark-40)",
          // Blue/Dark/50 (_Gradient Palette.json)
          "dark/50": "var(--color-blue-dark-50)",
      },
        "red": {
          // Red/0 (_Gradient Palette.json)
          "0": "var(--color-red-0)",
          // Red/10 (_Gradient Palette.json)
          "10": "var(--color-red-10)",
          // Red/20 (_Gradient Palette.json)
          "20": "var(--color-red-20)",
          // Red/30 (_Gradient Palette.json)
          "30": "var(--color-red-30)",
          // Red/40 (_Gradient Palette.json)
          "40": "var(--color-red-40)",
          // Red/50 (_Gradient Palette.json)
          "50": "var(--color-red-50)",
          // Red/60 (_Gradient Palette.json)
          "60": "var(--color-red-60)",
          // Red/70 (_Gradient Palette.json)
          "70": "var(--color-red-70)",
          // Red/80 (_Gradient Palette.json)
          "80": "var(--color-red-80)",
          // Red/90 (_Gradient Palette.json)
          "90": "var(--color-red-90)",
          // Red/95 (_Gradient Palette.json)
          "95": "var(--color-red-95)",
          // Red/Dark/30 (_Gradient Palette.json)
          "dark/30": "var(--color-red-dark-30)",
          // Red/Dark/20 (_Gradient Palette.json)
          "dark/20": "var(--color-red-dark-20)",
          // Red/Dark/10 (_Gradient Palette.json)
          "dark/10": "var(--color-red-dark-10)",
          // Red/25 (_Gradient Palette.json)
          "25": "var(--color-red-25)",
          // Red/55 (_Gradient Palette.json)
          "55": "var(--color-red-55)",
      },
        "yellow": {
          // Yellow/5 (_Gradient Palette.json)
          "5": "var(--color-yellow-5)",
          // Yellow/10 (_Gradient Palette.json)
          "10": "var(--color-yellow-10)",
          // Yellow/20 (_Gradient Palette.json)
          "20": "var(--color-yellow-20)",
          // Yellow/30 (_Gradient Palette.json)
          "30": "var(--color-yellow-30)",
          // Yellow/40 (_Gradient Palette.json)
          "40": "var(--color-yellow-40)",
          // Yellow/35 (_Gradient Palette.json)
          "35": "var(--color-yellow-35)",
          // Yellow/60 (_Gradient Palette.json)
          "60": "var(--color-yellow-60)",
          // Yellow/70 (_Gradient Palette.json)
          "70": "var(--color-yellow-70)",
          // Yellow/80 (_Gradient Palette.json)
          "80": "var(--color-yellow-80)",
          // Yellow/90 (_Gradient Palette.json)
          "90": "var(--color-yellow-90)",
          // Yellow/95 (_Gradient Palette.json)
          "95": "var(--color-yellow-95)",
          // Yellow/15 (_Gradient Palette.json)
          "15": "var(--color-yellow-15)",
          // Yellow/Dark/10 (_Gradient Palette.json)
          "dark/10": "var(--color-yellow-dark-10)",
          // Yellow/Dark/20 (_Gradient Palette.json)
          "dark/20": "var(--color-yellow-dark-20)",
          // Yellow/Dark/30 (_Gradient Palette.json)
          "dark/30": "var(--color-yellow-dark-30)",
          // Yellow/0 (_Gradient Palette.json)
          "0": "var(--color-yellow-0)",
          // Yellow/50 (_Gradient Palette.json)
          "50": "var(--color-yellow-50)",
      },
        "aqua": {
          // Aqua/5 (_Gradient Palette.json)
          "5": "var(--color-aqua-5)",
          // Aqua/10 (_Gradient Palette.json)
          "10": "var(--color-aqua-10)",
          // Aqua/20 (_Gradient Palette.json)
          "20": "var(--color-aqua-20)",
          // Aqua/30 (_Gradient Palette.json)
          "30": "var(--color-aqua-30)",
          // Aqua/40 (_Gradient Palette.json)
          "40": "var(--color-aqua-40)",
          // Aqua/50 (_Gradient Palette.json)
          "50": "var(--color-aqua-50)",
          // Aqua/60 (_Gradient Palette.json)
          "60": "var(--color-aqua-60)",
          // Aqua/80 (_Gradient Palette.json)
          "80": "var(--color-aqua-80)",
          // Aqua/90 (_Gradient Palette.json)
          "90": "var(--color-aqua-90)",
          // Aqua/95 (_Gradient Palette.json)
          "95": "var(--color-aqua-95)",
          // Aqua/70 (_Gradient Palette.json)
          "70": "var(--color-aqua-70)",
          // Aqua/25 (_Gradient Palette.json)
          "25": "var(--color-aqua-25)",
          // Aqua/Dark/10 (_Gradient Palette.json)
          "dark/10": "var(--color-aqua-dark-10)",
          // Aqua/Dark/20 (_Gradient Palette.json)
          "dark/20": "var(--color-aqua-dark-20)",
          // Aqua/Dark/30 (_Gradient Palette.json)
          "dark/30": "var(--color-aqua-dark-30)",
          // Aqua/0 (_Gradient Palette.json)
          "0": "var(--color-aqua-0)",
          // Aqua/55 (_Gradient Palette.json)
          "55": "var(--color-aqua-55)",
          // Aqua/75 (_Gradient Palette.json)
          "75": "var(--color-aqua-75)",
      },
        "green": {
          // Green/0 (_Gradient Palette.json)
          "0": "var(--color-green-0)",
          // Green/10 (_Gradient Palette.json)
          "10": "var(--color-green-10)",
          // Green/20 (_Gradient Palette.json)
          "20": "var(--color-green-20)",
          // Green/30 (_Gradient Palette.json)
          "30": "var(--color-green-30)",
          // Green/40 (_Gradient Palette.json)
          "40": "var(--color-green-40)",
          // Green/50 (_Gradient Palette.json)
          "50": "var(--color-green-50)",
          // Green/70 (_Gradient Palette.json)
          "70": "var(--color-green-70)",
          // Green/80 (_Gradient Palette.json)
          "80": "var(--color-green-80)",
          // Green/90 (_Gradient Palette.json)
          "90": "var(--color-green-90)",
          // Green/95 (_Gradient Palette.json)
          "95": "var(--color-green-95)",
          // Green/60 (_Gradient Palette.json)
          "60": "var(--color-green-60)",
          // Green/25 (_Gradient Palette.json)
          "25": "var(--color-green-25)",
          // Green/Dark/10 (_Gradient Palette.json)
          "dark/10": "var(--color-green-dark-10)",
          // Green/Dark/20 (_Gradient Palette.json)
          "dark/20": "var(--color-green-dark-20)",
          // Green/Dark/30 (_Gradient Palette.json)
          "dark/30": "var(--color-green-dark-30)",
          // Alpha/White/20% (_Gradient Palette.json)
          "white/20percent": "var(--color-alpha-white-20percent)",
          // Alpha/Black/20% (_Gradient Palette.json)
          "black/20percent": "var(--color-alpha-black-20percent)",
          // Alpha/White/75% (_Gradient Palette.json)
          "white/75percent": "var(--color-alpha-white-75percent)",
          // Alpha/Black/75% (_Gradient Palette.json)
          "black/75percent": "var(--color-alpha-black-75percent)",
          // Alpha/White/5% (_Gradient Palette.json)
          "white/5percent": "var(--color-alpha-white-5percent)",
          // Alpha/Black/10% (_Gradient Palette.json)
          "black/10percent": "var(--color-alpha-black-10percent)",
          // Alpha/White/10% (_Gradient Palette.json)
          "white/10percent": "var(--color-alpha-white-10percent)",
          // Alpha/White/30% (_Gradient Palette.json)
          "white/30percent": "var(--color-alpha-white-30percent)",
          // Alpha/White/40% (_Gradient Palette.json)
          "white/40percent": "var(--color-alpha-white-40percent)",
          // Alpha/White/50% (_Gradient Palette.json)
          "white/50percent": "var(--color-alpha-white-50percent)",
          // Alpha/White/60% (_Gradient Palette.json)
          "white/60percent": "var(--color-alpha-white-60percent)",
          // Alpha/White/70% (_Gradient Palette.json)
          "white/70percent": "var(--color-alpha-white-70percent)",
          // Alpha/White/80% (_Gradient Palette.json)
          "white/80percent": "var(--color-alpha-white-80percent)",
          // Alpha/White/90% (_Gradient Palette.json)
          "white/90percent": "var(--color-alpha-white-90percent)",
          // Alpha/White/100% (_Gradient Palette.json)
          "white/100percent": "var(--color-alpha-white-100percent)",
          // Alpha/Black/5% (_Gradient Palette.json)
          "black/5percent": "var(--color-alpha-black-5percent)",
          // Alpha/Black/30% (_Gradient Palette.json)
          "black/30percent": "var(--color-alpha-black-30percent)",
          // Alpha/Black/40% (_Gradient Palette.json)
          "black/40percent": "var(--color-alpha-black-40percent)",
          // Alpha/Black/50% (_Gradient Palette.json)
          "black/50percent": "var(--color-alpha-black-50percent)",
          // Alpha/Black/60% (_Gradient Palette.json)
          "black/60percent": "var(--color-alpha-black-60percent)",
          // Alpha/Black/70% (_Gradient Palette.json)
          "black/70percent": "var(--color-alpha-black-70percent)",
          // Alpha/Black/80% (_Gradient Palette.json)
          "black/80percent": "var(--color-alpha-black-80percent)",
          // Alpha/Black/90% (_Gradient Palette.json)
          "black/90percent": "var(--color-alpha-black-90percent)",
          // Alpha/Black/100% (_Gradient Palette.json)
          "black/100percent": "var(--color-alpha-black-100percent)",
          // Alpha/White/1% (_Gradient Palette.json)
          "white/1percent": "var(--color-alpha-white-1percent)",
          // Alpha/White/3% (_Gradient Palette.json)
          "white/3percent": "var(--color-alpha-white-3percent)",
          // Alpha/White/8% (_Gradient Palette.json)
          "white/8percent": "var(--color-alpha-white-8percent)",
          // Alpha/Black/1% (_Gradient Palette.json)
          "black/1percent": "var(--color-alpha-black-1percent)",
          // Alpha/Black/3% (_Gradient Palette.json)
          "black/3percent": "var(--color-alpha-black-3percent)",
          // Alpha/Black/8% (_Gradient Palette.json)
          "black/8percent": "var(--color-alpha-black-8percent)",
      },
        "lemon": {
          // Lemon/40 (_Gradient Palette.json)
          "40": "var(--color-lemon-40)",
          // Lemon/70 (_Gradient Palette.json)
          "70": "var(--color-lemon-70)",
          // Lemon/90 (_Gradient Palette.json)
          "90": "var(--color-lemon-90)",
          // Lemon/10 (_Gradient Palette.json)
          "10": "var(--color-lemon-10)",
          // Lemon/20 (_Gradient Palette.json)
          "20": "var(--color-lemon-20)",
          // Lemon/60 (_Gradient Palette.json)
          "60": "var(--color-lemon-60)",
          // Lemon/80 (_Gradient Palette.json)
          "80": "var(--color-lemon-80)",
          // Lemon/50 (_Gradient Palette.json)
          "50": "var(--color-lemon-50)",
      },
        "dark-neutral": {
          // Dark Neutral/0 (_Gradient Palette.json)
          "0": "var(--color-dark-neutral-0)",
          // Dark Neutral/10 (_Gradient Palette.json)
          "10": "var(--color-dark-neutral-10)",
          // Dark Neutral/15 (_Gradient Palette.json)
          "15": "var(--color-dark-neutral-15)",
          // Dark Neutral/20 (_Gradient Palette.json)
          "20": "var(--color-dark-neutral-20)",
          // Dark Neutral/25 (_Gradient Palette.json)
          "25": "var(--color-dark-neutral-25)",
          // Dark Neutral/30 (_Gradient Palette.json)
          "30": "var(--color-dark-neutral-30)",
          // Dark Neutral/40 (_Gradient Palette.json)
          "40": "var(--color-dark-neutral-40)",
          // Dark Neutral/50 (_Gradient Palette.json)
          "50": "var(--color-dark-neutral-50)",
          // Dark Neutral/60 (_Gradient Palette.json)
          "60": "var(--color-dark-neutral-60)",
          // Dark Neutral/70 (_Gradient Palette.json)
          "70": "var(--color-dark-neutral-70)",
          // Dark Neutral/80 (_Gradient Palette.json)
          "80": "var(--color-dark-neutral-80)",
          // Dark Neutral/85 (_Gradient Palette.json)
          "85": "var(--color-dark-neutral-85)",
          // Dark Neutral/90 (_Gradient Palette.json)
          "90": "var(--color-dark-neutral-90)",
          // Dark Neutral/95 (_Gradient Palette.json)
          "95": "var(--color-dark-neutral-95)",
          // Dark Neutral/99 (_Gradient Palette.json)
          "99": "var(--color-dark-neutral-99)",
          // Dark Neutral/Special/10 (_Gradient Palette.json)
          "special/10": "var(--color-dark-neutral-special-10)",
          // Dark Neutral/Special/30 (_Gradient Palette.json)
          "special/30": "var(--color-dark-neutral-special-30)",
          // Dark Neutral/Special/40 (_Gradient Palette.json)
          "special/40": "var(--color-dark-neutral-special-40)",
          // Dark Neutral/5 (_Gradient Palette.json)
          "5": "var(--color-dark-neutral-5)",
          // Dark Neutral/Special/0 (_Gradient Palette.json)
          "special/0": "var(--color-dark-neutral-special-0)",
          // Dark Neutral/Special/5 (_Gradient Palette.json)
          "special/5": "var(--color-dark-neutral-special-5)",
          // Dark Neutral/Special/20 (_Gradient Palette.json)
          "special/20": "var(--color-dark-neutral-special-20)",
      },
        "basic": {
          // Basic/None (_Gradient Palette.json)
          "none": "var(--color-basic-none)",
          // Basic/White (_Gradient Palette.json)
          "white": "var(--color-basic-white)",
          // Basic/Black (_Gradient Palette.json)
          "black": "var(--color-basic-black)",
      },
        "moss": {
          // Moss/25 (_Gradient Palette.json)
          "25": "var(--color-moss-25)",
          // Moss/50 (_Gradient Palette.json)
          "50": "var(--color-moss-50)",
          // Moss/100 (_Gradient Palette.json)
          "100": "var(--color-moss-100)",
          // Moss/200 (_Gradient Palette.json)
          "200": "var(--color-moss-200)",
          // Moss/300 (_Gradient Palette.json)
          "300": "var(--color-moss-300)",
          // Moss/400 (_Gradient Palette.json)
          "400": "var(--color-moss-400)",
          // Moss/500 (_Gradient Palette.json)
          "500": "var(--color-moss-500)",
          // Moss/600 (_Gradient Palette.json)
          "600": "var(--color-moss-600)",
          // Moss/700 (_Gradient Palette.json)
          "700": "var(--color-moss-700)",
          // Moss/800 (_Gradient Palette.json)
          "800": "var(--color-moss-800)",
          // Moss/900 (_Gradient Palette.json)
          "900": "var(--color-moss-900)",
          // Moss/950 (_Gradient Palette.json)
          "950": "var(--color-moss-950)",
      },
        "teal": {
          // Teal/25 (_Gradient Palette.json)
          "25": "var(--color-teal-25)",
          // Teal/50 (_Gradient Palette.json)
          "50": "var(--color-teal-50)",
          // Teal/100 (_Gradient Palette.json)
          "100": "var(--color-teal-100)",
          // Teal/200 (_Gradient Palette.json)
          "200": "var(--color-teal-200)",
          // Teal/300 (_Gradient Palette.json)
          "300": "var(--color-teal-300)",
          // Teal/400 (_Gradient Palette.json)
          "400": "var(--color-teal-400)",
          // Teal/500 (_Gradient Palette.json)
          "500": "var(--color-teal-500)",
          // Teal/600 (_Gradient Palette.json)
          "600": "var(--color-teal-600)",
          // Teal/700 (_Gradient Palette.json)
          "700": "var(--color-teal-700)",
          // Teal/800 (_Gradient Palette.json)
          "800": "var(--color-teal-800)",
          // Teal/900 (_Gradient Palette.json)
          "900": "var(--color-teal-900)",
          // Teal/950 (_Gradient Palette.json)
          "950": "var(--color-teal-950)",
      },
        "cyan": {
          // Cyan/25 (_Gradient Palette.json)
          "25": "var(--color-cyan-25)",
          // Cyan/50 (_Gradient Palette.json)
          "50": "var(--color-cyan-50)",
          // Cyan/100 (_Gradient Palette.json)
          "100": "var(--color-cyan-100)",
          // Cyan/200 (_Gradient Palette.json)
          "200": "var(--color-cyan-200)",
          // Cyan/300 (_Gradient Palette.json)
          "300": "var(--color-cyan-300)",
          // Cyan/400 (_Gradient Palette.json)
          "400": "var(--color-cyan-400)",
          // Cyan/500 (_Gradient Palette.json)
          "500": "var(--color-cyan-500)",
          // Cyan/600 (_Gradient Palette.json)
          "600": "var(--color-cyan-600)",
          // Cyan/700 (_Gradient Palette.json)
          "700": "var(--color-cyan-700)",
          // Cyan/800 (_Gradient Palette.json)
          "800": "var(--color-cyan-800)",
          // Cyan/900 (_Gradient Palette.json)
          "900": "var(--color-cyan-900)",
          // Cyan/950 (_Gradient Palette.json)
          "950": "var(--color-cyan-950)",
      },
        "indigo": {
          // Indigo/25 (_Gradient Palette.json)
          "25": "var(--color-indigo-25)",
          // Indigo/50 (_Gradient Palette.json)
          "50": "var(--color-indigo-50)",
          // Indigo/100 (_Gradient Palette.json)
          "100": "var(--color-indigo-100)",
          // Indigo/200 (_Gradient Palette.json)
          "200": "var(--color-indigo-200)",
          // Indigo/300 (_Gradient Palette.json)
          "300": "var(--color-indigo-300)",
          // Indigo/400 (_Gradient Palette.json)
          "400": "var(--color-indigo-400)",
          // Indigo/500 (_Gradient Palette.json)
          "500": "var(--color-indigo-500)",
          // Indigo/600 (_Gradient Palette.json)
          "600": "var(--color-indigo-600)",
          // Indigo/700 (_Gradient Palette.json)
          "700": "var(--color-indigo-700)",
          // Indigo/800 (_Gradient Palette.json)
          "800": "var(--color-indigo-800)",
          // Indigo/900 (_Gradient Palette.json)
          "900": "var(--color-indigo-900)",
          // Indigo/950 (_Gradient Palette.json)
          "950": "var(--color-indigo-950)",
      },
        "pink": {
          // Pink/25 (_Gradient Palette.json)
          "25": "var(--color-pink-25)",
          // Pink/50 (_Gradient Palette.json)
          "50": "var(--color-pink-50)",
          // Pink/100 (_Gradient Palette.json)
          "100": "var(--color-pink-100)",
          // Pink/200 (_Gradient Palette.json)
          "200": "var(--color-pink-200)",
          // Pink/300 (_Gradient Palette.json)
          "300": "var(--color-pink-300)",
          // Pink/400 (_Gradient Palette.json)
          "400": "var(--color-pink-400)",
          // Pink/500 (_Gradient Palette.json)
          "500": "var(--color-pink-500)",
          // Pink/600 (_Gradient Palette.json)
          "600": "var(--color-pink-600)",
          // Pink/700 (_Gradient Palette.json)
          "700": "var(--color-pink-700)",
          // Pink/800 (_Gradient Palette.json)
          "800": "var(--color-pink-800)",
          // Pink/900 (_Gradient Palette.json)
          "900": "var(--color-pink-900)",
          // Pink/950 (_Gradient Palette.json)
          "950": "var(--color-pink-950)",
      },
        "rosé": {
          // Rosé/25 (_Gradient Palette.json)
          "25": "var(--color-rosé-25)",
          // Rosé/50 (_Gradient Palette.json)
          "50": "var(--color-rosé-50)",
          // Rosé/100 (_Gradient Palette.json)
          "100": "var(--color-rosé-100)",
          // Rosé/200 (_Gradient Palette.json)
          "200": "var(--color-rosé-200)",
          // Rosé/300 (_Gradient Palette.json)
          "300": "var(--color-rosé-300)",
          // Rosé/400 (_Gradient Palette.json)
          "400": "var(--color-rosé-400)",
          // Rosé/500 (_Gradient Palette.json)
          "500": "var(--color-rosé-500)",
          // Rosé/600 (_Gradient Palette.json)
          "600": "var(--color-rosé-600)",
          // Rosé/700 (_Gradient Palette.json)
          "700": "var(--color-rosé-700)",
          // Rosé/800 (_Gradient Palette.json)
          "800": "var(--color-rosé-800)",
          // Rosé/900 (_Gradient Palette.json)
          "900": "var(--color-rosé-900)",
          // Rosé/950 (_Gradient Palette.json)
          "950": "var(--color-rosé-950)",
      },
        "orange": {
          // Orange/25 (_Gradient Palette.json)
          "25": "var(--color-orange-25)",
          // Orange/50 (_Gradient Palette.json)
          "50": "var(--color-orange-50)",
          // Orange/100 (_Gradient Palette.json)
          "100": "var(--color-orange-100)",
          // Orange/200 (_Gradient Palette.json)
          "200": "var(--color-orange-200)",
          // Orange/300 (_Gradient Palette.json)
          "300": "var(--color-orange-300)",
          // Orange/400 (_Gradient Palette.json)
          "400": "var(--color-orange-400)",
          // Orange/500 (_Gradient Palette.json)
          "500": "var(--color-orange-500)",
          // Orange/600 (_Gradient Palette.json)
          "600": "var(--color-orange-600)",
          // Orange/700 (_Gradient Palette.json)
          "700": "var(--color-orange-700)",
          // Orange/800 (_Gradient Palette.json)
          "800": "var(--color-orange-800)",
          // Orange/900 (_Gradient Palette.json)
          "900": "var(--color-orange-900)",
          // Orange/950 (_Gradient Palette.json)
          "950": "var(--color-orange-950)",
      },
        "amber": {
          // Amber/50 (_Gradient Palette.json)
          "50": "var(--color-amber-50)",
          // Amber/100 (_Gradient Palette.json)
          "100": "var(--color-amber-100)",
          // Amber/200 (_Gradient Palette.json)
          "200": "var(--color-amber-200)",
          // Amber/300 (_Gradient Palette.json)
          "300": "var(--color-amber-300)",
          // Amber/400 (_Gradient Palette.json)
          "400": "var(--color-amber-400)",
          // Amber/500 (_Gradient Palette.json)
          "500": "var(--color-amber-500)",
          // Amber/600 (_Gradient Palette.json)
          "600": "var(--color-amber-600)",
          // Amber/700 (_Gradient Palette.json)
          "700": "var(--color-amber-700)",
          // Amber/800 (_Gradient Palette.json)
          "800": "var(--color-amber-800)",
          // Amber/900 (_Gradient Palette.json)
          "900": "var(--color-amber-900)",
          // Amber/950 (_Gradient Palette.json)
          "950": "var(--color-amber-950)",
          // Amber/25 (_Gradient Palette.json)
          "25": "var(--color-amber-25)",
      },
        "purple": {
          // Purple/25 (_Gradient Palette.json)
          "25": "var(--color-purple-25)",
          // Purple/50 (_Gradient Palette.json)
          "50": "var(--color-purple-50)",
          // Purple/100 (_Gradient Palette.json)
          "100": "var(--color-purple-100)",
          // Purple/200 (_Gradient Palette.json)
          "200": "var(--color-purple-200)",
          // Purple/300 (_Gradient Palette.json)
          "300": "var(--color-purple-300)",
          // Purple/400 (_Gradient Palette.json)
          "400": "var(--color-purple-400)",
          // Purple/500 (_Gradient Palette.json)
          "500": "var(--color-purple-500)",
          // Purple/600 (_Gradient Palette.json)
          "600": "var(--color-purple-600)",
          // Purple/700 (_Gradient Palette.json)
          "700": "var(--color-purple-700)",
          // Purple/800 (_Gradient Palette.json)
          "800": "var(--color-purple-800)",
          // Purple/900 (_Gradient Palette.json)
          "900": "var(--color-purple-900)",
          // Purple/950 (_Gradient Palette.json)
          "950": "var(--color-purple-950)",
      },
        "sky-blue": {
          // Sky Blue/25 (_Gradient Palette.json)
          "25": "var(--color-sky-blue-25)",
          // Sky Blue/50 (_Gradient Palette.json)
          "50": "var(--color-sky-blue-50)",
          // Sky Blue/100 (_Gradient Palette.json)
          "100": "var(--color-sky-blue-100)",
          // Sky Blue/200 (_Gradient Palette.json)
          "200": "var(--color-sky-blue-200)",
          // Sky Blue/300 (_Gradient Palette.json)
          "300": "var(--color-sky-blue-300)",
          // Sky Blue/400 (_Gradient Palette.json)
          "400": "var(--color-sky-blue-400)",
          // Sky Blue/500 (_Gradient Palette.json)
          "500": "var(--color-sky-blue-500)",
          // Sky Blue/600 (_Gradient Palette.json)
          "600": "var(--color-sky-blue-600)",
          // Sky Blue/700 (_Gradient Palette.json)
          "700": "var(--color-sky-blue-700)",
          // Sky Blue/800 (_Gradient Palette.json)
          "800": "var(--color-sky-blue-800)",
          // Sky Blue/900 (_Gradient Palette.json)
          "900": "var(--color-sky-blue-900)",
          // Sky Blue/950 (_Gradient Palette.json)
          "950": "var(--color-sky-blue-950)",
      }
      },
      spacing: {
        // Spacing/spacing-none (Base.json)
        "none": "0px",
        // Spacing/spacing-xs (Base.json)
        "xs": "4px",
        // Spacing/spacing-md (Base.json)
        "md": "8px",
        // Spacing/spacing-lg (Base.json)
        "lg": "12px",
        // Spacing/spacing-xl (Base.json)
        "xl": "16px",
        // Spacing/spacing-2xl (Base.json)
        "2xl": "20px",
        // Spacing/spacing-3xl (Base.json)
        "3xl": "24px",
        // Spacing/spacing-4xl (Base.json)
        "4xl": "32px",
        // Spacing/spacing-7xl (Base.json)
        "7xl": "56px",
        // Spacing/spacing-sm (Base.json)
        "sm": "6px",
        // Spacing/spacing-xxs (Base.json)
        "xxs": "2px",
        // Spacing/spacing-5xl (Base.json)
        "5xl": "40px",
        // Spacing/spacing-6xl (Base.json)
        "6xl": "48px",
        // Spacing/spacing-8xl (Base.json)
        "8xl": "64px",
        // Spacing/spacing-9xl (Base.json)
        "9xl": "80px",
        // Spacing/spacing-10xl (Base.json)
        "10xl": "96px",
        // Spacing/spacing-11xl (Base.json)
        "11xl": "128px",
        // Spacing/spacing-12xl (Base.json)
        "12xl": "160px"
      },
      borderRadius: {
        // Redius/radius-xl (Base.json)
        "xl": "12px",
        // Redius/radius-4xl (Base.json)
        "4xl": "24px",
        // Redius/radius-full (Base.json)
        "full": "9999px",
        // Redius/radius-md (Base.json)
        "md": "6px",
        // Redius/radius-sm (Base.json)
        "sm": "2px",
        // Redius/radius-2xl (Base.json)
        "2xl": "16px",
        // Redius/radius-lg (Base.json)
        "lg": "8px",
        // Redius/radius-none (Base.json)
        "none": "0px",
        // Redius/radius-3xl (Base.json)
        "3xl": "20px",
        // Redius/radius-default (Base.json)
        "default": "4px",
        // Redius/radius-5xl (Base.json)
        "5xl": "28px"
      },
      width: {
      },
      height: {
      },
      minWidth: {
      },
      minHeight: {
      },
      maxWidth: {
      },
      maxHeight: {
      },
      gap: {
        // Spacing/spacing-none (Base.json)
        "none": "0px",
        // Spacing/spacing-xs (Base.json)
        "xs": "4px",
        // Spacing/spacing-md (Base.json)
        "md": "8px",
        // Spacing/spacing-lg (Base.json)
        "lg": "12px",
        // Spacing/spacing-xl (Base.json)
        "xl": "16px",
        // Spacing/spacing-2xl (Base.json)
        "2xl": "20px",
        // Spacing/spacing-3xl (Base.json)
        "3xl": "24px",
        // Spacing/spacing-4xl (Base.json)
        "4xl": "32px",
        // Spacing/spacing-7xl (Base.json)
        "7xl": "56px",
        // Spacing/spacing-sm (Base.json)
        "sm": "6px",
        // Spacing/spacing-xxs (Base.json)
        "xxs": "2px",
        // Spacing/spacing-5xl (Base.json)
        "5xl": "40px",
        // Spacing/spacing-6xl (Base.json)
        "6xl": "48px",
        // Spacing/spacing-8xl (Base.json)
        "8xl": "64px",
        // Spacing/spacing-9xl (Base.json)
        "9xl": "80px",
        // Spacing/spacing-10xl (Base.json)
        "10xl": "96px",
        // Spacing/spacing-11xl (Base.json)
        "11xl": "128px",
        // Spacing/spacing-12xl (Base.json)
        "12xl": "160px"
      },
      padding: {
        // Spacing/spacing-none (Base.json)
        "none": "0px",
        // Spacing/spacing-xs (Base.json)
        "xs": "4px",
        // Spacing/spacing-md (Base.json)
        "md": "8px",
        // Spacing/spacing-lg (Base.json)
        "lg": "12px",
        // Spacing/spacing-xl (Base.json)
        "xl": "16px",
        // Spacing/spacing-2xl (Base.json)
        "2xl": "20px",
        // Spacing/spacing-3xl (Base.json)
        "3xl": "24px",
        // Spacing/spacing-4xl (Base.json)
        "4xl": "32px",
        // Spacing/spacing-7xl (Base.json)
        "7xl": "56px",
        // Spacing/spacing-sm (Base.json)
        "sm": "6px",
        // Spacing/spacing-xxs (Base.json)
        "xxs": "2px",
        // Spacing/spacing-5xl (Base.json)
        "5xl": "40px",
        // Spacing/spacing-6xl (Base.json)
        "6xl": "48px",
        // Spacing/spacing-8xl (Base.json)
        "8xl": "64px",
        // Spacing/spacing-9xl (Base.json)
        "9xl": "80px",
        // Spacing/spacing-10xl (Base.json)
        "10xl": "96px",
        // Spacing/spacing-11xl (Base.json)
        "11xl": "128px",
        // Spacing/spacing-12xl (Base.json)
        "12xl": "160px"
      },
      margin: {
        // Spacing/spacing-none (Base.json)
        "none": "0px",
        // Spacing/spacing-xs (Base.json)
        "xs": "4px",
        // Spacing/spacing-md (Base.json)
        "md": "8px",
        // Spacing/spacing-lg (Base.json)
        "lg": "12px",
        // Spacing/spacing-xl (Base.json)
        "xl": "16px",
        // Spacing/spacing-2xl (Base.json)
        "2xl": "20px",
        // Spacing/spacing-3xl (Base.json)
        "3xl": "24px",
        // Spacing/spacing-4xl (Base.json)
        "4xl": "32px",
        // Spacing/spacing-7xl (Base.json)
        "7xl": "56px",
        // Spacing/spacing-sm (Base.json)
        "sm": "6px",
        // Spacing/spacing-xxs (Base.json)
        "xxs": "2px",
        // Spacing/spacing-5xl (Base.json)
        "5xl": "40px",
        // Spacing/spacing-6xl (Base.json)
        "6xl": "48px",
        // Spacing/spacing-8xl (Base.json)
        "8xl": "64px",
        // Spacing/spacing-9xl (Base.json)
        "9xl": "80px",
        // Spacing/spacing-10xl (Base.json)
        "10xl": "96px",
        // Spacing/spacing-11xl (Base.json)
        "11xl": "128px",
        // Spacing/spacing-12xl (Base.json)
        "12xl": "160px"
      }
    }
  },
  plugins: []
}