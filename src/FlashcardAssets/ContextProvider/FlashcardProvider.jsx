import { useState } from "react";
import FlashcardContext from "./FlashcardContext.mjs";

const FlashcardContextProvider = ({children}) => {
    
    return (
        <FlashcardContextProvider>
            {children}
        </FlashcardContextProvider>
    )
}

export default FlashcardContextProvider;