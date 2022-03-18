import "@bedrock-layout/bedrock-layout-css/lib/bedrock-layout.min.css";
import "open-props/style";
import "highlight.js/styles/atom-one-dark.css";

import "./global-styles.css";

import { Router } from "solid-app-router";
/* @refresh reload */
import { render } from "solid-js/web";

import { Center, Cover } from "../packages/solid/src";
import App from "./App";

render(
  () => (
    <Router>
      <Center
        data-app-boundary
        style="background-color: white; min-inline-size:min(min-content, 100%);"
        maxWidth={1680}
      >
        <Cover stretchContent>
          <App />
        </Cover>
      </Center>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
