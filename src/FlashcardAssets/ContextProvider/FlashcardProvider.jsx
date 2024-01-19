import { useState, useEffect } from "react";
import FlashcardContext from "./FlashcardContext.mjs";

const FlashcardContextProvider = ({children}) => {

    
//STATE
    const [currentCard, setCurrentCard] = useState(1);
    const [flashcards, setFlashcards] = useState([]);
    const [flashcardsFetched, setFlashcardsFetched] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false);

//FUNCTIONS
  
    const getFlashcards = async () => {
        try {
            const res = await fetch('https://blue-ocean-back-end.onrender.com/flashcards');
            if(!res.ok) {
                throw new Error('error')
            }
            const data = await res.json();
            setFlashcards(data);
            setFlashcardsFetched(true)
            console.log(flashcards)
            console.log(flashcardsFetched)
        }   catch (error) {
            console.error('problem fetching cards')
        }
    }

    const nextCardClick = () => {
        setCurrentCard(currentCard + 1)
        console.log(currentCard + 1)
    }

    const prevCardClick = () => {
        if(currentCard === 1) {
            console.log('cannot go lower than 1')
            return;
        }
        setCurrentCard(currentCard - 1)
        console.log(currentCard - 1)
    }

    useEffect(() => {
        getFlashcards();
    }, []);

    return (
        <FlashcardContext.Provider value={{
            nextCardClick,
            getFlashcards,
            setFlashcardsFetched,
            prevCardClick,
            currentCard,
            flashcards
        }} >
            {children}
        </FlashcardContext.Provider>
    )
}

export default FlashcardContextProvider;