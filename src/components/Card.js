import React from "react";
import api from "../utils/Api";

function Card({ card, onDeleteClick, onCardClick, userId }) {
  const { name, link, likes, _id, owner } = card;
  const isCreatedByCurrentUser = owner._id === _id;

  const [isLikedByCurrentUser, setIsLikedByCurrentUser] = React.useState(
    likes.some((item) => item._id === userId)
  );
  const [numOfLikes, setNumOfLikes] = React.useState(likes.length);

  const handleLikeIcon = () => {
    setIsLikedByCurrentUser(!isLikedByCurrentUser);
    api
      .changeLikeCardStatus(_id, isLikedByCurrentUser ? "DELETE" : "PUT")
      .then((res) => setNumOfLikes(res.likes.length))
      .catch((err) => `Error: ${err}`);
  };

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img className="card__image" alt={`Pic: ${name}`} src={link} onClick={handleClick}/>
      <div className="card__text-container">
        <p className="card__text">{name}</p>
        <div className="card__likes-container">
          <button
            className={
              isLikedByCurrentUser
                ? "button button_like button_like-black"
                : "button button_like"
            }
            onClick={handleLikeIcon}
          />
          <p className="card__likes-text">{numOfLikes}</p>
        </div>
      </div>
      {isCreatedByCurrentUser && (
        <button className="button button_delete" onClick={onDeleteClick} />
      )}
    </li>
  );
}

export default Card;
