import React, { useState, useEffect } from "react";
import Typing from "./Typing";

export default function Message({ data, status }) {
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    if (status !== "completed") {
      setTimeout(function () {
        setIsTyping(false);
      }, 1000);
    } else {
      setIsTyping(false);
    }
  }, []);
  return <div className="Message">{data}</div>;
}
