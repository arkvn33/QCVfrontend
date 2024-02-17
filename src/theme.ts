import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
// color design tokens
export const tokens = (mode: PaletteMode) => ({
  ...(mode === "dark"
    ? {
        paper: {
          100: "#111936",
          200: "#1a223f",
        },
        dark: {
          darkLevel1: "#29314f",
          darkLevel2: "#212946",
        },
        grey: {
          grey50: "#f8fafc",
          grey100: "#eef2f6",
          grey200: "#eeeeee",
          grey300: "#e0e0e0",
          grey500: "#8492c4",
          grey600: "#d7dcec",
          grey700: "#BDC8F0",
          grey900: "#BDC8F0",
          pureWhite: "#FFFFFF",
        },
        primary: {
          primaryLight: "#e3f2fd",
          primary200: "#90caf9",
          primaryMain: "#2196f3",
          primaryDark: "#1e88e5",
          Primary800: "#1565c0",
        },
        secondary: {
          secondaryLight: "#d1c4e9",
          secondary200: "#b39ddb",
          secondaryMain: "#7c4dff",
          secondaryDark: "#651fff",
          secondary800: "#6200ea",
        },
        success: {
          successLight: "#b9f6ca",
          success200: "#69f0ae",
          successMain: "#00e676",
          successDark: "#00c853",
        },
        orange: {
          orangeLight: "#fbe9e7",
          orangeMain: "#ffab91",
          orangeDark: "#d84315",
        },
        error: {
          errorLight: "#ef9a9a",
          errorMain: "#f44336",
          errorDark: "#c62828",
        },
        warning: {
          warningLight: "#fff8e1",
          warningMain: "#ffe57f",
          warningDark: "#ffc107",
        },
        textVariant: {
          TextTitle: "#d7dcec",
          TextPrimary: "#bdc8f0",
          TextSecondary: "#8492c4",
        },
      }
    : {
        paper: {
          100: "#ffffff",
          200: "#EEF2F6",
        },
        dark: {
          darkLevel1: "#29314f",
          darkLevel2: "#212946",
        },
        grey: {
          grey50: "#F8FAFC",
          grey100: "#EEF2F6",
          grey200: "#EEEEEE",
          grey300: "#E0E0E0",
          grey500: "#697586",
          grey600: "#4B5565",
          grey700: "#364152",
          grey900: "#121926",
          pureWhite: "#FFFFFF",
        },
        primary: {
          primaryLight: "#E3F2FD",
          primary200: "#90CAF9",
          primaryMain: "#2196F3",
          primaryDark: "#1E88E5",
          primary800: "#1565C0",
        },
        secondary: {
          secondaryLight: "#EDE7F6",
          secondary200: "#B39DDB",
          secondaryMain: "#673AB7",
          secondaryDark: "#5E35B1",
          secondary800: "#4527A0",
        },
        success: {
          successLight: "#B9F6CA",
          success200: "#69F0AE",
          successMain: "#00E676",
          successDark: "#00C853",
        },
        orange: {
          orangeLight: "#FBE9E7",
          orangeMain: "#FFAB91",
          orangeDark: "#D84315",
        },
        error: {
          errorLight: "#EF9A9A",
          errorMain: "#F44336",
          errorDark: "#C62828",
        },
        warning: {
          warningLight: "#FFF8E1",
          warningMain: "#FFE57F",
          warningDark: "#FFC107",
        },
        textVariant: {
          TextTitle: "#121926",
          TextPrimary: "#364152",
          TextSecondary: "#8492c4",
        },
      }),
});

//mui theme settings

export const themeSettings = (mode: PaletteMode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            paper: {
              background: colors.paper[100],
              paper: colors.paper[200],
            },
            background: {
              default: colors.paper[100],
            },
            // dark: {
            //   darkLevel1: colors.dark[100],
            //   darkLevel2: colors.dark[200],
            // },
            // grey: {
            //   grey50: colors.grey[100],
            //   grey100: colors.grey[200],
            //   grey200: colors.grey[300],
            //   grey300: colors.grey[400],
            //   grey500: colors.grey[500],
            //   grey600: colors.grey[600],
            //   grey700: colors.grey[700],
            //   grey900: colors.grey[800],
            //   pureWhite: colors.grey[900],
            // },
            // primary: {
            //   primaryLight: colors.primary[100],
            //   primary200: colors.primary[200],
            //   primaryMain: colors.primary[300],
            //   primaryDark: colors.primary[400],
            //   Primary800: colors.primary[500],
            // },
            // secondary: {
            //   secondaryLight: colors.secondary[100],
            //   secondary200: colors.secondary[200],
            //   secondaryMain: colors.secondary[300],
            //   secondaryDark: colors.secondary[400],
            //   secondary800: colors.secondary[500],
            // },
            // success: {
            //   successLight: colors.success[100],
            //   success200: colors.success[200],
            //   successMain: colors.success[300],
            //   successDark: colors.success[400],
            // },
            // orange: {
            //   orangeLight: colors.orange[100],
            //   orangeMain: colors.orange[200],
            //   orangeDark: colors.orange[300],
            // },
            // error: {
            //   errorLight: colors.error[100],
            //   errorMain: colors.error[200],
            //   errorDark: colors.error[300],
            // },
            // warning: {
            //   warningLight: colors.warning[100],
            //   warningMain: colors.warning[200],
            //   warningDark: colors.warning[300],
            // },
            // textVariant: {
            //   textTitle: colors.textVariant[100],
            //   textPrimary: colors.textVariant[200],
            //   textSecondary: colors.textVariant[300],
            // },
          }
        : {
            paper: {
              background: colors.paper[100],
              paper: colors.paper[200],
            },
            background: {
              default: colors.paper[100],
            },
            // dark: {
            //   darkLevel1: colors.dark[100],
            //   darkLevel2: colors.dark[200],
            // },
            // grey: {
            //   grey50: colors.grey[100],
            //   grey100: colors.grey[200],
            //   grey200: colors.grey[300],
            //   grey300: colors.grey[400],
            //   grey500: colors.grey[500],
            //   grey600: colors.grey[600],
            //   grey700: colors.grey[700],
            //   grey900: colors.grey[800],
            //   pureWhite: colors.grey[900],
            // },
            // primary: {
            //   primaryLight: colors.primary[100],
            //   primary200: colors.primary[200],
            //   primaryMain: colors.primary[300],
            //   primaryDark: colors.primary[400],
            //   Primary800: colors.primary[500],
            // },
            // secondary: {
            //   secondaryLight: colors.secondary[100],
            //   secondary200: colors.secondary[200],
            //   secondaryMain: colors.secondary[300],
            //   secondaryDark: colors.secondary[400],
            //   secondary800: colors.secondary[500],
            // },
            // success: {
            //   successLight: colors.success[100],
            //   success200: colors.success[200],
            //   successMain: colors.success[300],
            //   successDark: colors.success[400],
            // },
            // orange: {
            //   orangeLight: colors.orange[100],
            //   orangeMain: colors.orange[200],
            //   orangeDark: colors.orange[300],
            // },
            // error: {
            //   errorLight: colors.error[100],
            //   errorMain: colors.error[200],
            //   errorDark: colors.error[300],
            // },
            // warning: {
            //   warningLight: colors.warning[100],
            //   warningMain: colors.warning[200],
            //   warningDark: colors.warning[300],
            // },
            // textVariant: {
            //   textTitle: colors.textVariant[100],
            //   textPrimary: colors.textVariant[200],
            //   textSecondary: colors.textVariant[300],
            // },
          }),
    },
    typography: {
      fontFamily: ["IRANSansX", "IRANSansX"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["IRANSansX", "IRANSansX"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["IRANSansX", "IRANSansX"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["IRANSansX", "IRANSansX"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["IRANSansX", "IRANSansX"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["IRANSansX", "IRANSansX"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["IRANSansX", "IRANSansX"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        ),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode] as const;
};
