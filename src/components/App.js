import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(
    false
  );

  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleDeleteCardClick = () => {
    setIsDeleteCardPopupOpen(true);
  };
  const handleCardClick = (card) => {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  };
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  };

  const editProfileChildren = () => {
    return (
      <>
        <label className="popup__field">
          <input
            type="text"
            className="popup__input popup__input_name"
            placeholder="Edit Name"
            minLength="2"
            maxLength="40"
            pattern="[A-Za-z -]+"
            required
            id="name-input"
          />
          <span id="name-input-error" className="popup__input-error"></span>
        </label>
        <label className="popup__field">
          <input
            type="text"
            className="popup__input popup__input_desc"
            placeholder="Edit Job"
            minLength="2"
            maxLength="200"
            required
            id="desc-input"
          />
          <span className="popup__input-error" id="desc-input-error"></span>
        </label>
      </>
    );
  };

  const editAvatarChildren = () => {
    return (
      <>
        <label className="popup__field">
          <input
            type="url"
            className="popup__input popup__input_avatar"
            placeholder="Avatar Link"
            required
            id="avatar-input"
          />
          <span id="avatar-input-error" className="popup__input-error"></span>
        </label>
      </>
    );
  };

  const addPlaceChildren = () => {
    return (
      <>
        <label className="popup__field">
          <input
            type="text"
            className="popup__input popup__input_name"
            placeholder="Title"
            minLength="1"
            maxLength="30"
            required
            id="title-input"
          />
          <span className="popup__input-error" id="title-input-error"></span>
        </label>
        <label className="popup__field">
          <input
            type="url"
            className="popup__input popup__input_link"
            placeholder="Image Link"
            required
            id="link-input"
          />
          <span className="popup__input-error" id="link-input-error"></span>
        </label>
      </>
    );
  };

  const deleteCardChildren = () => {};

  return (
    <div>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onDeleteClick={handleDeleteCardClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Edit Profile"
        buttonText="Save"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={editProfileChildren()}
      />
      <PopupWithForm
        name="edit-avatar"
        title="Change Profile Picture"
        buttonText="Save"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={editAvatarChildren()}
      />
      <PopupWithForm
        name="new-place"
        title="New Place"
        buttonText="Save"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={addPlaceChildren()}
      />
      <PopupWithForm
        name="delete-card"
        title="Are You Shure?"
        buttonText="Yes"
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
        children={deleteCardChildren()}
      />
      <PopupWithImage
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
