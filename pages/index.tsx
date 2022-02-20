import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
import { Grommet, Nav, Header, Anchor, Box } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const Home: NextPage = () => {
  return (
    <Grommet theme={theme}>
      <Header
        background="dark-1"
        pad="small"
        tag="header"
        direction="row"
        align="center"
        justify="between"
        elevation="medium"
        style={{ zIndex: "1" }}
      >
        <Box direction="row" align="center" gap="small">
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
};

export default Home;
