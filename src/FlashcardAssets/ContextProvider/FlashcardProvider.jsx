import { useState } from "react";
import FlashcardContext from "./FlashcardContext.mjs";

const FlashcardContextProvider = ({children}) => {

    const [flashcards, setFlashcards] = useState({});



    return (
        <FlashcardContext.Provider value={{}} >
            {children}
        </FlashcardContext.Provider>
    )
}

export default FlashcardContextProvider;