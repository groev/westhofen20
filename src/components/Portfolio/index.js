import React from "react";
import Project from "./project";
import Projects from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Chat } from "../../images";
import "./Portfolio.scss";

export default function Portfolio() {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="Portfolio">
      <h1>Here are some of my personal Projects</h1>
      <Link className="back" to="/chat/start/completed">
        <img src={Chat} alt="Chat" /> Go back to chatting.
      </Link>
      <motion.div className="grid" initial="hidden" animate="show">
        {Projects.map((project) => {
          return (
            <motion.div variants={item}>
              <Project data={project} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
