import React, { createContext } from "react";

export const { Provider, Consumer } = createContext();
export const withContextHOC = Component => props => (
  <Consumer>{value => <Component {...value} {...props} />}</Consumer>
);
