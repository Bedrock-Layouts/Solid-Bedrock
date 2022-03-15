import "@bedrock-layout/bedrock-layout-css/lib/bedrock-layout.min.css";
import "open-props/style";
import "highlight.js/styles/atom-one-dark.css";

import "./global-styles.css";

import { Router } from "solid-app-router";
/* @refresh reload */
import { render } from "solid-js/web";

import { Center } from "../packages/solid/src";
import App from "./App";

render(
  () => (
    <Router>
      <Center maxWidth={Math.floor((1439 + 1920) / 2)}>
        <App />
      </Center>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
