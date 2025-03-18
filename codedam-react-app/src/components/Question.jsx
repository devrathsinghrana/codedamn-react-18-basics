import React, { useEffect, useRef, useState } from "react";
import "./Question.css";

const Question = (props) => {
  const { title, info } = props;
  const [show, setShow] = useState(false);
  const contentRef = useRef(null);

  function toggleContent() {
    setShow((show) => !show);
  }

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      if (content.style.height && content.style.height !== "0px") {
        // Collapse: Set height to current scrollHeight, then to 0
        content.style.height = content.scrollHeight + "px";
        requestAnimationFrame(() => {
          content.style.height = "0";
        });
      } else {
        // Expand: Set height to scrollHeight and reset to auto after animation
        content.style.height = content.scrollHeight + "px";
        content.addEventListener("transitionend", function handler() {
          content.style.height = "auto";
          content.removeEventListener("transitionend", handler);
        });
      }
    }
  }, [show]);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleContent}>
          {show ? "-" : "+"}
        </button>
      </header>
      <p className="content" ref={contentRef}>
        {info}
      </p>
    </article>
  );
};

export default Question;
