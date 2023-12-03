import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Auth from "@/hoc/Auth.tsx";
import theme from "@/styles/theme.ts";
import Layout from "@/components/layout/Layout.tsx";
import Home from "@/pages/Home/Home.tsx";
import Write from "@/pages/Write/Write.tsx";
import FeedDetail from "@/pages/FeedDetail/FeedDetail.tsx";
import { Provider } from "jotai";

function App() {
  const AuthHome = Auth(Home, null);
  const AuthWrite = Auth(Write, true);

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route path="/" element={<AuthHome />} />
              <Route path="/write" element={<AuthWrite />} />
              <Route path="/feed/:userId/:feedId" element={<FeedDetail />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
