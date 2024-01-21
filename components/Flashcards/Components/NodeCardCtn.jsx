import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NodeCardCtn = () => {
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
      
    </div>
  )
}

export default NodeCardCtn
