import { useState } from 'react'

function App() {

  const [checkboxState, setCheckboxState] = useState([
    {
      title:'Include Uppercase Letters', state:false
    },
    {
      title:'Include Lowercase Letters', state:false
    },
    {
      title:'Include Numbers Letters', state:false
    },
    {
      title:'Include Symbols', state:false
    }
])
  return (
     <div className='container'>
      {/* Password Text and Copy */}
      <div className='flex justify-between header'>
        <div className='title'>398iokfwqa;lm@</div>
        <button onClick={() => {}}>Copy</button>
      </div>
      {/* Character Length */}
      <div className='character-length'>
        <div className='flex justify-between '>
        <p>Character Length </p>
        <p>8</p>
        </div>

        <input type='range' min={3} max={20}/>
      </div>
      {/* Checkboxes */}
      <div className='checkboxes'>
      {checkboxState?.map((checkbox, index) => (
        <div key={index}>
          <label>{checkbox?.title}</label>
        <input type='checkbox' checked={checkbox.state} />
        </div>
      ))}
      </div>
      {/* Strength */}
      <div className='flex justify-between color-white'>
        <p>Strength:</p>
        <p>Medium</p>
      </div>
      {/* Generate Button */}
      <button className='btn-generate'>Generate Password</button>
    </div>
  )
}

export default App
