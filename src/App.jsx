
import { useState } from 'react'
import './App.css'
import FlashcardCtn from './FlashcardAssets/Components/FlashcardCtn.jsx'
import Commands from '../components/Commands.jsx'
import Navbar from '../components/Navbar'

function App() {

  return (
    <div className="main-page">
      <Navbar />
      <div className="page-content">
          <Commands />
          <FlashcardCtn/>
      </div>
    </div>
  )
}

export default App;
