import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="navigation">
          <ul>
            <li>
              <a href="" className="active">
                {" "}
                <span className="fa fa-home"></span> Home{" "}
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <span className="fa fa-search"></span> Search{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="navigation library">
          <ul>
            <li>
              <a href="">
                <span className="fa fa-book"></span> Your Library
                <span className="fa fa-plus"></span>
              </a>
            </li>
          </ul>
          <div className="sidebare-box">
            <h5>Add To your playlist</h5>

            <button>Create Playlist</button>
          </div>
        </div>
      </div>
    </>
  );
}
