function Main() {
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
          <img src="link" className="profile__avatar" alt="Описание" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Имя пользователя</h1>
            <button 
              className="profile__button profile__button_type_edit" 
              type="button" 
              title="Редактировать профиль" 
              aria-label="Редактировать профиль" 
              onClick={handleEditProfileClick}
            ></button>
          <p className="profile__description">Описание пользователя</p>
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

        </ul>
      </section>
    </main>
    )
}
export default Main;