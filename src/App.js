import React, { useState, useEffect } from "react";
import { Editor, Modal } from "./components";
import useLocalStorage from "./useLocalStorage";
import "./App.scss";

function App() {
  const defaultHTML = `<!-- Edit this file for HTML -->

  <header>
    <img alt="logo" src="https://img.icons8.com/ios-filled/196/252525/comet.png" />
    <h1>WebStudio</h1>
  </header>
  
  <p>Edit the files to create something amazing!</p>
  
  <footer>DummyDate</footer>
  `;

  const defaultCSS = `/* Edit this file for CSS */


  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap');
  
  body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height:100vh;
    overflow: hidden;
    font-family: "Montserrat", sans-serif;
    background: linear-gradient(to right, #ff6e7f, #bfe9ff) 0% 50% / 300%; 
    animation: bg ease 3s infinite alternate;
  
  }
  
  header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  
  header h1 {
    font-size: 4rem;
  }
  
  header img {
    width:10rem;
    height:10rem;
    animation: shake 2s ease infinite alternate;
  }
  
  footer {
    position: absolute;
    bottom:1rem;
  }
  
  @keyframes shake {
    from {
      transform: translate(3rem, -3rem);
    }
    to {
      transform: translate(-1rem, 1rem);
    }
  }
  
  @keyframes bg {
    0% {
      background-position: 0% 50%;
    } 100% {
      background-position: 100% 50%;
  }
`;

  const defaultJS = `// Edit this file for JavaScript

  const footer = document.querySelector("footer");
  
    const appendDate = (parent) => {
        
      let date = new Date();
      parent.innerHTML = "&copy; " + date.getFullYear() + " Xenoverse";
    
    }
      
    appendDate(footer);
  `;

  const [HTML, setHTML] = useLocalStorage("html", defaultHTML);
  const [CSS, setCSS] = useLocalStorage("css", defaultCSS);
  const [JS, setJS] = useLocalStorage("js", defaultJS);
  const [srcDoc, setSrcDoc] = useState("");
  const [isHTMLOpen, setIsHTMLOpen] = useState(true);
  const [isCSSOpen, setIsCSSOpen] = useState(true);
  const [isJSOpen, setIsJSOpen] = useState(true);
  const [twoOpen, setIsTwoOpen] = useState(false);
  const [oneOpen, setIsOneOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState("paraiso-dark");

  useEffect(() => {
    if (
      (isHTMLOpen && isCSSOpen && !isJSOpen) ||
      (isHTMLOpen && !isCSSOpen && isJSOpen) ||
      (!isHTMLOpen && isCSSOpen && isJSOpen)
    ) {
      setIsTwoOpen(true);
      setIsOneOpen(false);

      return;
    } else if (
      (isHTMLOpen && !isCSSOpen && !isJSOpen) ||
      (!isHTMLOpen && !isCSSOpen && isJSOpen) ||
      (!isHTMLOpen && isCSSOpen && !isJSOpen)
    ) {
      setIsTwoOpen(false);
      setIsOneOpen(true);
    } else {
      setIsTwoOpen(false);
      setIsOneOpen(false);
    }
  }, [isCSSOpen, isHTMLOpen, isJSOpen]);

  // Updating with delay

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        ` <html lang="en">
              <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <style>${CSS}</style>
              </head>
              <body>
                ${HTML}
                <script> ${JS}</script>
              </body>
          </html>`
      );
    }, 400);

    return () => {
      clearTimeout(timeout);
    };
  }, [HTML, CSS, JS]);

  return (
    <>
      <div className="App">
        {isModalOpen ? (
          <Modal
            setTheme={setTheme}
            setIsModalOpen={setIsModalOpen}
            theme={theme}
          />
        ) : null}

        <div
          className="editors"
          style={
            theme === "material"
              ? {
                  backgroundColor: "#263238",
                  borderRight: `1px solid gray`,
                }
              : theme === "default"
              ? {
                  backgroundColor: "#f7f7f7",
                  borderRight: `1px solid #00000010`,
                }
              : theme === "ayu-dark"
              ? {
                  backgroundColor: "#0a0e14",
                  borderRight: `1px solid #ffffff20`,
                }
              : theme === "duotone-light"
              ? {
                  backgroundColor: "#faf8f5",
                  borderRight: `1px solid #00000020`,
                }
              : theme === "icecoder"
              ? {
                  backgroundColor: "#1d1d1b",
                  borderRight: `1px solid #ffffff20`,
                }
              : theme === "monokai"
              ? {
                  backgroundColor: "#272822",
                  borderRight: `1px solid #ffffff20`,
                }
              : theme === "yeti"
              ? {
                  backgroundColor: " #e5e1db",
                  borderRight: `1px solid #00000010`,
                }
              : theme === "the-matrix"
              ? {
                  backgroundColor: "#006600",
                  borderRight: `1px solid #00ff00`,
                }
              : theme === "paraiso-dark"
              ? {
                  backgroundColor: "#2f1e2e",
                  borderRight: `1px solid gray`,
                }
              : theme === "neo"
              ? {
                  backgroundColor: "#fff",
                  borderRight: `1px solid gray`,
                }
              : theme === "mdn-like"
              ? {
                  backgroundColor: "#568cbd",
                  borderRight: `1px solid gray`,
                }
              : theme === "3024-day"
              ? {
                  backgroundColor: "#f7f7f7",
                  borderRight: `1px solid #00000020`,
                }
              : null
          }
        >
          <div
            className="back"
            style={
              theme === "default" ||
              theme === "3024-day" ||
              theme === "yeti" ||
              theme === "neo"
                ? { opacity: "1" }
                : { opacity: "0.3" }
            }
          >
            <img
              alt="logo"
              src="https://img.icons8.com/ios-filled/100/f5f5f5/comet.png"
            />
            <h1>WebStudio</h1>
          </div>

          <Editor
            language="xml"
            displayName="HTML"
            value={HTML}
            onChange={setHTML}
            setCollapse={setIsHTMLOpen}
            collapse={isHTMLOpen}
            twoOpen={twoOpen}
            oneOpen={oneOpen}
            theme={theme}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={CSS}
            onChange={setCSS}
            setCollapse={setIsCSSOpen}
            collapse={isCSSOpen}
            twoOpen={twoOpen}
            oneOpen={oneOpen}
            theme={theme}
          />
          <Editor
            language="javascript"
            displayName="JavaScript"
            value={JS}
            onChange={setJS}
            setCollapse={setIsJSOpen}
            collapse={isJSOpen}
            twoOpen={twoOpen}
            oneOpen={oneOpen}
            theme={theme}
          />
        </div>
        <div className="settings-button" onClick={() => setIsModalOpen(true)}>
          <img
            alt="logo"
            src="https://img.icons8.com/fluent-systems-filled/96/50565a/settings.png"
          />
        </div>
        <div className="preview">
          <iframe
            title="output"
            frameBorder="0"
            width="100%"
            height="100%"
            srcDoc={srcDoc}
          />
        </div>
      </div>

      <div className="phone">
        <header>
          <img
            alt="logo"
            src="https://img.icons8.com/ios-filled/196/252525/comet.png"
          />
          <h1>WebStudio</h1>
        </header>

        <p>Use your PC or tablet to create something amazing!</p>

        <footer>&copy; {new Date().getFullYear()} Xenoverse</footer>
      </div>
    </>
  );
}

export default App;
