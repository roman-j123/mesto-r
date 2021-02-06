import './index.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    <div className="popup popup_type_edit">
      <div className="popup__container">
        <button className="popup__close" type="button" title="Закрыть окно" aria-label="Закрыть"></button>
        <form action="post" className="popup__form">
          <fieldset className="popup__fieldset">
            <legend className="popup__header">Редактировать профиль</legend>
            <section className="popup__section">
              <input type="text" className="popup__input popup__input_type_name" name="name" defaultValue="" placeholder="Имя пользователя" minLength="2" maxLength="40" required />
              <span className="popup__input-error" id="name_error"></span>
            </section>
            <section className="popup__section">
              <input type="text" className="popup__input popup__input_type_description" name="description" defaultValue="" placeholder="Описание пользователя" minLength="2" maxLength="200" required />
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
              <input type="text" className="popup__input popup__input_type_place" name="place" defaultValue="" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="popup__input-error" id="place_error"></span>
            </section>
            <section className="popup__section">
              <input type="url" className="popup__input popup__input_type_url" name="url" defaultValue="" placeholder="Ссылка на картинку" required />
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
              <input type="url" className="popup__input popup__input_type_url" name="avatar" defaultValue="" placeholder="Ссылка на картинку" required />
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
