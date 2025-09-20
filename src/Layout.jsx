import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Layout_Component/Header/Header";
import Footer from "./Layout_Component/Footer/Footer";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";


const Layout = () => {
  return (
    <>
      <Header />
      <main>
         <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
