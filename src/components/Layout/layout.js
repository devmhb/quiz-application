import React from "react";
import Nav from "../Nav/Nav";
import Classes from "./layout.module.css";

const layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={Classes.main}>
        <div className={Classes.container}>{children}</div>
      </main>
    </>
  );
};

export default layout;
