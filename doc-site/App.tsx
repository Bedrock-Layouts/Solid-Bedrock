import { Link, Route, Routes } from "solid-app-router";
import { Component, For, Show } from "solid-js";
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
import { CenterPage } from "./pages/CenterPage";
import { ColumnDropPage } from "./pages/ColumnDropPage";
import { ColumnsPage } from "./pages/ColumnsPage";
import { GridPage } from "./pages/GridPage";
import { InlineClusterPage } from "./pages/InlineClusterPage";
import { InlinePage } from "./pages/InlinePage";
import { LandingPage } from "./pages/LandingPage";
import { MasonaryGridPage } from "./pages/MasonryGridPage";
import { ReelPage } from "./pages/ReelPage";
import { SplitPage } from "./pages/SplitPage";
import { StackPage } from "./pages/StackPage";

const WIDTH_BREAKPOINT = 1000;

function SideNavGroup(props: {
  shouldSwitch?: boolean;
  title: string;
  links: { href: string; name: string }[];
}) {
  return (
    <Stack gutter="lg">
      <strong>{props.title}</strong>

      <Dynamic
        component={props.shouldSwitch ? Reel : Stack}
        as={PadBox}
        padding={["lg", "sm"]}
        gutter="md"
      >
        <For each={props.links}>
          {(link) => <Link href={link.href}>{link.name}</Link>}
        </For>
      </Dynamic>
    </Stack>
  );
}

const spacerComponents = [
  { href: "/column-drop", name: "ColumnDrop" },
  { href: "/columns", name: "Columns" },
  { href: "/grid", name: "Grid" },
  { href: "/inline-cluster", name: "InlineCluster" },
  { href: "/inline", name: "Inline" },
  { href: "/masonry-grid", name: "MasonryGrid" },
  { href: "/reel", name: "Reel" },
  { href: "/split", name: "Split" },
  { href: "/stack", name: "Stack" },
];

const wrapperComponents = [
  { href: "/center", name: "Center" },
  { href: "/cover", name: "Cover" },
  { href: "/frame", name: "Frame" },
  { href: "/padbox", name: "PadBox" },
];

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
        <Stack gutter="xl">
          <LogoLink href="/">
            <Inline align="center" gutter="xl">
              <LogoOnly style="width:100%; max-width:8rem;" />

              <Show when={shouldSwitch() === true}>
                <LogoTitle>Solid-Bedrock</LogoTitle>
              </Show>
            </Inline>
          </LogoLink>
          <SideNavGroup
            title="Spacer Components"
            links={spacerComponents}
            shouldSwitch={shouldSwitch()}
          />
          <SideNavGroup
            title="Wrapper Components"
            links={wrapperComponents}
            shouldSwitch={shouldSwitch()}
          />
        </Stack>
      </PadBox>
      <PadBox padding="xl">
        <Center maxWidth="90%">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/column-drop" element={<ColumnDropPage />} />
            <Route path="/columns" element={<ColumnsPage />} />
            <Route path="/grid" element={<GridPage />} />
            <Route path="/inline" element={<InlinePage />} />
            <Route path="/inline-cluster" element={<InlineClusterPage />} />
            <Route path="/masonry-grid" element={<MasonaryGridPage />} />
            <Route path="/reel" element={<ReelPage />} />
            <Route path="/split" element={<SplitPage />} />
            <Route path="/stack" element={<StackPage />} />
            <Route path="/center" element={<CenterPage />} />
            <Route
              path="/*all"
              element={
                <PadBox as={Stack} gutter="xl" padding="xl">
                  <h1>Page Not Found</h1>
                  <p>
                    Click <Link href="/">Home</Link> to go back to the site
                  </p>
                </PadBox>
              }
            />
          </Routes>
        </Center>
      </PadBox>
    </Split>
  );
};

export default App;
