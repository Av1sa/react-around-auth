import React from "react";
import editIconLarge from "../images/edit_large_icon.svg";
import api from "../utils/Api";
import Card from "../components/Card";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onDeleteClick, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const [userId, setUserId] = React.useState("");

  React.useEffect(() => {
    api.getAppInfo().then(([cardListData, userInfoData]) => {
      setUserId(userInfoData._id);
      setUserName(userInfoData.name);
      setUserDescription(userInfoData.about);
      setUserAvatar(userInfoData.avatar);
      setCards(cardListData);
    });
  }, []);


  return (
    <main>
      {/* Profile Section  */}
      <section className="profile">
        <div className="profile__avatar-container">
          <img alt="Avatar Pic" className="profile__avatar" src={userAvatar} />
          <div className="profile__avatar-edit" onClick={onEditAvatar}>
            <img src={editIconLarge} alt="" />
          </div>
        </div>
        <div className="profile__text-container">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="button button_edit"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="button button_add" onClick={onAddPlace}></button>
      </section>

      {/* Cards Section  */}
      <section className="elements">
        <ul className="cards">
          {cards.map((card) => (
            <Card
              card={card}
              userId={userId}
              onDeleteClick={onDeleteClick}
              onCardClick={onCardClick}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
