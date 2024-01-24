import './categories.css'
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const CategoriesCtn = () => {

  return (
    <div className="flashcard-categories-ctn" >
      <ProgressBar/>

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

    </div>
  )
}

export default CategoriesCtn