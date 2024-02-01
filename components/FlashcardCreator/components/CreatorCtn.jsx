import './creator.css'
import { useContext } from 'react'
import CreatorContext from '../ContextProvider/CreatorContext.mjs'

const CreatorCtn = () => {
  const {
    categoryID,
    question,
    answer,
    categoryIDChange,
    questionChange,
    answerChange,
    submit
  } = useContext(CreatorContext)

  return (
    <div className='creator-ctn' >
      <div className='creator-top' >
        <div className='cat-name creator-category' >
          <h1>Category ID</h1>
          <textarea 
            value={categoryID} 
            onChange={categoryIDChange} 
            className='cat-input'
            placeholder='React = 1, Node = 2'
            />
        </div>

        <div className='front-side creator-category' >
          <h1>Question</h1>
          <textarea 
            value={question} 
            onChange={questionChange} 
            className='cat-input'
            />
        </div>

        <div className='back-side creator-category' >
          <h1>Answer</h1>
          <textarea 
            value={answer} 
            onChange={answerChange} 
            className='cat-input'
            />
        </div>

      </div>
      <button onClick={submit} >SUBMIT</button>
    </div>
  )
}

export default CreatorCtn
