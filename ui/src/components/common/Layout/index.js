import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import Header from "./Header";
import SideNav from "./SideNav";
import theme from "../../../theme";

const Layout = props => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <Container maxWidth={false}>
        <CssBaseline />
        <SideNav {...props} />
      </Container>
    </ThemeProvider>
  </Fragment>
);

export default Layout;
