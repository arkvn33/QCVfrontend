import { ReactNode } from "react";

import { useTheme } from "@mui/material/styles";
import { Card, CardContent } from "@mui/material";
import { tokens } from "../../theme";

interface Props {
  children: ReactNode;
}

// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = ({ children }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Card
      sx={{
        margin: "5px",
        borderRadius: "8px",
        borderColor: colors.paper[200],
        bgcolor: colors.paper[100],
      }}
    >
      <CardContent
        sx={{
          m: "3px",
          p: "0px",
          textAlign: "match-parent",
          "&:last-child": { p: "0px" },
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default MainCard;
