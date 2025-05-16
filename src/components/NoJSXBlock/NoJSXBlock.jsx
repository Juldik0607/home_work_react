import React from "react";
import styles from "./NoJSXBlock.module.css";

function NoJSXBlock() {
  return React.createElement(
    "div",
    { className: styles.block },
    React.createElement(
      "h2",
      { className: styles.heading },
      "Варіант 2: React.createElement"
    ),
    React.createElement(
      "p",
      { className: styles.text },
      "Цей блок створено БЕЗ JSX, за допомогою createElement."
    ),
    React.createElement(
      "div",
      { className: styles.wrapper },
      React.createElement("img", {
        className: styles.ksenja,
        src: `${process.env.PUBLIC_URL}/images/ksenja2.png`,
        alt: "Ксеня без JSX",
      }),
      React.createElement(
        "span",
        { className: styles.hint },
        "А ти зробив домашку?"
      )
    )
  );
}

export default NoJSXBlock;
