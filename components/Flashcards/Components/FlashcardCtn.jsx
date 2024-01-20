import { useContext } from "react";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import './flashcards.css';
import './categories.css'
import IndFlashcard from "./IndFlashcard";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FlashcardCtn = () => {

    const {flashcards} = useContext(FlashcardContext)

    return (
        <div className="flashcard-ctn" >

            <div className='cards-nav' >
                <Link to='/react-flashcards'>
                    <FaReact className="searchbar-links react-link" />
                </Link>

                <FaNode className='searchbar-links node-icon' />
            </div>

            <div className="card-ctn" >
                {flashcards.map((flashcard) => (
                <IndFlashcard key={flashcard.id} flashcard={flashcard} />
                ))}
            </div>
        </div>
  )
}

export default FlashcardCtn;