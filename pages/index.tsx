/*
 * Import Head from "next/head";
 * import Image from "next/image";
 */
import { Anchor, Box, Grommet, Header, Nav } from "grommet";
import type { NextPage } from "next";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      height: "20px",
      size: "18px",
    },
  },
};

const Home: NextPage = () => (
  <Grommet theme={theme}>
    <Header
      align="center"
      background="dark-1"
      direction="row"
      elevation="medium"
      justify="between"
      pad="small"
      style={{ zIndex: "1" }}
      tag="header">
      <Box align="center" direction="row" gap="small">
        <Anchor color="white" href="https://github.com/chrisphillers">
          Hi
        </Anchor>
      </Box>
      {/* <Nav direction="row">Nav</Nav> */}
    </Header>
    <main>
      <h1>There</h1>
    </main>
  </Grommet>
);

export default Home;
