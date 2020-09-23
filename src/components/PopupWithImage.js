import React from "react";

function PopupWithImage({ card, onClose, isOpen }) {
  const { name, link } = card;
  return (
    <div
      className={
        isOpen ? "popup popup_image popup_is-opened" : "popup popup_image"
      }
    >
      <div className="popup__container">
        <img className="popup__image" alt={name} src={link} />
        <h2 className="popup__image-title">{name}</h2>
        <button className="button button_close" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithImage;
