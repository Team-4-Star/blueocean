import { useContext, useState, useEffect } from "react";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import { FaRegCheckSquare } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const IndReactCards = ({flashcard}) => {

    const {
        deleteCard,
        toggleUnlearned,
        toggleLearned,
        toggleShowAnswer,
        setReactFlashcards,
        reactFlashcards
    } = useContext(FlashcardContext)
    
  return (
    <div className="flashcard" >
        {!flashcard.showAnswer ? <h1 className="word" >{flashcard.word} <FaTrash onClick={() => deleteCard(flashcard.id)} className="trash"/></h1> : <p className="definition" >{flashcard.definition}</p>}
        
            <div className="flashcard-btn-div" >   
                <ImCross className="cross" onClick={() => toggleUnlearned(flashcard.id, reactFlashcards)}/>
                <FaRegCheckSquare className="check-square" onClick={() => toggleLearned(flashcard.id, reactFlashcards)}/>  
                <FaEdit className="edit" />           
                <button className="answer-btn" onClick={() => toggleShowAnswer(flashcard.id, setReactFlashcards, reactFlashcards)} >{!flashcard.showAnswer ? 'Answer' : 'Back'}</button>
            </div>
      
    </div>
  )
}

export default IndReactCards
