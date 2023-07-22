import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "../src/components/Header";
import List from "../src/components/List";
import Footer from "../src/components/Footer";

export default function Index() {
  return (
    <Container maxWidth="xl">
      <Box>
        <Header />
        <List />
        <Footer />
      </Box>
    </Container>
  );
}
