import { useContext } from "react";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import './flashcards.css';
import { TiPin } from "react-icons/ti";
import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

const FlashcardCtn = () => {

    return (
        <div className="FlashcardCtn" >
            <div className="SearchBar" >
                <input placeholder="Search Flashcards"/>
                <BsSearch className="BsSearch" />
            </div>
            <div className="Flashcard" >
                <h1>Question</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur illo doloremque eligendi in eveniet dolorem architecto ipsum quis, facere libero ratione? Optio quia totam sint adipisci error, dolorem repudiandae!</p>
                <div>
                    <div className="FlashcardBtnDiv" >
                        <BiSolidLeftArrowSquare className="Arrow" />
                        <TiPin className="Pin" />
                    </div>

                    <div className="FlashcardBtnDiv" >
                        <button className="AnswerBtn" >Answer</button>
                        <BiSolidRightArrowSquare className="Arrow" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FlashcardCtn;
