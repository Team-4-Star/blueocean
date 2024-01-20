import { useContext, useEffect } from "react";
import FlashcardContext from "../../FlashcardAssets/ContextProvider/FlashcardContext.mjs";
import './categories.css'

const Categories = () => {
    
    const {getCategories} = useContext(FlashcardContext)

    useEffect(() => {
        getCategories();
    }, []);

  return (
    <div className="flashcard-categories-ctn" >
      
    </div>
  )
}

export default Categories
