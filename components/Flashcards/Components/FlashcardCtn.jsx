import { useContext } from "react";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import './flashcards.css';
import { BsSearch } from "react-icons/bs";
import IndFlashcard from "./IndFlashcard";
import Categories from "../../CategoriesAssets/Components/Categories";

const FlashcardCtn = () => {

    const {flashcards, categories} = useContext(FlashcardContext)

    return (
        <div className="flashcard-ctn" >
            
            {categories.map((category) => (
            <Categories key={category.id} category={category}/>
            ))}

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