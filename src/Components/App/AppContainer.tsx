import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";
import React from "react";
import { graphql } from "react-apollo";

const AppContainer = ({ data }) => (
  <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
);

export default graphql(IS_LOGGED_IN)(AppContainer);
