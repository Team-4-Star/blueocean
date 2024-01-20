import { useContext, useEffect } from "react";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";
import './categories.css'

const CategoriesCtn = () => {
    
    const {getCategories, categories} = useContext(FlashcardContext)

    useEffect(() => {
        getCategories();
    }, []);

  return (
    <div className="flashcard-categories-ctn" >
      
    </div>
  )
}

export default Categories

// {categories.map((category) => (
//   <Categories key={category.id} category={category}/>
//   ))}