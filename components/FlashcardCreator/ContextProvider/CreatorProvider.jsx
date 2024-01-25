import { useState } from "react"
import CreatorContext from "./CreatorContext.mjs"

const CreatorProvider = ({children}) => {
  

    return (
        <CreatorContext.Provider value={{}}>
            {children}
        </CreatorContext.Provider>
    )
}

export default CreatorProvider
