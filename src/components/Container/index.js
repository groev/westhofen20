import React from "react";
import "./Container.scss";

export default function Container({ children }) {
  return (
    <main role="main" className="Container">
      {children}
    </main>
  );
}
