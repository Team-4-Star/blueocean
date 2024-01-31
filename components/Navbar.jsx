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
        <Link to="/" className="solidify" onClick={() => handleButtonClick()}>
          <img className="solidify-image" src={Solidify} alt="Solidify Image" />
        </Link>
        <div className="btns-container">
          <div className="components-btns-container">
            <Link to="/categories" className="component-btn navbar-link" onClick={() => handleButtonClick()}>
              Flashcards
            </Link>
            <Link to="/commands" className="component-btn navbar-link" onClick={() => handleButtonClick()}>
              Commands
            </Link>
          </div> 
          <div className="login-register-container">
          <Link to="/login" className="login-register-btn navbar-link" onClick={() => handleButtonClick()}>
            Login
          </Link>
          <Link to="/register" className="login-register-btn navbar-link" onClick={() => handleButtonClick()}>
            Register
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;