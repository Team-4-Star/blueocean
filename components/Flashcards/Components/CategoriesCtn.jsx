import './categories.css'
import { FaReact } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactCardCtn from './ReactCardCtn';

const CategoriesCtn = () => {

  return (
    <div className="flashcard-categories-ctn" >

      <div className='category' >
        <h1>ALL</h1>
        <Link to='/flashcards'>
          <IoLogoJavascript className='js-icon logos' />
        </Link>
      </div>

      <div className='category' >
        <h1>REACT</h1>
        <Link to='/react-flashcards'>
          <FaReact className="react-icon logos" />
        </Link>
      </div>

      <div className='category' >
        <h1>NODE</h1>
        <FaNode className='node-icon logos' />
      </div>

    </div>
  )
}

export default CategoriesCtn