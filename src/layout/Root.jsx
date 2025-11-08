import React, { use } from "react";
import { Outlet } from "react-router";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/AuthContext";

const Root = () => {
  const { loading } = use(AuthContext);
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Outlet></Outlet>
        </>
      )}
    </>
  );
};

export default Root;
