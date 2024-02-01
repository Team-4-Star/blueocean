import './categories.css'
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import IndReactCards from './IndReactCards';
import { useEffect } from 'react';

const ReactCardCtn = () => {

  const {reactFlashcards,  
         getReactCards 
        } = useContext(FlashcardContext);

    useEffect(() => {
      getReactCards();
   }, []);

  return (
    <div className="react-card-ctn" >
      <div className='cards-nav' >
        <Link to='/flashcards'>
            <IoLogoJavascript className='searchbar-links javascript-link' />
        </Link>

        <Link to='/node-flashcards'>
          <FaNode className='searchbar-links node-link' />
        </Link>
      </div>

      <div className="card-ctn" >
        {reactFlashcards.map((flashcard) => (
          <IndReactCards key={flashcard.id} flashcard={flashcard} />
        ))}      
      </div>
      
    </div>
  )
}

export default ReactCardCtn
