import './Navbar.css';
import { Link } from 'react-router-dom';
import Solidify from '..//Assets/SolidifyPNG.png'
const handleButtonClick = (route) => {
  console.log('Working');
};

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link to="/categories" className="navbar-btn navbar-link" onClick={() => handleButtonClick()}>
          Flashcards
        </Link>

        <Link to="/" className="solidify" onClick={() => handleButtonClick()}>
          <img className="solidify-image" src={Solidify} alt="Solidify Image" />
        </Link>
        <Link to="/commands" className="navbar-btn navbar-link" onClick={() => handleButtonClick()}>
          Commands
        </Link>
      </div>
    </>
  );
};

export default Navbar;