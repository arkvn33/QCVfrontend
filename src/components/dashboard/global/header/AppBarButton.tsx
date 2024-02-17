import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, ButtonBase } from "@mui/material";
import { tokens } from "../../../../theme";

interface AppBarButtonProps {
  icon: React.ReactNode;
  onClickAvatar: (event: React.MouseEvent<HTMLElement>) => void;
}
export const AppBarButton = ({ icon, onClickAvatar }: AppBarButtonProps) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <ButtonBase
        sx={{
          ml: { sm: "none", md: "16px" },
          borderRadius: "6px",
          overflow: "hidden",
          width: "34px",
          height: "34px",
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
