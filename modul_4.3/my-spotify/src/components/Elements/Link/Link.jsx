import React from "react";

export default function Link({ href, active, children }) {
  return (
    <>
      <a href={href} className={active}>
        {children}
      </a>
    </>
  );
}
