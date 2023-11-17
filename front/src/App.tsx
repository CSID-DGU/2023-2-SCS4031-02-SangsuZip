import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import theme from "./styles/theme.ts";
import Layout from "./components/layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import Write from "./pages/Write/Write.tsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
