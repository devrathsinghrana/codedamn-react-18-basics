import React, { useRef, useState } from "react";
import "./Question.css";

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  const contentRef = useRef(null);

  function toggleContent() {
    const content = contentRef.current;

    if (!content) return;

    if (!show) {
      // Expand: Set to scrollHeight
      content.style.height = content.scrollHeight + "px";

      // Wait for transition to complete, then reset to "auto"
      content.addEventListener("transitionend", function handler() {
        content.style.height = "auto";
        content.removeEventListener("transitionend", handler);
      });
    } else {
      // Collapse: Set height to its current computed height, then transition to 0
      content.style.height = `${content.scrollHeight}px`;
      requestAnimationFrame(() => {
        content.style.height = "0";
      });
    }

    setShow((prev) => !prev);
  }

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
