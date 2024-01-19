import { useContext, useState, useEffect } from "react";
import { TiPin } from "react-icons/ti";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";

const IndFlashcard = ({flashcard}) => {

  const {
    toggleShowAnswer,
  } = useContext(FlashcardContext)
    
  return (
    <div className="Flashcard" >
        {!flashcard.showAnswer ? <h1 className="Word" >{flashcard.word}</h1> : <p className="Definition" >{flashcard.definition}</p>}
            <div className="FlashcardBtnDiv" >
                <TiPin className="Pin" />               
                <button className="AnswerBtn" onClick={() => toggleShowAnswer(flashcard.id)} >{!flashcard.showAnswer ? 'Answer' : 'Back'}</button>
            </div>
      
    </div>
  )
}

export default IndFlashcard
