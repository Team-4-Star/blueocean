import './Navbar.css';

const handleButtonClick = (route) => {
  console.log('Working');
};

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-btn" onClick={() => handleButtonClick()}>
          Flashcards
        </div>
        <div className="navbar-btn" onClick={() => handleButtonClick()}>
          Commands
        </div>
      </div>
    </>
  );
};

export default Navbar;