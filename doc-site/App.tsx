import { Link, Route, Routes } from "solid-app-router";
import { Component, Show } from "solid-js";
import { styled } from "solid-styled-components";

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

const WIDTH_BREAKPOINT = 1300;

function SideNavGroup() {
  return (
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
        style={`min-width:unset; width:${
          shouldSwitch() ? "100%" : "clamp(10rem, 25%, 13.5rem)"
        }; background: rgb(249, 250, 251);`}
      >
        <Stack gutter="xxl">
          <LogoLink href="/">
            <Inline align="center" gutter="xl">
              <LogoOnly style="width:100%; max-width:8rem;" />

              <Show when={shouldSwitch() === true}>
                <LogoTitle>Solid-Bedrock</LogoTitle>
              </Show>
            </Inline>
          </LogoLink>
          <SideNavGroup />
        </Stack>
      </PadBox>
      <PadBox style="width:100%; min-inline-size:unset;" padding="xl">
        <Center maxWidth="90%">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/stack" element={<StackPage />} />
            <Route
              path="/*all"
              element={<PadBox padding="xl">Not Found</PadBox>}
            />
          </Routes>
        </Center>
      </PadBox>
    </Inline>
  );
};

export default App;
