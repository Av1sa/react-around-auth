import React from "react";

function PopupWithImage({ title, src }) {
  return (
    <div className="popup popup_image">
      <div className="popup__container">
        <img className="popup__image" alt={title} src={src} />
        <h2 className="popup__image-title">{title}</h2>
        <button className="button button_close"></button>
      </div>
    </div>
  );
}

export default PopupWithImage;
