import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import IndNodeCards from './IndNodeCards';
import { useEffect } from "react";

const NodeCardCtn = () => {

  const { nodeFlashcards, 
          getCardsByCategory, 
          setNodeFlashcards
        } = useContext(FlashcardContext);

    useEffect(() => {
      getCardsByCategory(2, setNodeFlashcards, nodeFlashcards);
  }, []);

  return (
    <div className="node-card-ctn" >

      <div className='cards-nav' >
        <Link to='/flashcards'>
          <IoLogoJavascript className='searchbar-links javascript-link' />
        </Link>

        <Link to='/react-flashcards'>
          <FaReact className="searchbar-links react-link" />
        </Link>    
      </div>

      <div className="card-ctn" >
        {nodeFlashcards.map((flashcard) => (
          <IndNodeCards key={flashcard.id} flashcard={flashcard} />
        ))}      
      </div>
      
    </div>
  )
}

export default NodeCardCtn
