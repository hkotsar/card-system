import React from 'react';
import './cards.scss';

function Card({ card, name, image, alt, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(card)}>
      <img className="card__img" src={`../../images/${image}`} alt={alt} />
      <h3 className="card__name">{name}</h3>
    </div>
  )
}

export default Card