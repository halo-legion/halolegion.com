import React from "react";

import { Navbar, Footer } from "../exports";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
