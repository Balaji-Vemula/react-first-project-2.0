import React from "react";

export default function Tabs({ children, buttonJSX }) {
  return (
    <>
      <menu>{buttonJSX}</menu>
      {children}
    </>
  );
}
