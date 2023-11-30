import Header from "./header/Header";
import { Content, Wrapper } from "./style";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default Layout;
