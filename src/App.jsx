
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Commands from '../components/Commands/Commands.jsx'
import Navbar from '../components/Navbar'
import Home from '../components/Home.jsx'
import FlashcardCtn from '../components/Flashcards/Components/FlashcardCtn.jsx';
import CategoriesCtn from '../components/Flashcards/Components/CategoriesCtn.jsx';
import Register from '../components/Register/Register.jsx'
import Login from '../components/Login/Login.jsx'
import ReactCardCtn from '../components/Flashcards/Components/ReactCardCtn.jsx';
import NodeCardCtn from '../components/Flashcards/Components/NodeCardCtn.jsx';

function App() {

  return (
    <Router>
    <div className="main-page">
      <Navbar />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/commands" element={<Commands />} />
          <Route path = "/categories" element={<CategoriesCtn />} />
          <Route path = "/flashcards" element={<FlashcardCtn />} />
          <Route path = "/register" element={<Register/>} />
          <Route path = "/login" element={<Login/>} />
          <Route path = "/react-flashcards" element={<ReactCardCtn/>} />
          <Route path = "/node-flashcards" element={<NodeCardCtn/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
