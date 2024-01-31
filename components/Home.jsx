
import Navbar from '../components/Navbar'
import './Home.css'

function Home() {

  return (
      <div className="home-page-content">
        <h1 className="home-page-header">Welcome</h1>
        <ul className="home-page-text">

          <h2 className="home-page-section-header"> Flashcards </h2>
            <li>
            Review React and Node flashcards
            </li>
            <li>
            Create new flashcards
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
