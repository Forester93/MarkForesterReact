import React from "react";
import { Header, Footer } from "../../navigation";

const Layout = (props) => (
  <React.Fragment>
    <Header />
    {props.children}
    <Footer />
  </React.Fragment>
);

export default Layout;
