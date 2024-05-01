import React from "react";

export default function Tabs({ children, buttonJSX, ButtonsContainer }) {
  return (
    <>
      <ButtonsContainer>{buttonJSX}</ButtonsContainer>
      {children}
    </>
  );
}
