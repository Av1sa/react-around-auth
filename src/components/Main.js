import React from "react";
import editIconLarge from "../images/edit_large_icon.svg";

function Main({ onEditProfile, onEditAvatar, onAddPlace }) {
  return (
    <main>
      {/* Profile Section  */}
      <section className="profile">
        <div className="profile__avatar-container">
          <img alt="Avatar Pic" className="profile__avatar" />
          <div className="profile__avatar-edit" onClick={onEditAvatar}>
            <img src={editIconLarge} alt="" />
          </div>
        </div>
        <div className="profile__text-container">
          <h1 className="profile__name">Loading...</h1>
          <button
            className="button button_edit"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">Loading...</p>
        </div>
        <button className="button button_add" onClick={onAddPlace}></button>
      </section>

      {/* Cards Section  */}
      <section className="elements">
        {/* Cards added dynamically  */}
        <ul className="cards"></ul>
      </section>

      {/* Popups  */}
      <section className="popup-forms">
        {/* Confirm Delete Card  */}
        <div className="popup popup_delete-card">
          <div className="popup__container popup__container_form">
            <form className="popup__form" noValidate>
              <h2 className="popup__title">Are You Sure?</h2>
              <button
                type="submit"
                className="button button_save popup__input"
                id="card_id"
              >
                Yes
              </button>
            </form>
            <button className="button button_close"></button>
          </div>
        </div>
      </section>

      {/* Card Template  */}
      <template className="template-card">
        <li className="card">
          <img className="card__image" alt="" />
          <div className="card__text-container">
            <p className="card__text"></p>
            <div className="card__likes-container">
              <button className="button button_like"></button>
              <p className="card__likes-text"></p>
            </div>
          </div>
          <button className="button button_delete"></button>
        </li>
      </template>
    </main>
  );
}

export default Main;
