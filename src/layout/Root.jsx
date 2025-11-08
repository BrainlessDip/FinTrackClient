import React, { use } from "react";
import { Outlet } from "react-router";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";

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
        </>
      )}
    </>
  );
};

export default Root;
