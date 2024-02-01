import { useEffect, useState } from "react";
import FlashcardContext from "./FlashcardContext.mjs";

const FlashcardContextProvider = ({children}) => {
//STATE

    const [flashcards, setFlashcards] = useState([]);
    const [reactFlashcards, setReactFlashcards] = useState([]);
    const [nodeFlashcards, setNodeFlashcards] = useState([])
    const [flashcardsFetched, setFlashcardsFetched] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false);
    const [categories, setCategories] = useState([]);
    const [learned, setLearned] = useState(false)
    const [progress, setProgress] = useState(0)

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
    const getReactCards = async () => {
        try {
            const res = await fetch('http://localhost:8000/flashcards/react');
            if(!res.ok) {
                throw new Error('error')
            }
            const data = await res.json();;
            setReactFlashcards(data);
            console.log(reactFlashcards)
        } catch {
            console.error('problem fetching react cards')
        }
    }

    const getNodeCards = async () => {
        try {
            const res = await fetch('http://localhost:8000/flashcards/node');
            if(!res.ok) {
                throw new Error('error')
            }
            const data = await res.json();;
            setNodeFlashcards(data);
            console.log(nodeFlashcards)
        } catch {
            console.error('problem fetching node cards')
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

    //function to toggle unlearned
    const toggleUnlearned = async (flashcardId, elem) => {
        for (let card of elem) {
            if (card.id === flashcardId) {
                const res = await fetch(`http://localhost:8000/update-learned-false/${flashcardId}`);
                const data = await res.json();

                const resSub = await fetch('http://localhost:8000/progress/sub-barheight')
                const dataSubb = await resSub.json();
                console.log(flashcardId, data[0].learned, dataSubb[0].barheight)
            }
        }
    };

    //function to toggle card learned
    const toggleLearned = async (flashcardId, elem) => {
        for (let card of elem) {
            if (card.id === flashcardId) {
                const res = await fetch(`http://localhost:8000/update-learned-true/${flashcardId}`);
                const data = await res.json();

                const resAdd = await fetch('http://localhost:8000/progress/add-barheight')
                const dataAdd = await resAdd.json();
                console.log(flashcardId, data[0].learned, dataAdd[0].barheight)
            }
        }
    };
    

    const fetchBarHeight = async () => {
        const res = await fetch('http://localhost:8000/progress');
        const data = await res.json();
        setProgress(data[0].barheight)
        console.log(data)
    }

    return (
        <FlashcardContext.Provider value={{
            getNodeCards,
            getReactCards,
            fetchBarHeight,
            progress,
            learned,
            setLearned,
            toggleUnlearned,
            toggleLearned,
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

