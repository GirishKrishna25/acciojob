import React from "react";
import InWebsiteNav from "./components/InWebsiteNav";
import OutWebsiteNav from "./components/OutWebsiteNav";
import "./Header.css";

export default function Header(props) {
  return (
    <>
      <div className="header-container">
        <h1 className="header-brand">AccioJob</h1>
        <nav className="nav">
          <InWebsiteNav />
          <OutWebsiteNav count={props.count} />
        </nav>
      </div>
    </>
  );
}
