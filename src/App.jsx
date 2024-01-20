
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Commands from '../components/Commands/Commands.jsx'
import Navbar from '../components/Navbar'
import Home from '../components/Home.jsx'
// import FlashcardCtn from '../components/Flashcards/Components/FlashcardCtn.jsx';
import CategoriesCtn from '../components/Flashcards/Components/CategoriesCtn.jsx';

function App() {

  return (
    <Router>
    <div className="main-page">
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/commands" element={<Commands />} />
          <Route path = "/flashcards" element={<CategoriesCtn />} />
        </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App;
