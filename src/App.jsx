
import { useState } from 'react'
import './App.css'
import FlashcardCtn from '../components/Flashcards/Components/FlashcardCtn.jsx'
import Commands from '../components/Commands/Commands.jsx'

function App() {

  return (
    <div className="main-page">
    <Commands />
    <FlashcardCtn/>
    </div>
  )
}

export default App;
