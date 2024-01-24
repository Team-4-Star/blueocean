import { useContext, useState, useEffect } from "react";
import { TiPin } from "react-icons/ti";
import { FaRegCheckSquare } from "react-icons/fa";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";

const IndNodeCards = ({flashcard}) => {

  const {
    toggleShowAnswer,
    nodeFlashcards,
    setNodeFlashcards
  } = useContext(FlashcardContext)
    
  return (
    <div className="flashcard" >
        {!flashcard.showAnswer ? <h1 className="word" >{flashcard.word}</h1> : <p className="definition" >{flashcard.definition}</p>}
            <div className="flashcard-btn-div" >
                <TiPin className="pin" />   
                <FaRegCheckSquare className="check-square" />            
                <button className="answer-btn" onClick={() => toggleShowAnswer(flashcard.id, setNodeFlashcards, nodeFlashcards)} >{!flashcard.showAnswer ? 'Answer' : 'Back'}</button>
            </div>
      
    </div>
  )
}

export default IndNodeCards