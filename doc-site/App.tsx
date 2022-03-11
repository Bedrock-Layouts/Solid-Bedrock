import { Route, Routes } from "solid-app-router";
import { Component } from "solid-js";

import { Center, PadBox, Split, Stack } from "../packages/solid/src";
import { LogoOnly } from "./components/LogoOnly";
import { LandingPage } from "./pages/LandingPage";

const App: Component = () => {
  return (
    <Split fraction="auto-start" gutter="lg" switchAt={1000}>
      <PadBox as="aside" padding="xl">
        <Center maxWidth="10rem">
          <LogoOnly />
        </Center>
      </PadBox>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*all" element={<Stack>Not Found</Stack>} />
      </Routes>
    </Split>
  );
};

export default App;
