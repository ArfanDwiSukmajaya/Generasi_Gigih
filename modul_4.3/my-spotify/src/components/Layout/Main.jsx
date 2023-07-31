import React from "react";
import CardMusic from "../Fragments/CardMusic";

export default function Main() {
  return (
    <main>
      <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button" className="fa fas fa-chevron-left"></button>
          <button type="button" className="fa fas fa-chevron-right"></button>
        </div>
      </div>
      <CardMusic />
    </main>
  );
}
