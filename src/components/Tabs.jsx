import React from "react";

export default function Tabs({ children, buttonJSX, ButtonsContainer = 'menu' }) {
  return (
    <>
      <ButtonsContainer>{buttonJSX}</ButtonsContainer>
      {children}
    </>
  );
}
