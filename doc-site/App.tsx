import { Link, Route, Routes } from "solid-app-router";
import { Component, Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import { styled } from "solid-styled-components";

import {
  Center,
  Inline,
  PadBox,
  Reel,
  Split,
  Stack,
  createContainerQuery,
} from "../packages/solid/src";
import { LogoOnly } from "./components/LogoOnly";
import { ColumnDropPage } from "./pages/ColumnDropPage";
import { ColumnsPage } from "./pages/ColumnsPage";
import { GridPage } from "./pages/GridPage";
import { LandingPage } from "./pages/LandingPage";
import { MasonaryGridPage } from "./pages/MasonryGridPage";
import { SplitPage } from "./pages/SplitPage";
import { StackPage } from "./pages/StackPage";

const WIDTH_BREAKPOINT = 1000;

function SideNavGroup(props: { shouldSwitch?: boolean }) {
  return (
    <Stack gutter="lg">
      <strong>Spacer Components</strong>

      <Dynamic
        component={props.shouldSwitch ? Reel : Stack}
        as={PadBox}
        padding={["lg", "sm"]}
        gutter="md"
      >
        <Link href="/column-drop">ColumnDrop</Link>
        <Link href="/columns">Columns</Link>
        <Link href="/grid">Grid</Link>
        <Link href="/inline-cluster">InlineCluster</Link>
        <Link href="/inline">Inline</Link>
        <Link href="/masonry-grid">MasonryGrid</Link>
        <Link href="/reel">Reel</Link>
        <Link href="/split">Split</Link>
        <Link href="/stack">Stack</Link>
      </Dynamic>
    </Stack>
  );
}

const LogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const LogoTitle = styled("strong")`
  font-size: clamp(1rem, 10vw, 2.5rem);
`;

const App: Component = () => {
  const [shouldSwitch, ref] = createContainerQuery(WIDTH_BREAKPOINT);

  return (
    <Split
      ref={ref}
      fraction="auto-start"
      gutter="lg"
      switchAt={WIDTH_BREAKPOINT}
    >
      <PadBox as="aside" padding="xl" style={`background: rgb(249, 250, 251);`}>
        <Stack gutter="xxl">
          <LogoLink href="/">
            <Inline align="center" gutter="xl">
              <LogoOnly style="width:100%; max-width:8rem;" />

              <Show when={shouldSwitch() === true}>
                <LogoTitle>Solid-Bedrock</LogoTitle>
              </Show>
            </Inline>
          </LogoLink>
          <SideNavGroup shouldSwitch={shouldSwitch()} />
        </Stack>
      </PadBox>
      <PadBox padding="xl">
        <Center maxWidth="90%">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/column-drop" element={<ColumnDropPage />} />
            <Route path="/columns" element={<ColumnsPage />} />
            <Route path="/grid" element={<GridPage />} />
            <Route path="/masonry-grid" element={<MasonaryGridPage />} />
            <Route path="/split" element={<SplitPage />} />
            <Route path="/stack" element={<StackPage />} />
            <Route
              path="/*all"
              element={<PadBox padding="xl">Not Found</PadBox>}
            />
          </Routes>
        </Center>
      </PadBox>
    </Split>
  );
};

export default App;
