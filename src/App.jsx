
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Commands from '../components/Commands/Commands.jsx'
import Navbar from '../components/Navbar'
import Home from '../components/Home.jsx'
import FlashcardCtn from '../components/Flashcards/Components/FlashcardCtn.jsx';
import CategoriesCtn from '../components/Flashcards/Components/CategoriesCtn.jsx';
import ReactCardCtn from '../components/Flashcards/Components/ReactCardCtn.jsx';
import NodeCardCtn from '../components/Flashcards/Components/NodeCardCtn.jsx';
import CreatorCtn from '../components/FlashcardCreator/components/CreatorCtn.jsx';

function App() {

  return (
    <Router>
    <div className="main-page">
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/commands" element={<Commands />} />
          <Route path = "/categories" element={<CategoriesCtn />} />
          <Route path = "/flashcards" element={<FlashcardCtn />} />
          <Route path = "/react-flashcards" element={<ReactCardCtn/>} />
          <Route path = "/node-flashcards" element={<NodeCardCtn/>} />
          <Route path = "/create-flashcard" element={<CreatorCtn/>} />
        </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App;
