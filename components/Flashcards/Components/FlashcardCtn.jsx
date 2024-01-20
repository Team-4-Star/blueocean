import { useContext } from "react";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import './flashcards.css';
import { BsSearch } from "react-icons/bs";
import IndFlashcard from "./IndFlashcard";

const FlashcardCtn = () => {

    const {flashcards} = useContext(FlashcardContext)

    return (
        <div className="flashcard-ctn" >

            {flashcards.map((flashcard) => (
                <IndFlashcard key={flashcard.id} flashcard={flashcard} />
            ))}
        </div>
  )
}

export default FlashcardCtn;