import React from "react";
import "./Footer.scss";
import { Logo } from "../../images";
export default function Footer() {
  return (
    <footer className="Footer">
      <Logo color="#FFF" />
      <div>Made with ❤ by Magnus Westhofen </div>
    </footer>
  );
}
