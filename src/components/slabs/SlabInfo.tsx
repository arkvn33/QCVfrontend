import { Box, Divider, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

interface Props {
  coilNumber: string;
  furnaceNumber: string;
  state: string;
}
const SlabInfo = ({ coilNumber, furnaceNumber, state }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box sx={{ p: "5px 20px" }}>
        <Typography gutterBottom variant="h6" m={0}>
          {state}
        </Typography>
      </Box>
      <Divider
        variant="middle"
        sx={{ borderWidth: "1rm", borderColor: colors.textVariant.TextTitle }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: "10px 20px 0px 20px",
        }}
      >
        <Typography gutterBottom variant="h5">
          <Box component="span" sx={{ fontWeight: "bold" }}>
            Coil No. :
          </Box>
          {" " + coilNumber}
        </Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderWidth: "1rm", borderColor: colors.textVariant.TextTitle, mb:"5px", mt: "0",mx:"10px" }}
        />
        <Typography gutterBottom variant="h5" >
          <Box component="span" sx={{ fontWeight: "bold" }}>
            Fur No. :
          </Box>
          {" " + furnaceNumber}
        </Typography>
      </Box>
    </>
  );
};

export default SlabInfo;
