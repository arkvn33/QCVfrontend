import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../src/components/dashboard/global/header/Topbar";
import "./main.css";

function App() {
  const [themes, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        <Topbar />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
