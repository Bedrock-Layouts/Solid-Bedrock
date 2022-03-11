import { Link, Route, Routes } from "solid-app-router";
import { Component } from "solid-js";

import { Center, Inline, PadBox, Split, Stack } from "../packages/solid/src";
import { LogoOnly } from "./components/LogoOnly";
import { LandingPage } from "./pages/LandingPage";
import { StackPage } from "./pages/StackPage";

const App: Component = () => {
  return (
    <Split fraction="1/4" gutter="lg" switchAt="1300px">
      <PadBox as="aside" padding="xl">
        <Stack gutter="xxl">
          <Center maxWidth="10rem">
            <Link href="/" style="color:inherit;">
              <LogoOnly />
            </Link>
          </Center>
          <Stack gutter="lg">
            Spacer Components
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
    </Split>
  );
};

export default App;
