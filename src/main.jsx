import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FlashcardContextProvider from '../components/Flashcards/ContextProvider/FlashcardProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FlashcardContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FlashcardContextProvider>
);
