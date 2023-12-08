import { GlobalStyle } from "./styles/GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "jotai";
import { getClient } from "./stores/query/queryClient.ts";
import Auth from "@/hoc/Auth.tsx";
import theme from "@/styles/theme.ts";
import Layout from "@/components/layout/Layout.tsx";
import Home from "@/pages/Home/Home.tsx";
import Write from "@/pages/Write/Write.tsx";
import FeedDetail from "@/pages/FeedDetail/FeedDetail.tsx";
import MyPage from "./pages/MyPage/MyPage.tsx";

function App() {
  const AuthHome = Auth(Home, null);
  const AuthWrite = Auth(Write, true);
  const AuthFeedDetail = Auth(FeedDetail, null);
  const AuthMyPage = Auth(MyPage, true);

  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyle />
            <Layout>
              <Routes>
                <Route path="/" element={<AuthHome />} />
                <Route path="/write" element={<AuthWrite />} />
                <Route path="/:userId" element={<AuthMyPage />} />
                <Route
                  path="/feed/:userId/:feedId"
                  element={<AuthFeedDetail />}
                />
              </Routes>
            </Layout>
            <ReactQueryDevtools />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
