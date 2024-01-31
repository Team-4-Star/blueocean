import { useState } from "react";
import FlashcardContext from "./FlashcardContext.mjs";

const FlashcardContextProvider = ({children}) => {
//STATE

    const [flashcards, setFlashcards] = useState([]);
    const [reactFlashcards, setReactFlashcards] = useState([]);
    const [nodeFlashcards, setNodeFlashcards] = useState([])
    const [flashcardsFetched, setFlashcardsFetched] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false);
    const [progress, setProgress] = useState(40)
    const [categories, setCategories] = useState([]);
    const [learned, setLearned] = useState(false)

//FUNCTIONS
// 'https://blue-ocean-back-end.onrender.com/flashcards'
    //function to fetch all flashcards
    const getFlashcards = async () => {
        try {
            const res = await fetch('http://localhost:8000/flashcards');
            if(!res.ok) {
                throw new Error('error')
            }
            const data = await res.json();
            setFlashcards(data);
            setFlashcardsFetched(true)
            console.log(flashcards)

        }   catch (error) {
            console.error('problem fetching cards')
        }
    }

    //function to fetch all flashcards then filter by category
    const getCardsByCategory = async (num, setElem, elem) => {
        
        try {
            const res = await fetch('https://blue-ocean-back-end.onrender.com/flashcards');
            if(!res.ok) {
                throw new Error('error')
            }
            const data = await res.json();

            const cards = data.filter(flashcard => flashcard.category_id === num)

            setElem(cards);
            setFlashcardsFetched(true)
            console.log(elem)

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
    const toggleShowAnswer = (flashcardId, setElem, elem) => {
        setElem(elem.map(card => 
            card.id === flashcardId ? {...card, 
                showAnswer: !card.showAnswer} : card
        ));
        console.log('working')
    };
    //function to toggle if card is learned
    // const toggleLearned = (flashcardId, setElem, elem) => {
    //     setElem(elem.map(card => 
    //         card.id === flashcardId ? {...card, 
    //             learned: !card.learned} : card
    //     ));
    //     setLearned(!learned)
    //     learned ? console.log('learned') : console.log('not learned')
    // };

    return (
        <FlashcardContext.Provider value={{
            progress,
            getCardsByCategory,
            getCategories,
            getFlashcards,
            toggleShowAnswer,
            setFlashcards,
            setReactFlashcards,
            setNodeFlashcards,
            nodeFlashcards,
            reactFlashcards,
            flashcards,
            categories,
            showAnswer }}>
            {children}
        </FlashcardContext.Provider>
      );
}

export default FlashcardContextProvider;

