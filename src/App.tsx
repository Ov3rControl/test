import React, { FunctionComponent } from "react";
import "./App.css";
import { routes } from "./router/config";
import Router from "./router/Router";

const App: FunctionComponent = (): JSX.Element => {
  return <Router routes={routes} />;
};

export default App;
