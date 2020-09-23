import React, { useEffect, useState } from "react";
import "./Chat.scss";
import { useParams, useHistory } from "react-router-dom";
import data from "./data";
import Message from "./Message";
import Answer from "./Answer";
import Typing from "./Typing";
import { Head } from "../../images";
import { motion } from "framer-motion";

export default function Chat() {
  const history = useHistory();
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
            if (idx + 1 === currentDialog.messages.length) {
              setTimeout(function () {
                if (slug === "portfolio") {
                  history.push("/portfolio");
                }
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

  const containerMotion = {
    show: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const itemMotion = {
    hidden: { x: -100, scale: 0, opacity: 0 },
    show: { x: 0, opacity: 1, scale: 1 },
  };

  return (
    <section className="Chat">
      <motion.div
        variants={containerMotion}
        initial="hidden"
        animate="show"
        className="Window"
      >
        <img className="Head" src={Head} alt="Head" />
        <div className="MessageContainer">
          {messages &&
            messages.map((message, idx) => {
              return (
                <motion.div key={`message-${idx}`} variants={itemMotion}>
                  <Message status={status} message={message} />
                </motion.div>
              );
            })}
        </div>
        {!completed && <Typing />}
        <div className="AnswerContainer">
          {completed &&
            currentDialog.answers &&
            currentDialog.answers.map((message, idx) => {
              return (
                <motion.div key={`answer-${idx}`} variants={itemMotion}>
                  <Answer data={message} />
                </motion.div>
              );
            })}
        </div>
      </motion.div>
    </section>
  );
}
