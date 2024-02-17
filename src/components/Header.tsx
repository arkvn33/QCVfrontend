import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

interface Props {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.textVariant.TextPrimary}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.success.successDark}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
