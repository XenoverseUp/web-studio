import React, { useRef } from "react";
import "./Modal.scss";

const Modal = ({ setTheme, setIsModalOpen, theme }) => {
  const date = new Date();
  const modalRef = useRef();

  const closeModal = () => {
    modalRef.current.style.animation = "fade-out 0.25s ease forwards";
    setTimeout(() => {
      setIsModalOpen(false);
    }, 260);
  };

  return (
    <div className="modal" ref={modalRef}>
      <div className="logo">
        <img
          alt="logo"
          src="https://img.icons8.com/ios-filled/100/50565a/comet.png"
        />
      </div>

      <div className="close" onClick={closeModal}>
        &times;
      </div>

      <header>
        <img
          alt="logo"
          src="https://img.icons8.com/ios-filled/196/f5f5f5/comet.png"
        />

        <h1>WebStudio</h1>
        <p>Online text editor by Xenoverse</p>
      </header>

      <section>
        Your editor theme is
        <select
          name="theme"
          id="theme"
          value={theme}
          onChange={(e) => {
            setTheme(e.target.value);
            closeModal();
          }}
        >
          <option value="paraiso-dark">Paraiso Dark</option>
          <option value="material">Material Dark</option>
          <option value="default">Elegant Light</option>
          <option value="ayu-dark">Ayu Dark</option>
          <option value="duotone-light">Duotone Light</option>
          <option value="icecoder">Ice Coder</option>
          <option value="monokai">Monokai</option>
          <option value="yeti">Yeti</option>
          <option value="the-matrix">The Matrix</option>
          <option value="neo">Neo</option>
          <option value="mdn-like">MDN</option>
          <option value="3024-day">3024 Day</option>
        </select>
      </section>

      <footer>&copy; {date.getFullYear()} Xenoverse </footer>
    </div>
  );
};

export default Modal;
