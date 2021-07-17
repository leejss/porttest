import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import NavigationContainer from "./Navigation/NavigationContainer";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
      <NavigationContainer />
    </ThemeProvider>
  );
};

export default Layout;
