import React from "react";
import "./Sidebare.css";

export default function Sidebare() {
  return (
    <>
      <div class="sidebar">
        <div class="navigation">
          <ul>
            <li>
              <a href="" class="active">
                {" "}
                <span class="fa fa-home"></span> Home{" "}
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <span class="fa fa-search"></span> Search{" "}
              </a>
            </li>
          </ul>
        </div>
        <div class="navigation library">
          <ul>
            <li>
              <a href="">
                <span class="fa fa-book"></span> Your Library
                <span class="fa fa-plus"></span>
              </a>
            </li>
          </ul>
          <div className="sidebare-box">
            <h5>Add To your playlist</h5>

            <button>Add Playlist</button>
          </div>
        </div>
      </div>
    </>
  );
}
