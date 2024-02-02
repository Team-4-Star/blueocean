import { useState } from "react"
import CreatorContext from "./CreatorContext.mjs"

const CreatorProvider = ({children}) => {
    //STATE==============
    const [categoryID, setCategoryID] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('')
  
    //function to create flashcard===============
    const createFlashcard = async (category_id, word, definition) => {
        try {
          // Create the flashcard data object
          const flashcardData = {
            category_id: category_id,
            word: word,
            definition: definition, 
          };
      
          // Set up the request options
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(flashcardData)
          };
      
          // Make the POST request
          const response = await fetch('https://solidfy.onrender.com/flashcards', requestOptions);
      
          if (!response.ok) {
            throw new Error('Network response not ok');
          }
      
          const flashcardResult = await response.json();
          alert('Flashcard created:', flashcardResult);
        } catch (error) {
          console.error('Problem with fetch', error);
        }
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
