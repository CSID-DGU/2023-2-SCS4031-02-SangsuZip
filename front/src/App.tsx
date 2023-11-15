import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.tsx";
import Layout from "./components/layout/Layout.tsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
