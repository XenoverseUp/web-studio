import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/ayu-dark.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/theme/icecoder.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/yeti.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/paraiso-dark.css";
import "codemirror/theme/neo.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/3024-day.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = (props) => {
  const {
    language,
    value,
    displayName,
    onChange,
    setCollapse,
    collapse,
    twoOpen,
    oneOpen,
    theme,
  } = props;

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div
      className="editor-container"
      style={
        !collapse
          ? { height: "3rem", maxHeight: "unset" }
          : twoOpen
          ? { height: "calc(50% - 1.5rem)", maxHeight: "calc(50% - 1.5rem)" }
          : oneOpen
          ? { height: "calc(100% - 6rem)", maxHeight: "calc(100% - 6rem)" }
          : null
      }
    >
      <header
        style={
          theme === "material"
            ? {
                color: "gray",
                backgroundColor: "#263238",
                borderTop: `1px solid gray`,
              }
            : theme === "default"
            ? {
                color: "gray",
                backgroundColor: "#f7f7f7",
                borderTop: `1px solid #00000010`,
                borderBottom: `1px solid #00000010`,
              }
            : theme === "ayu-dark"
            ? {
                color: "gray",
                backgroundColor: "#0a0e14",
                borderTop: `1px solid #ffffff20`,
              }
            : theme === "duotone-light"
            ? {
                color: "gray",
                backgroundColor: "#faf8f5",
                borderTop: `1px solid #00000020`,
              }
            : theme === "icecoder"
            ? {
                color: "gray",
                backgroundColor: "#1d1d1b",
                borderTop: `1px solid #ffffff20`,
              }
            : theme === "monokai"
            ? {
                color: "gray",
                backgroundColor: "#272822",
                borderTop: `1px solid #ffffff20`,
              }
            : theme === "yeti"
            ? {
                color: "gray",
                backgroundColor: " #e5e1db",
                borderTop: `1px solid #00000010`,
                borderBottom: `1px solid #00000010`,
              }
            : theme === "the-matrix"
            ? {
                color: "#00ff00",
                backgroundColor: "#006600",
                borderTop: `1px solid #00ff00`,
                borderBottom: `1px solid #00ff00`,
              }
            : theme === "paraiso-dark"
            ? {
                color: "gray",
                backgroundColor: "#2f1e2e",
                borderTop: `1px solid gray`,
              }
            : theme === "neo"
            ? {
                color: "gray",
                backgroundColor: "#fff",
                borderTop: `1px solid gray`,
              }
            : theme === "mdn-like"
            ? {
                color: "whitesmoke",
                backgroundColor: "#568cbd",
                borderTop: `1px solid whitesmoke`,
              }
            : theme === "3024-day"
            ? {
                backgroundColor: "#f7f7f7",
                borderTop: `1px solid #00000020`,
              }
            : null
        }
      >
        {displayName === "HTML" ? (
          <aside>
            <img
              alt="logo"
              src="https://img.icons8.com/color/48/000000/html-5.png"
            />
            <p>index.html</p>
          </aside>
        ) : displayName === "CSS" ? (
          <aside>
            <img
              alt="logo"
              src="https://img.icons8.com/color/48/000000/css3.png"
            />{" "}
            <p>style.css</p>
          </aside>
        ) : displayName === "JavaScript" ? (
          <aside>
            <img
              alt="logo"
              src="https://img.icons8.com/color/48/000000/javascript.png"
            />{" "}
            <p>script.js</p>
          </aside>
        ) : null}
        <button onClick={(e) => setCollapse(!collapse)}>
          {collapse && theme === "the-matrix" ? (
            <img
              alt="logo"
              src="https://img.icons8.com/material/24/00ff00/collapse--v2.png"
            />
          ) : collapse && theme === "mdn-like" ? (
            <img
              alt="logo"
              src="https://img.icons8.com/material/24/f5f5f5/collapse--v2.png"
            />
          ) : collapse ? (
            <img
              alt="logo"
              src="https://img.icons8.com/material/24/50565a/collapse--v2.png"
            />
          ) : !collapse && theme === "the-matrix" ? (
            <img
              alt="logo"
              src="https://img.icons8.com/android/24/00ff00/resize-diagonal.png"
            />
          ) : !collapse && theme === "mdn-like" ? (
            <img
              alt="logo"
              src="https://img.icons8.com/android/24/f5f5f5/resize-diagonal.png"
            />
          ) : !collapse ? (
            <img
              alt="logo"
              src="https://img.icons8.com/material/24/50565a/collapse--v2.png"
            />
          ) : null}
        </button>
      </header>
      {collapse ? (
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="codemirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: theme,
          }}
        />
      ) : null}
    </div>
  );
};

export default Editor;
