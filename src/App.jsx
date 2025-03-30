import { ThemeProvider } from "styled-components";
import { MyRoutes } from "./routes/router";
import { useThemeStore } from "./store/themeStore";
import { GlobalStyles } from "./styles/globalStyles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const { themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyles />
      <MyRoutes />
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  );
}

export default App;
