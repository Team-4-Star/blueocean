import { useContext, useState, useEffect } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import { ImCross } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const IndNodeCards = ({flashcard}) => {

  const {
    deleteCard,
    toggleLearned,
    toggleUnlearned,
    toggleShowAnswer,
    nodeFlashcards,
    setNodeFlashcards
  } = useContext(FlashcardContext)
    
  return (
    <div className="flashcard" >
        {!flashcard.showAnswer ? <h1 className="word" >{flashcard.word}<FaTrash onClick={() => deleteCard(flashcard.id)} className="trash"/></h1> : <p className="definition" >{flashcard.definition}</p>}

            <div className="flashcard-btn-div" >
                <ImCross className="cross" onClick={() => toggleUnlearned(flashcard.id, nodeFlashcards)}/>   
                <FaRegCheckSquare className="check-square" onClick={() => toggleLearned(flashcard.id, nodeFlashcards)}/>  
                {/* <FaEdit className="edit" />          */}
                <button className="answer-btn" onClick={() => toggleShowAnswer(flashcard.id, setNodeFlashcards, nodeFlashcards)} >{!flashcard.showAnswer ? 'Answer' : 'Back'}</button>
            </div>
      
    </div>
  )
}

export default IndNodeCards