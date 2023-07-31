import React from "react";

export default function Span({ icon }) {
  return (
    <>
      <span className={`fa fa-${icon}`}></span>
    </>
  );
}
