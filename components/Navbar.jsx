import './Navbar.css';
import { Link } from 'react-router-dom';

const handleButtonClick = (route) => {
  console.log('Working');
};

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link to="/flashcards" className="navbar-btn" onClick={() => handleButtonClick()}>
          Flashcards
        </Link>
        <Link to="/commands" className="navbar-btn" onClick={() => handleButtonClick()}>
          Commands
        </Link>
      </div>
    </>
  );
};

export default Navbar;