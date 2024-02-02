import { useContext, useState, useEffect } from "react";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import { FaRegCheckSquare } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const IndReactCards = ({flashcard}) => {

    const {
        check,
        cross,
        toggleUnlearned,
        toggleLearned,
        toggleShowAnswer,
        setReactFlashcards,
        reactFlashcards
    } = useContext(FlashcardContext)

    

    const cardStyle = {
      color: check ? 'white' : '#424549',
    };

    const XStyle = {
      color: cross ? 'white' : '#424549',
    };


    
  return (
    <div className="flashcard" >
        {!flashcard.showAnswer ? <h1 className="word" >{flashcard.word}</h1> : <p className="definition" >{flashcard.definition}</p>}
        
            <div className="flashcard-btn-div" >   
                <ImCross style={XStyle} className="cross" onClick={() => toggleUnlearned(flashcard.id, reactFlashcards)}/>
                <FaRegCheckSquare style={cardStyle} className="check-square" onClick={() => toggleLearned(flashcard.id, reactFlashcards)}/>             
                <button className="answer-btn" onClick={() => toggleShowAnswer(flashcard.id, setReactFlashcards, reactFlashcards)} >{!flashcard.showAnswer ? 'Answer' : 'Back'}</button>
            </div>
      
    </div>
  )
}

export default IndReactCards
