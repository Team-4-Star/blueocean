import { useState, useEffect } from "react";
import FlashcardContext from "./FlashcardContext.mjs";

const FlashcardContextProvider = ({children}) => {

    
//STATE

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

    const toggleShowAnswer = (flashcardId) => {
        setFlashcards(flashcards.map(card => 
            card.id === flashcardId ? {...card, showAnswer: !card.showAnswer} : card
        ));
    }

    useEffect(() => {
        getFlashcards();
    }, []);

    return (
        <FlashcardContext.Provider value={{
            toggleShowAnswer,
            showAnswer,
            flashcards }} >
            {children}
        </FlashcardContext.Provider>
    )
}

export default FlashcardContextProvider;