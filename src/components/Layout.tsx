import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import Background from "./Canvas/Background";

import NavigationContainer from "./Navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Background />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>{children}</main>
        <NavigationContainer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
