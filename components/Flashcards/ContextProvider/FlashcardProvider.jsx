import { useState, useEffect } from "react";
import FlashcardContext from "./FlashcardContext.mjs";

const FlashcardContextProvider = ({children}) => {

    
//STATE

    const [flashcards, setFlashcards] = useState([]);
    const [flashcardsFetched, setFlashcardsFetched] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false);
    const [categories, setCategories] = useState([]);

//FUNCTIONS
    //function to fetch all flashcards
    const getFlashcards = async () => {
        try {
            const res = await fetch('https://blue-ocean-back-end.onrender.com/flashcards');
            if(!res.ok) {
                throw new Error('error')
            }
            const data = await res.json();
            setFlashcards(data);
            setFlashcardsFetched(true)
            // console.log(flashcards)
            // console.log(flashcardsFetched)
            console.log(flashcards)
            console.log(flashcardsFetched)
        }   catch (error) {
            console.error('problem fetching cards')
        }
    }
    //function to fetch flashcard categories
    const getCategories = async () => {
        try {
            const res = await fetch('https://blue-ocean-back-end.onrender.com/flashcards/categories');
            if(!res.ok) {
                throw new Error('error')
            }
            const data = await res.json();
            setCategories(data)
            console.log(data)
        } catch {
            console.error('problem fetching categories')
        }
    }

    //function to toggle individual state of flashcards to show the answer
    const toggleShowAnswer = (flashcardId) => {
        setFlashcards(flashcards.map(card => 
            card.id === flashcardId ? {...card, showAnswer: !card.showAnswer} : card
        ));
    }

    //fetches all cards as soon as component is loaded
    useEffect(() => {
        getFlashcards();
    }, []);

    return (
        <FlashcardContext.Provider value={{
            getCategories,
            toggleShowAnswer,
            showAnswer,
            flashcards,
            categories }} >
            toggleShowAnswer,
            showAnswer,
            flashcards }} >
            {children}
        </FlashcardContext.Provider>
    )
}

export default FlashcardContextProvider;

