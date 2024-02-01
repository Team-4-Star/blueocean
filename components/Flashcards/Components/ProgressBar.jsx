import './progressbar.css'
import FlashcardContext from '../ContextProvider/FlashcardContext.mjs'
import { useContext, useEffect, useState } from 'react'

const ProgressBar = () => {

  const [innerHeight, setInnerHeight] = useState(0)

  const {
    progress
  } = useContext(FlashcardContext)

  useEffect(() => {
    setInnerHeight(progress);
  }, [progress])

  const innerStyle = {
    height: `${innerHeight}%`
  }

  return (
    <div className="progress-bar" >
        <div className='progress-bar inner-bar' style={innerStyle} >
        </div>
    </div>
  )
}

export default ProgressBar
