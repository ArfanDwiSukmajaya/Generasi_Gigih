import React from "react";
import LinkMenu from "../Elements/Link";

export default function Menu() {
  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            <LinkMenu href="https://www.google.com" title="Home" icon="home" />
          </li>
          <li>
            <LinkMenu href="https://www.google.com" title="Search" icon="search" />
          </li>
        </ul>
      </div>
      <div className="navigation library">
        <ul>
          <li>
            <LinkMenu href="https://www.google.com" title="Your Library" icon="book" />
          </li>
        </ul>
      </div>
    </>
  );
}
