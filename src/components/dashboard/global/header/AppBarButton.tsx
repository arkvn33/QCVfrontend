import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, ButtonBase } from "@mui/material";
import { tokens } from "../../../../theme";

interface AppBarButtonProps {
  icon: React.ReactNode;
  width?: string;
  height?: string;
  addMargin?: boolean;
  onClickAvatar: (event: React.MouseEvent<HTMLElement>) => void;
}
export const AppBarButton = ({
  icon,
  width = "34px",
  height = "34px",
  addMargin = true,
  onClickAvatar,
}: AppBarButtonProps) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <ButtonBase
        sx={{
          ml: addMargin ? { sm: "none", md: "16px" } : "none",
          borderRadius: "6px",
          overflow: "hidden",
          width: width,
          height: height,
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            background:
              mode === "dark"
                ? colors.dark.darkLevel1
                : colors.secondary.secondaryLight,
            color:
              mode === "dark"
                ? colors.secondary.secondaryMain
                : colors.secondary.secondaryDark,
            "&:hover": {
              background:
                mode === "dark"
                  ? colors.secondary.secondaryMain
                  : colors.secondary.secondaryDark,
              color: colors.secondary.secondaryLight,
            },
          }}
          onClick={onClickAvatar}
        >
          {icon}
        </Avatar>
      </ButtonBase>
    </>
  );
};
