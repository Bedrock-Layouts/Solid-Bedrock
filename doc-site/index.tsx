import "@bedrock-layout/bedrock-layout-css/lib/bedrock-layout.min.css";
import "open-props/style";

import "./global-styles.css";

import { Router } from "solid-app-router";
/* @refresh reload */
import { render } from "solid-js/web";

import App from "./App";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
