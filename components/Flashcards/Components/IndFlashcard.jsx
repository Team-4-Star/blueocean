import { useContext, useState, useEffect } from "react";
import { TiPin } from "react-icons/ti";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";

const IndFlashcard = ({flashcard}) => {

  const {
    nextCardClick,
    getFlashcards,
    prevCardClick,
    showAnswer,
    currentCard,
    flashcards
  } = useContext(FlashcardContext)
    
  return (
    <div className="Flashcard" >
        {showAnswer ? <h1>{flashcard.word}</h1> : <p>{flashcard.definition}</p>}
            <div className="FlashcardBtnDiv" >
                <span className="CurrentCard" >{flashcard.id}</span>
                <TiPin className="Pin" />               
                <button className="AnswerBtn" >Answer</button>
            </div>
      
    </div>
  )
}

export default IndFlashcard
