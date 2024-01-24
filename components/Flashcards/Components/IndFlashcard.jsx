import { useContext, useState, useEffect } from "react";
import { TiPin } from "react-icons/ti";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import { FaRegCheckSquare } from "react-icons/fa";

const IndFlashcard = ({flashcard}) => {

  const {
    toggleShowAnswer,
    flashcards,
    setFlashcards
  } = useContext(FlashcardContext)
    
  return (
    <div className="flashcard" >
        {!flashcard.showAnswer ? <h1 className="word" >{flashcard.word}</h1> : <p className="definition" >{flashcard.definition}</p>}
        
            <div className="flashcard-btn-div" >
                <TiPin className="pin" />   
                <FaRegCheckSquare className="check-square" />            
                <button className="answer-btn" onClick={() => toggleShowAnswer(flashcard.id, setFlashcards, flashcards)} >{!flashcard.showAnswer ? 'Answer' : 'Back'}</button>
            </div>
      
    </div>
  )
}

export default IndFlashcard
