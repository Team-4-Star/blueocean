
import Navbar from '../components/Navbar'
import './Home.css'

function Home() {

  return (
      <div className="home-page-content">
        <div className="home-page-header">
          <h1 className="home-page-header-title">Welcome!</h1>
        </div>
        <div>
        </div>
        <ul className="home-page-text">
          <h2 className="home-page-section-header"> Flashcards </h2>
            <li>
            Review React and Node flashcards
            </li>
            <li>
            Edit, Delete, and Create New flashcards
            </li>
          <h2 className="home-page-section-header"> Commands  </h2>
            <li>
            Search through commands
            </li>
            <li>
            Click copy icon to capture command snippet for project
            </li>  
        </ul>
      </div>
  )
}

export default Home;
