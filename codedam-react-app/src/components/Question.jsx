import React, { useRef, useState } from "react";
import "./Question.css";

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  const contentRef = useRef(null);

  const [disabled, setDisabled] = useState(false);

  function toggleContent() {
    if (disabled) return; // Prevent multiple clicks
    const content = contentRef.current;

    if (!content) return;
    setDisabled(true); // Disable button during animation
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

    // Wait for transition to finish before enabling clicks again
    setTimeout(() => setDisabled(false), 1000); // Match transition duration
    setShow((prev) => !prev);
  }

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggleContent} disabled={disabled}>
          {show ? "-" : "+"}
        </button>
      </header>
      <p
        className="content"
        ref={contentRef}
        style={{
          transition: "height 1s ease", //for smooth transition
        }}
      >
        {info}
      </p>
    </article>
  );
};

export default Question;
