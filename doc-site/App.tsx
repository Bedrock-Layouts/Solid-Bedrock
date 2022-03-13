import { Link, Route, Routes } from "solid-app-router";
import { Component, Show, type } from "solid-js";

import {
  Center,
  Inline,
  PadBox,
  Stack,
  createContainerQuery,
} from "../packages/solid/src";
import { LogoOnly } from "./components/LogoOnly";
import { LandingPage } from "./pages/LandingPage";
import { StackPage } from "./pages/StackPage";

const WIDTH_BREAKPOINT = 1250;

const App: Component = () => {
  const [shouldSwitch, ref] = createContainerQuery(WIDTH_BREAKPOINT);

  return (
    <Inline
      ref={ref}
      stretch="end"
      gutter="lg"
      align="stretch"
      switchAt={WIDTH_BREAKPOINT}
    >
      <PadBox
        as="aside"
        padding="xl"
        style={`width:${
          shouldSwitch() ? "100%" : "clamp(10rem, 25%, 13.5rem)"
        }; background: rgb(249, 250, 251);`}
      >
        <Stack gutter="xxl">
          <Link href="/" style="color:inherit;">
            <Show
              when={shouldSwitch() === false}
              fallback={<h2>Solid-Bedrock</h2>}
            >
              <Center maxWidth="10rem">
                <LogoOnly />
              </Center>
            </Show>
          </Link>
          <Stack gutter="lg">
            <strong>Spacer Components</strong>
            <Inline gutter="md" switchAt="10rem">
              <Link href="/column-drop">ColumnDrop</Link>
              <Link href="/columns">Columns</Link>
              <Link href="/grid">Grid</Link>
              <Link href="/inline-cluster">InlineCluster</Link>
              <Link href="/inline">Inline</Link>
              <Link href="/masonry-grid">MasonryGrid</Link>
              <Link href="/reel">Reel</Link>
              <Link href="/split">Split</Link>
              <Link href="/stack">Stack</Link>
            </Inline>
          </Stack>
        </Stack>
      </PadBox>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stack" element={<StackPage />} />
        <Route path="/*all" element={<PadBox padding="xl">Not Found</PadBox>} />
      </Routes>
    </Inline>
  );
};

export default App;
