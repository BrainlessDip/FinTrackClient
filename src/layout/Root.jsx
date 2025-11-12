import React, { use } from "react";
import { Outlet } from "react-router";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  const { loading } = use(AuthContext);
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default Root;
