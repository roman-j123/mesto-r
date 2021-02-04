import './index.css';
import logo from './images/logo.svg';

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} className="header__logo" alt="Логотип сайта" />
      </header>
      <main className="main">
        <section className="profile">
          <button className="profile__avatar-button">
            <img src="link" className="profile__avatar" alt="Описание" />
          </button>
        <div className="profile__info">
          <h1 className="profile__name">Имя пользователя</h1>
          <button className="profile__button profile__button_type_edit" type="button" title="Редактировать профиль" aria-label="Редактировать профиль"></button>
          <p className="profile__description">Описание пользователя</p>
        </div>
        <button className="profile__button profile__button_type_add" type="button" title="Добавить фотографию" aria-label="Добавить фотографию"></button>
      </section>
      <section className="elements">
        <ul className="elements__list">

        </ul>
      </section>
    </main>
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>
    <div className="popup popup_type_edit">
      <div className="popup__container">
        <button className="popup__close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
        <form action="post" className="popup__form">
          <fieldset className="popup__fieldset">
            <legend className="popup__header">Редактировать профиль</legend>
            <section className="popup__section">
              <input type="text" className="popup__input popup__input_type_name" name="name" value="" placeholder="Имя пользователя" minLength="2" maxLength="40" required />
              <span className="popup__input-error" id="name_error"></span>
            </section>
            <section className="popup__section">
              <input type="text" className="popup__input popup__input_type_description" name="description" value="" placeholder="Описание пользователя" minLength="2" maxLength="200" required />
              <span className="popup__input-error" id="description_error"></span>
            </section>
            <button className="popup__button" type="submit" disabled>Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>
    <div className="popup popup_type_photo">
      <div className="popup__container">
        <button className="popup__close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
        <form action="post" className="popup__form">
          <fieldset className="popup__fieldset">
            <legend className="popup__header">Новое место</legend>
            <section className="popup__section">
              <input type="text" className="popup__input popup__input_type_place" name="place" value="" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="popup__input-error" id="place_error"></span>
            </section>
            <section className="popup__section">
              <input type="url" className="popup__input popup__input_type_url" name="url" value="" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error" id="url_error"></span>
            </section>
            <button className="popup__button" type="submit">Создать</button>
          </fieldset>
        </form>
      </div>
    </div>
    <section className="popup popup_type_zoom">
      <div className="popup__gallery">
        <button className="popup__close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
        <figure className="popup__figure">
          <img className="popup__image" src="link" alt="Описание" />
          <figcaption className="popup__figcaption"></figcaption>
        </figure>
      </div>
    </section>
    <section className="popup popup_type_del">
      <div className="popup__container">
        <button className="popup__close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
        <p className="popup__header">Вы уверены?</p>
        <button type="button" className="popup__button">Да</button>
      </div>
    </section>
    <section className="popup popup_type_avatar">
      <div className="popup__container">
      <button className="popup__close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
      <form action="post" className="popup__form">
        <fieldset className="popup__fieldset">
          <legend className="popup__header">Обновить аватар</legend>
            <section className="popup__section">
              <input type="url" className="popup__input popup__input_type_url" name="avatar" value="" placeholder="Ссылка на картинку" required />
              <span className="popup__input-error" id="avatar_error"></span>
            </section>
          <button className="popup__button" type="submit">Сохранить</button>
        </fieldset>
      </form>
      </div>
    </section>
    <template id="template-card">
      <li className="elements__item">
        <button type="button" className="elements__delete"></button>
        <img className="elements__image" src="link" alt="Описание" />
        <div className="elements__card-container">
          <h2 className="elements__header"></h2>
          <div className="elements__like-container">
            <button className="elements__like" type="button" title="Оценить фотографию" aria-label="Поставить лайк"></button>
            <span className="elements__like-counter">0</span>
          </div>
        </div>
      </li>
    </template>
  </>
  );
}

export default App;
