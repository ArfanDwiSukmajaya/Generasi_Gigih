import React from "react";
import Link from "./Link";
import Span from "./Span";

export default function LinkMenu({ href, title, icon }) {
  return (
    <>
      <Link href={href}>
        <Span icon={icon} />
        {title}
      </Link>
    </>
  );
}
