import { useContext, useEffect } from "react";
import FlashcardContext from "../ContextProvider/FlashcardContext.mjs";

const Categories = () => {
    
    const {getCategories} = useContext(FlashcardContext)

    useEffect(() => {
        getCategories();
    }, []);

  return (
    <div className="flashcard-categories" >
      
    </div>
  )
}

export default Categories
