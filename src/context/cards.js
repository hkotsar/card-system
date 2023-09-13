import React, { createContext } from 'react';
import data from '../data/cards.json';

const CardsContext = createContext();

function Provider({ children }) {
   

    return (
        <CardsContext.Provider value={data}>
            {children}
        </CardsContext.Provider>
    )

}

export { Provider };
export default CardsContext