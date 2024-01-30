import { useState } from "react"
import CreatorContext from "./CreatorContext.mjs"

const CreatorProvider = ({children}) => {
    //STATE==============
    const [categoryID, setCategoryID] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('')
  
    //function to create flashcard===============
    const createFlashcard = (word, definition, category_id) => {
        const flashcardData = {
            word: word,
            definition: definition,
            category_id: category_id
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(flashcardData)
        };

        fetch('http://localhost:80/flashcards', requestOptions)
            .then(response => {
                if(!response.ok) {
                    throw new Error('NW res !ok')
                }
                return response.json()
            })
            .then(flashcardData => {
                console.log(flashcardData);
            })
            .catch(error => {
                console.error('problem with fetch', error)
            })
    };

    //functions to handle input values for card creation
    const categoryIDChange = (event) => {
        setCategoryID(event.target.value);
    };

    const questionChange = (event) => {
        setQuestion(event.target.value);
    };

    const answerChange = (event) => {
        setAnswer(event.target.value);
    };

    const submit = () => {
        createFlashcard(categoryID, question, answer);
    };

    return (
        <CreatorContext.Provider value={{
            createFlashcard,
            categoryID,
            setCategoryID,
            question,
            setQuestion,
            answer, 
            setAnswer,
            categoryIDChange,
            questionChange,
            answerChange,
            submit
        }}>
            {children}
        </CreatorContext.Provider>
    )
}

export default CreatorProvider
