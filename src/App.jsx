
import { useState, useContext } from 'react'
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
import CreatorCtn from '../components/FlashcardCreator/components/CreatorCtn.jsx';
import { LoginContext } from '../context/LoginContext.jsx';

function App() {
  const { username, setUsername, password, setPassword, role, setRole, registrationStatus, setRegistrationStatus } = useContext(LoginContext);

  return (
      <Router>
        <Navbar />
      <div className="main-page">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/commands" element={<Commands />} />
            <Route path = "/categories" element={<CategoriesCtn />} />
            <Route path = "/flashcards" element={<FlashcardCtn />} />
            <Route path = "/register" element={<Register/>} />
            <Route path = "/login" element={<Login/>} />
            <Route path = "/react-flashcards" element={<ReactCardCtn/>} />
            <Route path = "/node-flashcards" element={<NodeCardCtn/>} />
            <Route path = "/create-flashcard" element={<CreatorCtn/>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App;
