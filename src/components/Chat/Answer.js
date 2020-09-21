import React from "react";
import { Link } from "react-router-dom";

export default function Answer({ data }) {
  return (
    <Link className="Answer" to={data.link}>
      {data.label}
    </Link>
  );
}
