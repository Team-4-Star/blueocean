import { useContext } from "react";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import './flashcards.css';
import { BsSearch } from "react-icons/bs";
import IndFlashcard from "./IndFlashcard";

const FlashcardCtn = () => {

    const {flashcards} = useContext(FlashcardContext)

    return (
        <div className="FlashcardCtn" >
            {flashcards.map((flashcard) => (
                <IndFlashcard key={flashcard.id} flashcard={flashcard} />
            ))}
        </div>
  )
}

export default FlashcardCtn;

{/* <div className="SearchBar" >
                <input placeholder="Search Flashcards"/>
                <BsSearch className="BsSearch" />
            </div> */}