import { GlobalStyles, MyRoutes, Sidebar } from "./index";
import styled, { ThemeProvider } from "styled-components";
import { Device } from "./styles/breakpoints";
import { useThemeStore } from "./store/ThemeStore";
import { useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { themeStyle } = useThemeStore();
  return (
    <ThemeProvider theme={themeStyle}>
      <AuthContextProvider>
        <Container>
          <GlobalStyles />
          <section className="constentSidebar">
            <Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)} />
          </section>
          <section className="constentMenu"> Menu </section>
          <section className="constentRouters"> <MyRoutes /> </section>
        </Container>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: black;
  transition: 0.1s ease-in-out;
  color: ${({ theme }) => theme.text};
  .constentSidebar {
    display: none;
    background-color: rgba(255, 8, 0, 0.5);
  }
  .constentMenu {
    position: absolute;
    background-color: rgba(33, 241, 68, 0.5);
    z-index: 1;
  }
  .constentRouters {
    background-color: rgba(0, 0, 0, 0.5);
    grid-column: 1;
    width: 100%;

  }

  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    .constentSidebar {
      display: initial;
    }
    .constentMenu {
      display: none;
    }
    .constentRouters {
      grid-column: 2;
    }
  }
`;
export default App;
