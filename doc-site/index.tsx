import "@bedrock-layout/bedrock-layout-css/lib/bedrock-layout.min.css";
import "open-props/style";

import "./global-styles.css";

/* @refresh reload */
import { render } from "solid-js/web";

import App from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);
