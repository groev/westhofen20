import React from "react";
import "./Loader.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      <motion.div
        className="Loader"
        initial={{ opacity: 1 }}
        visible={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="258.8px"
          height="164.2px"
          viewBox="0 0 258.8 164.2"
        >
          <motion.path
            initial={{ fill: "#FFF" }}
            animate={{ fill: "#FFF" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M248.4,28.2c-4,7.8-8,15.5-12.1,23.3c-4.1,7.7-8.1,15.5-12.3,23.2c-4.1,7.7-8.2,15.4-12.4,23.1l-12.5,23l-2.9,5.4l-2.8-5.6
          c-2.5-4.9-4.9-9.7-7.3-14.6l-7.2-14.6l-7.2-14.6c-2.4-4.9-4.8-9.8-7.2-14.7l7.6,0.3L156.4,90l-7.9,13.8l-7.9,13.8l-6.1,10.5
          l-2.8-11.8L122,75.9c-1.6-6.7-3.2-13.5-4.7-20.3l-4.7-20.3l9.1,1.1l-12.6,24c-4.2,8-8.5,15.9-12.7,23.9l-12.7,23.9
          c-4.2,8-8.6,15.9-12.9,23.8l-5,9.2l-2.3-10.1l-4.2-18.8c-1.4-6.3-2.8-12.6-4.1-18.8c-2.7-12.6-5.5-25.1-8.1-37.7l4,0.9
          C44.2,64.8,37.3,72.9,30.4,81c-7,8.1-13.9,16.2-21,24.2c6.3-8.6,12.6-17.2,19-25.8c6.3-8.6,12.8-17.1,19.2-25.6l2.7-3.6l1.2,4.5
          C55,67.1,58.2,79.6,61.5,92c1.7,6.2,3.3,12.4,4.9,18.7l4.8,18.7l-7.2-0.9c4-8.1,8-16.2,12.1-24.2l12.3-24.1
          c4.1-8,8.1-16.1,12.3-24.1L113,32l6-11.7l3.1,12.8l4.8,20.2c1.6,6.7,3.2,13.5,4.8,20.2l9.4,40.5l-8.9-1.3l8.1-13.7l8.1-13.7
          l16.3-27.3l4.2-7l3.4,7.4c2.3,4.9,4.6,9.9,6.8,14.8l6.8,14.9l6.8,14.9c2.3,4.9,4.5,9.9,6.7,14.9l-5.7-0.2l13.5-22.5
          c4.5-7.5,9.1-14.9,13.6-22.4c4.5-7.5,9.1-14.9,13.7-22.3C239,43,243.7,35.6,248.4,28.2z"
          />
          <motion.path
            strokeIinejoin="round"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            style={{
              stroke: "#000",
              fill: "transparent",
              strokeWidth: 20,
              strokeMiterlimit: 20,
            }}
            d="M248.4,28.2 196.4,119.2 168.4,60.2 136.4,115.2 117.4,34.2 67.4,130.2 49.4,55.2 9.4,105.2"
          />
        </svg>
      </motion.div>
    </AnimatePresence>
  );
}
