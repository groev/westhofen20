import React, { useEffect, useState } from "react";
import "./Chat.scss";
import { useParams } from "react-router-dom";
import data from "./data";
import Message from "./Message";
import Answer from "./Answer";
import Typing from "./Typing";
import { Head } from "../../images";
import { motion } from "framer-motion";
import MessageSound from "../../sounds/message.mp3";
import Sound from "react-sound";
export default function Chat() {
  const [playing, setPlaying] = useState(false);
  const { slug, status } = useParams();
  const currentDialog = data.find((dialog) => dialog.slug === slug) || data[0];
  const [messages, setMessages] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setMessages([]);
    setCompleted(false);
    if (status !== "completed") {
      currentDialog.messages &&
        currentDialog.messages.forEach((message, idx) => {
          setTimeout(function () {
            setMessages((prevMessages) => [...prevMessages, message]);
            setPlaying("PLAYING");
            if (idx + 1 === currentDialog.messages.length) {
              setTimeout(function () {
                setCompleted(true);
              }, 1500);
            }
          }, idx * 1500);
        });
    } else {
      setMessages(currentDialog.messages);
      setCompleted(true);
    }
  }, [slug, status]);

  const container = {
    show: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opacity: 0 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <div className="Chat">
      <div className="Window">
        <img className="Head" src={Head} alt="Head" />
        <Sound url={MessageSound} playStatus={playing} playFromPosition={0} />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="MessageContainer"
        >
          {messages &&
            messages.map((message, idx) => {
              return (
                <motion.div key={`message-${idx}`} variants={item}>
                  <Message status={status} data={message} />
                </motion.div>
              );
            })}
        </motion.div>
        {!completed && <Typing />}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="AnswerContainer"
        >
          {completed &&
            currentDialog.answers &&
            currentDialog.answers.map((message, idx) => {
              return (
                <motion.div key={`answer-${idx}`} variants={item}>
                  <Answer data={message} />
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
}
