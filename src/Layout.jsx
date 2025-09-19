import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Layout_Component/Header/Header";
import Footer from "./Layout_Component/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
