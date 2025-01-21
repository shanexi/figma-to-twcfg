/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [],
  "theme": {
    "extend": {
      "borderRadius": {
        "xl": "12px",
        "4xl": "24px",
        "full": "9999px",
        "md": "6px",
        "sm": "2px",
        "2xl": "16px",
        "lg": "8px",
        "none": "0px",
        "3xl": "20px",
        "default": "4px",
        "5xl": "28px"
      },
      "spacing": {
        "none": "0px",
        "xs": "4px",
        "md": "8px",
        "lg": "12px",
        "xl": "16px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
        "7xl": "56px",
        "sm": "6px",
        "xxs": "2px",
        "5xl": "40px",
        "6xl": "48px",
        "8xl": "64px",
        "9xl": "80px",
        "10xl": "96px",
        "11xl": "128px",
        "12xl": "160px"
      },
      "colors": {
        "surface": {
          "primary/default": {
            "DEFAULT": "#3E5CFA",
            "dark": "#5974FF"
          },
          "primary/hovered": {
            "DEFAULT": "#2B48D8",
            "dark": "#2B48D8"
          },
          "primary/pressed": {
            "DEFAULT": "#1B35B6",
            "dark": "#1B35B6"
          },
          "default": {
            "DEFAULT": "#FFFFFF",
            "dark": "#1C1E26"
          },
          "subtle": {
            "DEFAULT": "#FAFAFB",
            "dark": "#22242E"
          },
          "container/default": {
            "DEFAULT": "#F5F7FA",
            "dark": "#17181C"
          },
          "success/default": {
            "DEFAULT": "#12D687",
            "dark": "#12D687"
          },
          "success/hovered": {
            "DEFAULT": "#0DCC7F",
            "dark": "#0DCC7F"
          },
          "critical/default": {
            "DEFAULT": "#EC2F0D",
            "dark": "#D72C0D"
          },
          "critical/hovered": {
            "DEFAULT": "#BC2200",
            "dark": "#BC2200"
          },
          "critical/pressed": {
            "DEFAULT": "#A21B00",
            "dark": "#A21B00"
          },
          "warning/default": {
            "DEFAULT": "#FDA500",
            "dark": "#FDA500"
          },
          "lemon/bold": {
            "DEFAULT": "#7E5700",
            "dark": "#FFE86B"
          },
          "lemon/default": {
            "DEFAULT": "#F3D42D",
            "dark": "#A48F07"
          },
          "lemon/subtle": {
            "DEFAULT": "#FDF5CA",
            "dark": "#454127"
          },
          "hovered": {
            "DEFAULT": "#F6F6F7",
            "dark": "#232533"
          },
          "disabled": {
            "DEFAULT": "#FAFAFB",
            "dark": "#22242E"
          },
          "pressed": {
            "DEFAULT": "#F1F2F3",
            "dark": "#2B2E3B"
          },
          "critical/subtle/hovered": {
            "DEFAULT": "#FFF0F0",
            "dark": "#4F2E2C"
          },
          "critical/subtle/pressed": {
            "DEFAULT": "#FFE9E8",
            "dark": "#612E2B"
          },
          "primary/subtle/default": {
            "DEFAULT": "#F2F4FE",
            "dark": "#2B3561"
          },
          "success/pressed": {
            "DEFAULT": "#0BB26F",
            "dark": "#0BB26F"
          },
          "success/subtle/default": {
            "DEFAULT": "#F2FAF6",
            "dark": "#293830"
          },
          "info/default": {
            "DEFAULT": "#0DA8FC",
            "dark": "#0DA8FC"
          },
          "info/hovered": {
            "DEFAULT": "#2096D6",
            "dark": "#2096D6"
          },
          "info/subtle/default": {
            "DEFAULT": "#F0FAFF",
            "dark": "#293338"
          },
          "container/hovered": {
            "DEFAULT": "#EDF0F5",
            "dark": "#27282C"
          },
          "warning/subtle/default": {
            "DEFAULT": "#FFF5EA",
            "dark": "#383029"
          },
          "container/pressed": {
            "DEFAULT": "#E4E9F0",
            "dark": "#2D2E33"
          },
          "searchfield": {
            "DEFAULT": "#FFFFFF",
            "dark": "#22242E"
          },
          "warning/subtle/hovered": {
            "DEFAULT": "#FFF2E2",
            "dark": "#4F3E2C"
          },
          "warning/subtle/pressed": {
            "DEFAULT": "#FFEBD3",
            "dark": "#61472B"
          },
          "critical/subtle/default": {
            "DEFAULT": "#FFF4F4",
            "dark": "#382A29"
          },
          "success/subtle/hovered": {
            "DEFAULT": "#E6FAF0",
            "dark": "#2C4F3E"
          },
          "success/subtle/pressed": {
            "DEFAULT": "#D9FAE9",
            "dark": "#2B6147"
          },
          "primary/subtle/hovered": {
            "DEFAULT": "#ECEFFF",
            "dark": "#2D3770"
          },
          "primary/subtle/pressed": {
            "DEFAULT": "#E0E5FF",
            "dark": "#354285"
          },
          "warning/hovered": {
            "DEFAULT": "#E8A900",
            "dark": "#E8A900"
          },
          "warning/pressed": {
            "DEFAULT": "#B98900",
            "dark": "#B98900"
          },
          "info/pressed": {
            "DEFAULT": "#2980AF",
            "dark": "#2980AF"
          },
          "info/subtle/hovered": {
            "DEFAULT": "#E0F4FF",
            "dark": "#2C434F"
          },
          "info/subtle/pressed": {
            "DEFAULT": "#D6F0FF",
            "dark": "#2B4F61"
          },
          "accent/red/subtlest": {
            "DEFAULT": "#FFF4F4",
            "dark": "#382A29"
          },
          "accent/red/bolder": {
            "DEFAULT": "#BC2200",
            "dark": "#CF371C"
          },
          "accent/red/subtler": {
            "DEFAULT": "#FFE9E8",
            "dark": "#4F2E2C"
          },
          "accent/red/subtle": {
            "DEFAULT": "#FED3D1",
            "dark": "#612E2B"
          },
          "accent/yellow/subtlest": {
            "DEFAULT": "#FFF5EA",
            "dark": "#383029"
          },
          "accent/yellow/subtler": {
            "DEFAULT": "#FFEBD3",
            "dark": "#4F3E2C"
          },
          "accent/yellow/subtle": {
            "DEFAULT": "#FFE6BB",
            "dark": "#61472B"
          },
          "accent/yellow/bolder": {
            "DEFAULT": "#E8A900",
            "dark": "#CF9E1B"
          },
          "accent/blue/subtlest": {
            "DEFAULT": "#F2F4FE",
            "dark": "#292C38"
          },
          "accent/blue/subtler": {
            "DEFAULT": "#E0E5FF",
            "dark": "#2C334F"
          },
          "accent/blue/subtle": {
            "DEFAULT": "#CCD4FF",
            "dark": "#2B3561"
          },
          "accent/blue/bolder": {
            "DEFAULT": "#2B48D8",
            "dark": "#1B39CF"
          },
          "accent/gray/subtlest": {
            "DEFAULT": "#F6F6F7",
            "dark": "#323339"
          },
          "accent/gray/subtler": {
            "DEFAULT": "#EDEEEF",
            "dark": "#42434A"
          },
          "accent/gray/subtle": {
            "DEFAULT": "#DBDDDF",
            "dark": "#54565E"
          },
          "accent/gray/bolder": {
            "DEFAULT": "#8C9196",
            "dark": "#666873"
          },
          "accent/aqua/subtlest": {
            "DEFAULT": "#F0FAFF",
            "dark": "#293338"
          },
          "accent/aqua/subtler": {
            "DEFAULT": "#D6F0FF",
            "dark": "#2C434F"
          },
          "accent/aqua/subtle": {
            "DEFAULT": "#B8E4FC",
            "dark": "#2B4F61"
          },
          "accent/aqua/bolder": {
            "DEFAULT": "#2980AF",
            "dark": "#1B93CF"
          },
          "accent/green/subtlest": {
            "DEFAULT": "#E6FAF0",
            "dark": "#293830"
          },
          "accent/green/subtler": {
            "DEFAULT": "#D9FAE9",
            "dark": "#2C4F3E"
          },
          "accent/green/subtle": {
            "DEFAULT": "#BAF9D9",
            "dark": "#2B6147"
          },
          "accent/green/bolder": {
            "DEFAULT": "#0BB26F",
            "dark": "#1BCF75"
          },
          "container/selected/default": {
            "DEFAULT": "#F2F7FE",
            "dark": "#232533"
          },
          "container/selected/hovered": {
            "DEFAULT": "#EDF4FE",
            "dark": "#383C52"
          },
          "container/selected/pressed": {
            "DEFAULT": "#E5EFFD",
            "dark": "#464B66"
          },
          "inverse": {
            "DEFAULT": "#1A1C1D",
            "dark": "#FFFFFF"
          },
          "lemon/subtlest": {
            "DEFAULT": "#FFFFFF",
            "dark": "#24210B"
          },
          "static/white": {
            "DEFAULT": "#FFFFFF",
            "dark": "#FFFFFF"
          },
          "none": {
            "DEFAULT": "#FFFFFF00",
            "dark": "#FFFFFF00"
          },
          "static/black": {
            "DEFAULT": "#1A1C1D",
            "dark": "#1A1C1D"
          },
          "container/special/subtle": {
            "DEFAULT": "#F5F7FA",
            "dark": "#22242E"
          },
          "container/special/default": {
            "DEFAULT": "#EDF0F5",
            "dark": "#2B2E3B"
          },
          "container/special/hovered": {
            "DEFAULT": "#E4E9F0",
            "dark": "#383C52"
          }
        },
        "text": {
          "default": {
            "DEFAULT": "#202223",
            "dark": "#FFFFFF"
          },
          "subtler": {
            "DEFAULT": "#6D7175",
            "dark": "#868996"
          },
          "disabled": {
            "DEFAULT": "#C9CCD0",
            "dark": "#54565E"
          },
          "warning/default": {
            "DEFAULT": "#FDA500",
            "dark": "#FFC453"
          },
          "subtlest": {
            "DEFAULT": "#8C9196",
            "dark": "#666873"
          },
          "subtle": {
            "DEFAULT": "#414345",
            "dark": "#B8BCCF"
          },
          "critical/default": {
            "DEFAULT": "#EC2F0D",
            "dark": "#FD5749"
          },
          "success/default": {
            "DEFAULT": "#0BB26F",
            "dark": "#1BCF75"
          },
          "success/bolder": {
            "DEFAULT": "#005231",
            "dark": "#BAF9D9"
          },
          "warning/bolder": {
            "DEFAULT": "#7E5700",
            "dark": "#FFE6BB"
          },
          "critical/bolder": {
            "DEFAULT": "#6C0F00",
            "dark": "#FED3D1"
          },
          "brand": {
            "DEFAULT": "#3E5CFA",
            "dark": "#5974FF"
          },
          "static/white": {
            "DEFAULT": "#FFFFFF",
            "dark": "#FFFFFF"
          },
          "static/black": {
            "DEFAULT": "#202223",
            "dark": "#202223"
          },
          "static/brand": {
            "DEFAULT": "#3E5CFA",
            "dark": "#3E5CFA"
          },
          "inverse": {
            "DEFAULT": "#FFFFFF",
            "dark": "#202223"
          }
        },
        "border": {
          "default": {
            "DEFAULT": "#E4E9F0",
            "dark": "#2D2E33"
          },
          "critical": {
            "DEFAULT": "#D72C0D",
            "dark": "#FD5749"
          },
          "hovered": {
            "DEFAULT": "#DADFE5",
            "dark": "#42434A"
          },
          "pressed": {
            "DEFAULT": "#CDD2D8",
            "dark": "#54565E"
          },
          "depressed": {
            "DEFAULT": "#B6BABF",
            "dark": "#666873"
          },
          "warning/subtle": {
            "DEFAULT": "#E1B878",
            "dark": "#E1B878"
          },
          "warning/default": {
            "DEFAULT": "#B98900",
            "dark": "#B98900"
          },
          "success": {
            "DEFAULT": "#12D687",
            "dark": "#12D687"
          },
          "brand": {
            "DEFAULT": "#3E5CFA",
            "dark": "#5974FF"
          },
          "bolder": {
            "DEFAULT": "#DADFE5",
            "dark": "#42434A"
          },
          "opaque": {
            "DEFAULT": "#FFFFFF0D",
            "dark": "#FFFFFF0D"
          },
          "static": {
            "DEFAULT": "#E4E9F0",
            "dark": "#E4E9F0"
          }
        },
        "alpha": {
          "facetime/white": {
            "DEFAULT": "#FFFFFF33",
            "dark": "#00000033"
          },
          "facetime/black": {
            "DEFAULT": "#00000033",
            "dark": "#FFFFFF33"
          },
          "mask/desktop": {
            "DEFAULT": "#000000BF",
            "dark": "#000000BF"
          },
          "mask/mobile": {
            "DEFAULT": "#000000BF",
            "dark": "#000000BF"
          },
          "facetime/static": {
            "DEFAULT": "#00000033",
            "dark": "#00000033"
          },
          "white-10": {
            "DEFAULT": "#FFFFFF1A",
            "dark": "#0000001A"
          },
          "white-5": {
            "DEFAULT": "#FFFFFF0D",
            "dark": "#0000000D"
          },
          "white-20": {
            "DEFAULT": "#FFFFFF33",
            "dark": "#00000033"
          },
          "white-30": {
            "DEFAULT": "#FFFFFF4D",
            "dark": "#0000004D"
          },
          "white-40": {
            "DEFAULT": "#FFFFFF66",
            "dark": "#00000066"
          },
          "white-50": {
            "DEFAULT": "#FFFFFF80",
            "dark": "#00000080"
          },
          "white-60": {
            "DEFAULT": "#FFFFFF99",
            "dark": "#00000099"
          },
          "white-70": {
            "DEFAULT": "#FFFFFFB2",
            "dark": "#000000B2"
          },
          "white-80": {
            "DEFAULT": "#FFFFFFCC",
            "dark": "#000000CC"
          },
          "white-90": {
            "DEFAULT": "#FFFFFFE5",
            "dark": "#000000E5"
          },
          "white-100": {
            "DEFAULT": "#FFFFFF",
            "dark": "#000000"
          },
          "white-1": {
            "DEFAULT": "#FFFFFF03",
            "dark": "#00000003"
          },
          "white-3": {
            "DEFAULT": "#FFFFFF08",
            "dark": "#00000008"
          },
          "white-8": {
            "DEFAULT": "#FFFFFF14",
            "dark": "#00000014"
          },
          "black-1": {
            "DEFAULT": "#00000003",
            "dark": "#FFFFFF03"
          },
          "black-3": {
            "DEFAULT": "#00000008",
            "dark": "#FFFFFF08"
          },
          "black-5": {
            "DEFAULT": "#0000000D",
            "dark": "#FFFFFF0D"
          },
          "black-8": {
            "DEFAULT": "#00000014",
            "dark": "#FFFFFF14"
          },
          "black-10": {
            "DEFAULT": "#0000001A",
            "dark": "#FFFFFF1A"
          },
          "black-20": {
            "DEFAULT": "#00000033",
            "dark": "#FFFFFF33"
          },
          "black-30": {
            "DEFAULT": "#0000004D",
            "dark": "#FFFFFF4D"
          },
          "black-40": {
            "DEFAULT": "#00000066",
            "dark": "#FFFFFF66"
          },
          "black-50": {
            "DEFAULT": "#00000080",
            "dark": "#FFFFFF80"
          },
          "black-60": {
            "DEFAULT": "#00000099",
            "dark": "#FFFFFF99"
          },
          "black-70": {
            "DEFAULT": "#000000B2",
            "dark": "#FFFFFFB2"
          },
          "black-80": {
            "DEFAULT": "#000000CC",
            "dark": "#FFFFFFCC"
          },
          "black-90": {
            "DEFAULT": "#000000E5",
            "dark": "#FFFFFFE5"
          },
          "black-100": {
            "DEFAULT": "#000000",
            "dark": "#FFFFFF"
          },
          "white/20%": "#FFFFFF33",
          "black/20%": "#00000033",
          "white/75%": "#FFFFFFBF",
          "black/75%": "#000000BF",
          "white/5%": "#FFFFFF0D",
          "black/10%": "#0000001A",
          "white/10%": "#FFFFFF1A",
          "white/30%": "#FFFFFF4D",
          "white/40%": "#FFFFFF66",
          "white/50%": "#FFFFFF80",
          "white/60%": "#FFFFFF99",
          "white/70%": "#FFFFFFB2",
          "white/80%": "#FFFFFFCC",
          "white/90%": "#FFFFFFE5",
          "white/100%": "#FFFFFF",
          "black/5%": "#0000000D",
          "black/30%": "#0000004D",
          "black/40%": "#00000066",
          "black/50%": "#00000080",
          "black/60%": "#00000099",
          "black/70%": "#000000B2",
          "black/80%": "#000000CC",
          "black/90%": "#000000E5",
          "black/100%": "#000000",
          "white/1%": "#FFFFFF03",
          "white/3%": "#FFFFFF08",
          "white/8%": "#FFFFFF14",
          "black/1%": "#00000003",
          "black/3%": "#00000008",
          "black/8%": "#00000014"
        },
        "icon": {
          "default": {
            "DEFAULT": "#414345",
            "dark": "#B8BCCF"
          },
          "subtle": {
            "DEFAULT": "#6D7175",
            "dark": "#868996"
          },
          "subtlest": {
            "DEFAULT": "#8C9196",
            "dark": "#5C5F62"
          },
          "disabled": {
            "DEFAULT": "#C9CCD0",
            "dark": "#54565E"
          },
          "inverse": {
            "DEFAULT": "#FFFFFF",
            "dark": "#414345"
          },
          "critical": {
            "DEFAULT": "#EC2F0D",
            "dark": "#FD5749"
          },
          "warning": {
            "DEFAULT": "#FDA500",
            "dark": "#FFC453"
          },
          "success": {
            "DEFAULT": "#0BB26F",
            "dark": "#1BCF75"
          },
          "brand": {
            "DEFAULT": "#3E5CFA",
            "dark": "#5974FF"
          },
          "static/white": {
            "DEFAULT": "#FFFFFF",
            "dark": "#FFFFFF"
          },
          "static/black": {
            "DEFAULT": "#414345",
            "dark": "#414345"
          },
          "static/brand": {
            "DEFAULT": "#3E5CFA",
            "dark": "#3E5CFA"
          }
        },
        "shadows": {
          "surface/default": {
            "DEFAULT": "#0000001A",
            "dark": "#FFFFFF0D"
          },
          "surface/bolder": {
            "DEFAULT": "#00000008",
            "dark": "#FFFFFF08"
          },
          "modal/default&bolder": {
            "DEFAULT": "#0000001A",
            "dark": "#FFFFFF03"
          },
          "button/basic": {
            "DEFAULT": "#0000000D",
            "dark": "#FFFFFF0D"
          },
          "button/primary-1": {
            "DEFAULT": "#00000014",
            "dark": "#FFFFFF14"
          },
          "button/primary-2": {
            "DEFAULT": "#00000033",
            "dark": "#FFFFFF33"
          },
          "button/pressed": {
            "DEFAULT": "#0000000D",
            "dark": "#FFFFFF1A"
          }
        },
        "focus rings": {
          "brand": {
            "DEFAULT": "#458FFF",
            "dark": "#458FFF"
          },
          "error": {
            "DEFAULT": "#FF5353",
            "dark": "#FF5353"
          }
        },
        "beta": {
          "white-1": {
            "DEFAULT": "#FFFFFF03",
            "dark": "#FFFFFF03"
          },
          "white-3": {
            "DEFAULT": "#FFFFFF08",
            "dark": "#FFFFFF08"
          },
          "white-5": {
            "DEFAULT": "#FFFFFF0D",
            "dark": "#FFFFFF0D"
          },
          "white-8": {
            "DEFAULT": "#FFFFFF14",
            "dark": "#FFFFFF14"
          },
          "white-10": {
            "DEFAULT": "#FFFFFF1A",
            "dark": "#FFFFFF1A"
          },
          "white-20": {
            "DEFAULT": "#FFFFFF33",
            "dark": "#FFFFFF33"
          },
          "white-30": {
            "DEFAULT": "#FFFFFF4D",
            "dark": "#FFFFFF4D"
          },
          "white-40": {
            "DEFAULT": "#FFFFFF66",
            "dark": "#FFFFFF66"
          },
          "white-50": {
            "DEFAULT": "#FFFFFF80",
            "dark": "#FFFFFF80"
          },
          "white-60": {
            "DEFAULT": "#FFFFFF99",
            "dark": "#FFFFFF99"
          },
          "white-70": {
            "DEFAULT": "#FFFFFFB2",
            "dark": "#FFFFFFB2"
          },
          "white-80": {
            "DEFAULT": "#FFFFFFCC",
            "dark": "#FFFFFFCC"
          },
          "white-90": {
            "DEFAULT": "#FFFFFFE5",
            "dark": "#FFFFFFE5"
          },
          "white-100": {
            "DEFAULT": "#FFFFFF",
            "dark": "#FFFFFF"
          },
          "black-1": {
            "DEFAULT": "#00000003",
            "dark": "#00000003"
          },
          "black-3": {
            "DEFAULT": "#00000008",
            "dark": "#00000008"
          },
          "black-5": {
            "DEFAULT": "#0000000D",
            "dark": "#0000000D"
          },
          "black-8": {
            "DEFAULT": "#00000014",
            "dark": "#00000014"
          },
          "black-10": {
            "DEFAULT": "#0000001A",
            "dark": "#0000001A"
          },
          "black-20": {
            "DEFAULT": "#00000033",
            "dark": "#00000033"
          },
          "black-30": {
            "DEFAULT": "#0000004D",
            "dark": "#0000004D"
          },
          "black-40": {
            "DEFAULT": "#00000066",
            "dark": "#00000066"
          },
          "black-50": {
            "DEFAULT": "#00000080",
            "dark": "#00000080"
          },
          "black-60": {
            "DEFAULT": "#00000099",
            "dark": "#00000099"
          },
          "black-70": {
            "DEFAULT": "#000000B2",
            "dark": "#000000B2"
          },
          "black-80": {
            "DEFAULT": "#000000CC",
            "dark": "#000000CC"
          },
          "black-90": {
            "DEFAULT": "#000000E5",
            "dark": "#000000E5"
          },
          "black-100": {
            "DEFAULT": "#000000",
            "dark": "#000000"
          }
        },
        "utility": {
          "moss/50": {
            "DEFAULT": "#F5FBEE",
            "dark": "#1A280B"
          },
          "moss/100": {
            "DEFAULT": "#E6F4D7",
            "dark": "#2B4212"
          },
          "moss/200": {
            "DEFAULT": "#CEEAB0",
            "dark": "#335015"
          },
          "moss/300": {
            "DEFAULT": "#ACDC79",
            "dark": "#3F621A"
          },
          "moss/400": {
            "DEFAULT": "#86CB3C",
            "dark": "#4F7A21"
          },
          "moss/500": {
            "DEFAULT": "#669F2A",
            "dark": "#669F2A"
          },
          "moss/600": {
            "DEFAULT": "#4F7A21",
            "dark": "#86CB3C"
          },
          "moss/700": {
            "DEFAULT": "#3F621A",
            "dark": "#ACDC79"
          },
          "teal/50": {
            "DEFAULT": "#F0FDF9",
            "dark": "#0A2926"
          },
          "teal/100": {
            "DEFAULT": "#CCFBEF",
            "dark": "#134E48"
          },
          "teal/200": {
            "DEFAULT": "#99F6E0",
            "dark": "#125D56"
          },
          "teal/300": {
            "DEFAULT": "#5FE9D0",
            "dark": "#107569"
          },
          "teal/400": {
            "DEFAULT": "#2ED3B7",
            "dark": "#0E9384"
          },
          "teal/500": {
            "DEFAULT": "#15B79E",
            "dark": "#15B79E"
          },
          "teal/600": {
            "DEFAULT": "#0E9384",
            "dark": "#2ED3B7"
          },
          "teal/700": {
            "DEFAULT": "#107569",
            "dark": "#5FE9D0"
          },
          "cyan/50": {
            "DEFAULT": "#ECFDFF",
            "dark": "#0D2D3A"
          },
          "cyan/100": {
            "DEFAULT": "#CFF9FE",
            "dark": "#164C63"
          },
          "cyan/200": {
            "DEFAULT": "#A5F0FC",
            "dark": "#155B75"
          },
          "cyan/300": {
            "DEFAULT": "#67E3F9",
            "dark": "#0E7090"
          },
          "cyan/400": {
            "DEFAULT": "#22CCEE",
            "dark": "#088AB2"
          },
          "cyan/500": {
            "DEFAULT": "#06AED4",
            "dark": "#06AED4"
          },
          "cyan/600": {
            "DEFAULT": "#088AB2",
            "dark": "#22CCEE"
          },
          "cyan/700": {
            "DEFAULT": "#0E7090",
            "dark": "#67E3F9"
          },
          "indigo/50": {
            "DEFAULT": "#EEF4FF",
            "dark": "#1F235B"
          },
          "indigo/100": {
            "DEFAULT": "#E0EAFF",
            "dark": "#2D3282"
          },
          "indigo/200": {
            "DEFAULT": "#C7D7FE",
            "dark": "#2D31A6"
          },
          "indigo/300": {
            "DEFAULT": "#A4BCFD",
            "dark": "#3538CD"
          },
          "indigo/400": {
            "DEFAULT": "#8098F9",
            "dark": "#444CE7"
          },
          "indigo/500": {
            "DEFAULT": "#6172F3",
            "dark": "#6172F3"
          },
          "indigo/600": {
            "DEFAULT": "#444CE7",
            "dark": "#8098F9"
          },
          "indigo/700": {
            "DEFAULT": "#3538CD",
            "dark": "#A4BCFD"
          },
          "purple/50": {
            "DEFAULT": "#F4F3FF",
            "dark": "#27115F"
          },
          "purple/100": {
            "DEFAULT": "#EBE9FE",
            "dark": "#3E1C96"
          },
          "purple/200": {
            "DEFAULT": "#D9D6FE",
            "dark": "#4A1FB8"
          },
          "purple/300": {
            "DEFAULT": "#BDB4FE",
            "dark": "#5925DC"
          },
          "purple/400": {
            "DEFAULT": "#BDB4FE",
            "dark": "#6938EF"
          },
          "purple/500": {
            "DEFAULT": "#7A5AF8",
            "dark": "#7A5AF8"
          },
          "purple/600": {
            "DEFAULT": "#6938EF",
            "dark": "#BDB4FE"
          },
          "purple/700": {
            "DEFAULT": "#5925DC",
            "dark": "#BDB4FE"
          },
          "pink/50": {
            "DEFAULT": "#FDF2FA",
            "dark": "#4E0D30"
          },
          "pink/100": {
            "DEFAULT": "#FCE7F6",
            "dark": "#851651"
          },
          "pink/200": {
            "DEFAULT": "#FCCEEE",
            "dark": "#9E165F"
          },
          "pink/300": {
            "DEFAULT": "#FAA7E0",
            "dark": "#C11574"
          },
          "pink/400": {
            "DEFAULT": "#F670C7",
            "dark": "#DD2590"
          },
          "pink/500": {
            "DEFAULT": "#EE46BC",
            "dark": "#EE46BC"
          },
          "pink/600": {
            "DEFAULT": "#DD2590",
            "dark": "#F670C7"
          },
          "pink/700": {
            "DEFAULT": "#C11574",
            "dark": "#FAA7E0"
          },
          "rosé/50": {
            "DEFAULT": "#FFF1F3",
            "dark": "#510B24"
          },
          "rosé/100": {
            "DEFAULT": "#FFE4E8",
            "dark": "#89123E"
          },
          "rosé/200": {
            "DEFAULT": "#FECDD6",
            "dark": "#A11043"
          },
          "rosé/300": {
            "DEFAULT": "#FEA3B4",
            "dark": "#C01048"
          },
          "rosé/400": {
            "DEFAULT": "#FD6F8E",
            "dark": "#E31B54"
          },
          "rosé/500": {
            "DEFAULT": "#F63D68",
            "dark": "#F63D68"
          },
          "rosé/600": {
            "DEFAULT": "#E31B54",
            "dark": "#FD6F8E"
          },
          "rosé/700": {
            "DEFAULT": "#C01048",
            "dark": "#FEA3B4"
          },
          "orange/50": {
            "DEFAULT": "#FEF6EE",
            "dark": "#511C10"
          },
          "orange/100": {
            "DEFAULT": "#FDEAD7",
            "dark": "#772917"
          },
          "orange/200": {
            "DEFAULT": "#F9DBAF",
            "dark": "#932F19"
          },
          "orange/300": {
            "DEFAULT": "#F7B27A",
            "dark": "#B93815"
          },
          "orange/400": {
            "DEFAULT": "#F38744",
            "dark": "#E04F16"
          },
          "orange/500": {
            "DEFAULT": "#EF6820",
            "dark": "#EF6820"
          },
          "orange/600": {
            "DEFAULT": "#E04F16",
            "dark": "#F38744"
          },
          "orange/700": {
            "DEFAULT": "#B93815",
            "dark": "#F7B27A"
          },
          "amber/50": {
            "DEFAULT": "#FEFBE8",
            "dark": "#542C0D"
          },
          "amber/100": {
            "DEFAULT": "#FEF7C3",
            "dark": "#713B12"
          },
          "amber/200": {
            "DEFAULT": "#FEEE95",
            "dark": "#854A0E"
          },
          "amber/300": {
            "DEFAULT": "#FDE272",
            "dark": "#A15C07"
          },
          "amber/400": {
            "DEFAULT": "#FAC515",
            "dark": "#CA8504"
          },
          "amber/500": {
            "DEFAULT": "#EAAA08",
            "dark": "#EAAA08"
          },
          "amber/600": {
            "DEFAULT": "#CA8504",
            "dark": "#FAC515"
          },
          "amber/700": {
            "DEFAULT": "#A15C07",
            "dark": "#FDE272"
          },
          "sky blue/50": {
            "DEFAULT": "#EFF8FF",
            "dark": "#102A56"
          },
          "sky blue/100": {
            "DEFAULT": "#D1E9FF",
            "dark": "#194185"
          },
          "sky blue/200": {
            "DEFAULT": "#B2DDFF",
            "dark": "#1849A9"
          },
          "sky blue/300": {
            "DEFAULT": "#84CAFF",
            "dark": "#175CD3"
          },
          "sky blue/400": {
            "DEFAULT": "#53B1FD",
            "dark": "#1570EF"
          },
          "sky blue/500": {
            "DEFAULT": "#2E90FA",
            "dark": "#2E90FA"
          },
          "sky blue/600": {
            "DEFAULT": "#1570EF",
            "dark": "#53B1FD"
          },
          "sky blue/700": {
            "DEFAULT": "#175CD3",
            "dark": "#84CAFF"
          }
        },
        "neutral": {
          "0": "#1A1C1D",
          "10": "#202223",
          "20": "#323436",
          "30": "#414345",
          "40": "#5C5F62",
          "50": "#6D7175",
          "60": "#8C9196",
          "70": "#C9CCD0",
          "75": "#DBDDDF",
          "80": "#E4E5E7",
          "85": "#EDEEEF",
          "90": "#F1F2F3",
          "95": "#F6F6F7",
          "99": "#FAFAFB",
          "100": "#FFFFFF"
        },
        "neutral variant": {
          "0": "#17191C",
          "5": "#27292C",
          "10": "#323539",
          "15": "#42454A",
          "20": "#363F4D",
          "30": "#444F61",
          "35": "#4F5C70",
          "40": "#9DA1A6",
          "50": "#B6BABF",
          "60": "#CDD2D8",
          "70": "#DADFE5",
          "80": "#E4E9F0",
          "85": "#EDF0F5",
          "88": "#E5EFFD",
          "90": "#EDF4FE",
          "95": "#F2F7FE",
          "99": "#F5F7FA"
        },
        "blue": {
          "0": "#0B1964",
          "5": "#0E2494",
          "10": "#1B35B6",
          "15": "#1B39CF",
          "20": "#2B48D8",
          "30": "#3E5CFA",
          "40": "#5974FF",
          "50": "#788EFF",
          "60": "#95A6FF",
          "70": "#CCD4FF",
          "80": "#E0E5FF",
          "90": "#ECEFFF",
          "95": "#F2F4FE",
          "dark/10": "#292C38",
          "dark/20": "#2C334F",
          "dark/30": "#2B3561",
          "dark/40": "#2D3770",
          "dark/50": "#354285"
        },
        "red": {
          "0": "#6C0F00",
          "10": "#A21B00",
          "20": "#BC2200",
          "25": "#CF371C",
          "30": "#D72C0D",
          "40": "#EC2F0D",
          "50": "#FD5749",
          "55": "#FF5353",
          "60": "#FEBCB9",
          "70": "#FED3D1",
          "80": "#FFE9E8",
          "90": "#FFF0F0",
          "95": "#FFF4F4",
          "dark/30": "#612E2B",
          "dark/20": "#4F2E2C",
          "dark/10": "#382A29"
        },
        "yellow": {
          "0": "#403624",
          "5": "#7E5700",
          "10": "#B98900",
          "15": "#CF9E1B",
          "20": "#E8A900",
          "30": "#FDA500",
          "35": "#E1B878",
          "40": "#FFC453",
          "50": "#FFD06A",
          "60": "#FFD79D",
          "70": "#FFE6BB",
          "80": "#FFEBD3",
          "90": "#FFF2E2",
          "95": "#FFF5EA",
          "dark/10": "#383029",
          "dark/20": "#4F3E2C",
          "dark/30": "#61472B"
        },
        "aqua": {
          "0": "#243640",
          "5": "#093852",
          "10": "#0F5C85",
          "20": "#2980AF",
          "25": "#1B93CF",
          "30": "#2096D6",
          "40": "#0DA8FC",
          "50": "#5DC4FC",
          "55": "#6ACBFF",
          "60": "#95D8FC",
          "70": "#B8E4FC",
          "75": "#C7EBFF",
          "80": "#D6F0FF",
          "90": "#E0F4FF",
          "95": "#F0FAFF",
          "dark/10": "#293338",
          "dark/20": "#2C434F",
          "dark/30": "#2B4F61"
        },
        "green": {
          "0": "#005231",
          "10": "#006D41",
          "20": "#0BB26F",
          "25": "#1BCF75",
          "30": "#0DCC7F",
          "40": "#12D687",
          "50": "#18CE79",
          "60": "#86F7BE",
          "70": "#BAF9D9",
          "80": "#D9FAE9",
          "90": "#E6FAF0",
          "95": "#F2FAF6",
          "dark/10": "#293830",
          "dark/20": "#2C4F3E",
          "dark/30": "#2B6147"
        },
        "lemon": {
          "10": "#24210B",
          "20": "#454127",
          "40": "#8F7D1A",
          "50": "#A48F07",
          "60": "#CFAF00",
          "70": "#F3D42D",
          "80": "#FFE86B",
          "90": "#FDF5CA"
        },
        "dark neutral": {
          "0": "#17181C",
          "5": "#1B1C21",
          "10": "#27282C",
          "15": "#2D2E33",
          "20": "#323339",
          "25": "#42434A",
          "30": "#54565E",
          "40": "#666873",
          "50": "#797B87",
          "60": "#868996",
          "70": "#9699A8",
          "80": "#A6A9BA",
          "85": "#B8BCCF",
          "90": "#CACFE3",
          "95": "#D4D8ED",
          "99": "#E1E6FC",
          "special/10": "#232533",
          "special/30": "#383C52",
          "special/40": "#464B66",
          "special/0": "#1C1E26",
          "special/5": "#22242E",
          "special/20": "#2B2E3B"
        },
        "basic": {
          "none": "#FFFFFF00",
          "white": "#FFFFFF",
          "black": "#000000"
        },
        "moss": {
          "25": "#FAFDF7",
          "50": "#F5FBEE",
          "100": "#E6F4D7",
          "200": "#CEEAB0",
          "300": "#ACDC79",
          "400": "#86CB3C",
          "500": "#669F2A",
          "600": "#4F7A21",
          "700": "#3F621A",
          "800": "#335015",
          "900": "#2B4212",
          "950": "#1A280B"
        },
        "teal": {
          "25": "#F6FEFC",
          "50": "#F0FDF9",
          "100": "#CCFBEF",
          "200": "#99F6E0",
          "300": "#5FE9D0",
          "400": "#2ED3B7",
          "500": "#15B79E",
          "600": "#0E9384",
          "700": "#107569",
          "800": "#125D56",
          "900": "#134E48",
          "950": "#0A2926"
        },
        "cyan": {
          "25": "#F5FEFF",
          "50": "#ECFDFF",
          "100": "#CFF9FE",
          "200": "#A5F0FC",
          "300": "#67E3F9",
          "400": "#22CCEE",
          "500": "#06AED4",
          "600": "#088AB2",
          "700": "#0E7090",
          "800": "#155B75",
          "900": "#164C63",
          "950": "#0D2D3A"
        },
        "indigo": {
          "25": "#F5F8FF",
          "50": "#EEF4FF",
          "100": "#E0EAFF",
          "200": "#C7D7FE",
          "300": "#A4BCFD",
          "400": "#8098F9",
          "500": "#6172F3",
          "600": "#444CE7",
          "700": "#3538CD",
          "800": "#2D31A6",
          "900": "#2D3282",
          "950": "#1F235B"
        },
        "pink": {
          "25": "#FEF6FB",
          "50": "#FDF2FA",
          "100": "#FCE7F6",
          "200": "#FCCEEE",
          "300": "#FAA7E0",
          "400": "#F670C7",
          "500": "#EE46BC",
          "600": "#DD2590",
          "700": "#C11574",
          "800": "#9E165F",
          "900": "#851651",
          "950": "#4E0D30"
        },
        "rosé": {
          "25": "#FFF5F6",
          "50": "#FFF1F3",
          "100": "#FFE4E8",
          "200": "#FECDD6",
          "300": "#FEA3B4",
          "400": "#FD6F8E",
          "500": "#F63D68",
          "600": "#E31B54",
          "700": "#C01048",
          "800": "#A11043",
          "900": "#89123E",
          "950": "#510B24"
        },
        "orange": {
          "25": "#FEFAF5",
          "50": "#FEF6EE",
          "100": "#FDEAD7",
          "200": "#F9DBAF",
          "300": "#F7B27A",
          "400": "#F38744",
          "500": "#EF6820",
          "600": "#E04F16",
          "700": "#B93815",
          "800": "#932F19",
          "900": "#772917",
          "950": "#511C10"
        },
        "amber": {
          "25": "#FEFDF0",
          "50": "#FEFBE8",
          "100": "#FEF7C3",
          "200": "#FEEE95",
          "300": "#FDE272",
          "400": "#FAC515",
          "500": "#EAAA08",
          "600": "#CA8504",
          "700": "#A15C07",
          "800": "#854A0E",
          "900": "#713B12",
          "950": "#542C0D"
        },
        "purple": {
          "25": "#FAFAFF",
          "50": "#F4F3FF",
          "100": "#EBE9FE",
          "200": "#D9D6FE",
          "300": "#BDB4FE",
          "400": "#BDB4FE",
          "500": "#7A5AF8",
          "600": "#6938EF",
          "700": "#5925DC",
          "800": "#4A1FB8",
          "900": "#3E1C96",
          "950": "#27115F"
        },
        "sky blue": {
          "25": "#F5FAFF",
          "50": "#EFF8FF",
          "100": "#D1E9FF",
          "200": "#B2DDFF",
          "300": "#84CAFF",
          "400": "#53B1FD",
          "500": "#2E90FA",
          "600": "#1570EF",
          "700": "#175CD3",
          "800": "#1849A9",
          "900": "#194185",
          "950": "#102A56"
        }
      }
    }
  },
  "plugins": []
}