function Card(props) {
    return (
        <li className="elements__item">
          <button type="button" className="elements__delete"></button>
          <img className="elements__image" src={props.link} alt={props.name} />
          <div className="elements__card-container">
            <h2 className="elements__header">{props.name}</h2>
            <div className="elements__like-container">
              <button className="elements__like" type="button" title="Оценить фотографию" aria-label="Поставить лайк"></button>
              <span className="elements__like-counter">{props.likes.length}</span>
            </div>
          </div>
        </li>
    )
}
export default Card;