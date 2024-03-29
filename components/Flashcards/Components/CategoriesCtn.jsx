import './categories.css'
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { useContext } from 'react';
import FlashcardContext from '../ContextProvider/FlashcardContext.mjs';

const CategoriesCtn = () => {
  const {progress} = useContext(FlashcardContext)

  return (
    <div className="flashcard-categories-ctn" >
      <div className='progress-ctn' >
        <h1>Progress</h1>
        <h2>{progress}%</h2>
        <ProgressBar/>
      </div>
      
      <div className='category' >
        <h1>ALL</h1>
        <Link to='/flashcards'>
          <IoLogoJavascript className='js-logo logos' />
        </Link>
      </div>

      <div className='category' >
        <h1>REACT</h1>
        <Link to='/react-flashcards'>
          <FaReact className="react-logo logos" />
        </Link>
      </div>

      <div className='category' >
        <h1>NODE</h1>
        <Link to='/node-flashcards'>
          <FaNode className='node-logo logos' />
        </Link>
      </div>

      <div className='category' >
        <h1>CREATE</h1>
        <Link to='/create-flashcard'>
          <IoIosCreate className='create-logo logos'/>
        </Link>
      </div>

    </div>
  )
}

export default CategoriesCtn