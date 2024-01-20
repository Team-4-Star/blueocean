import './categories.css'
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { Link } from 'react-router-dom';

const ReactCardCtn = () => {
  return (
    <div className="react-card-ctn" >
      <div className='cards-nav' >
        <Link to='/flashcards'>
            <IoLogoJavascript className='searchbar-links javascript-link' />
        </Link>

        <FaNode className='searchbar-links node-link' />
      </div>
    </div>
  )
}

export default ReactCardCtn
