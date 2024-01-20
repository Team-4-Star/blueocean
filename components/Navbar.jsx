import './Navbar.css';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="navbar-btn navbar-link" onClick={() => handleButtonClick}>
          Home
        </Link>
        <Link to="/commands" className="navbar-btn navbar-link" onClick={() => handleButtonClick()}>
          Commands
        </Link>
      </div>
    </>
  );
};

export default Navbar;