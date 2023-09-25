import React, { useContext, useState } from 'react';
import CardsContext from '../../context/cards';
import Card from './Card';
import SelectedCard from '../selected-card/SelectedCard';
import './cards.scss';
import logo from '../../assets/voco it kool logod RGB-02.png'

function CardView() {
    const [selectedCard, setSelectedCard] = useState(null);
    const handleCardSelect = (card) => {
        setSelectedCard(card);
    };

    const data = useContext(CardsContext)
    console.log(selectedCard)
  return (
    <>
        <section className="cards-view">
            <div>
                {selectedCard ? (
                <>
                    <SelectedCard textColor={selectedCard.color} selectedImg={`../../images/${selectedCard.image}`} alt={selectedCard.alt}/>
                    
                </>
                ) : (
                    <>
                        <div className='view'>
                            <img className="logo" src={logo} alt="Logo" />
                            <p className="selected-card__message">Palun valige sobiv kaart ja seejärel täitke vasakul vajalikud väljad.</p>
                        </div>
                    </>
                )}
            </div>
            <div className="cards">
                <div className='card__list'>
                    {
                        data.cards.map(item => (
                            <Card key={item.id} card={item} name={item.name} image={item.image} alt={item.alt} onSelect={handleCardSelect} />
                        ))
                    }
                </div>
            </div>
            
        </section>
    </>
  )
}

export default CardView
