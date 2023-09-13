import React, { useContext, useState } from 'react';
import CardsContext from '../../context/cards';
import Card from './Card';
import SelectedCard from '../selected-card/SelectedCard';
import './cards.scss';

function CardView() {
    const [selectedCard, setSelectedCard] = useState(null);
    const handleCardSelect = (card) => {
        setSelectedCard(card);
    };

    const data = useContext(CardsContext)

  return (
    <>
        <section className="cards-view">
            <div>
                {selectedCard ? (
                <>
                    <SelectedCard selectedImg={`../../images/${selectedCard.image}`}/>
                </>
                ) : (
                    <p className="selected-card__message">Hetkel pole kaarti valitud</p>
                )}
            </div>
            <div className='card__list'>
                {
                    data.cards.map(item => (
                        <Card key={item.id} card={item} name={item.name} image={item.image} alt={item.alt} onSelect={handleCardSelect} />
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default CardView
