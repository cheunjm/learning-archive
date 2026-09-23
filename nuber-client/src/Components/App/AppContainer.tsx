import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";
import React from "react";
import { ThemeProvider } from "../../typed-components";
import { graphql } from "react-apollo";
import theme from "../../theme";

const AppContainer = ({ data }) => (
  <ThemeProvider theme={theme}>
    <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
  </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
