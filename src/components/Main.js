import { useEffect, useState } from 'react'; 
import api from '../utils/api.js'
import Card from './Card.js';

function Main() {
  const [userName, setUserName] = useState('Пользователь');
  const [userDescription, setUserDescription] = useState('Описание');
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser().then(response => {
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
    })
    api.getCards().then(response => {
      setCards(response);
    });
  },[])

  function handleEditAvatarClick() {
    const popupTypeAvatar = document.querySelector('.popup_type_avatar');
    popupTypeAvatar.classList.add('popup_open');
  }
  function handleEditProfileClick() {
    const popupTypeProfile = document.querySelector('.popup_type_edit');
    popupTypeProfile.classList.add('popup_open');
  }
  function handleAddPlaceClick() {
    const popupTypeAddPhoto = document.querySelector('.popup_type_photo');
    popupTypeAddPhoto.classList.add('popup_open');
  }
  return (
    <main className="main">
      <section className="profile">
        <button 
          className="profile__avatar-button" 
          type="button" 
          title="Редактировать аватар пользователя" 
          aria-label="Редактировать аватар пользователя" 
          onClick={handleEditAvatarClick}
        >
          <img src={userAvatar} className="profile__avatar" alt="Описание" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
            <button 
              className="profile__button profile__button_type_edit" 
              type="button" 
              title="Редактировать профиль" 
              aria-label="Редактировать профиль" 
              onClick={handleEditProfileClick}
            ></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button 
          className="profile__button profile__button_type_add" 
          type="button" 
          title="Добавить фотографию" 
          aria-label="Добавить фотографию" 
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {
          cards.map(item => 
            <Card 
              key={item._id} 
              name={item.name} 
              link={item.link} 
              owner={item.owner} 
              likes={item.likes}
            />
          )}
        </ul>
      </section>
    </main>
    )
}
export default Main;