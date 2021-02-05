function Main() {
  return (
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
    )
}
export default Main;