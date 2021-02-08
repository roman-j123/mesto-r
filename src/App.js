import { useState } from 'react'; 

import './index.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick() {
    setSelectedCard(selectedCard);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard();
  }
  
  
  return (
    <>
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      
      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} buttonText="Создать" onClose={closeAllPopups}>
        <section className="popup__section">
          <input type="text" className="popup__input popup__input_type_place" name="place" defaultValue="" placeholder="Название" minLength="2" maxLength="30" required/>
          <span className="popup__input-error" id="place_error"></span>
        </section>
        <section className="popup__section">
          <input type="url" className="popup__input popup__input_type_url" name="url" defaultValue="" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error" id="url_error"></span>
        </section>        
      </PopupWithForm>
      
      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <section className="popup__section">
          <input type="text" className="popup__input popup__input_type_name" name="name" defaultValue="" placeholder="Имя пользователя" minLength="2" maxLength="40" required />
          <span className="popup__input-error" id="name_error"></span>
        </section>
        <section className="popup__section">
          <input type="text" className="popup__input popup__input_type_description" name="description" defaultValue="" placeholder="Описание пользователя" minLength="2" maxLength="200" required />
          <span className="popup__input-error" id="description_error"></span>
        </section>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <section className="popup__section">
          <input type="url" className="popup__input popup__input_type_url" name="avatar" defaultValue="" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error" id="avatar_error"></span>
        </section>
      </PopupWithForm>
    
      <ImagePopup card={selectedCard} />
    
    <section className="popup popup_type_del">
      <div className="popup__container">
        <button className="popup__close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
        <p className="popup__header">Вы уверены?</p>
        <button type="button" className="popup__button">Да</button>
      </div>
    </section>
  </>
  );
}
export default App;
