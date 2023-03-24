import React from "react";
import troll from "../images/Troll Face.png";

function Header() {
  return (
    <header className="header">
    <img 
        src={troll} 
        className="header--image"
    />
    <h2 className="header--title">Meme Generator</h2>
    <h4 className="header--project">Choose image, customize and save...</h4>
</header>
  );
}

export default Header;
