import { useState } from "react";
import usePasswordGenerator from "./hooks/usePasswordGenerator";
import StrengthChecker from "./components/StrengthChecker";

function App() {
  const {password, generatePassword, errorMessage} = usePasswordGenerator()

  const [length, setLength] = useState(4)
  const [isCopy, setIsCopy] = useState(false)
  const [checkboxState, setCheckboxState] = useState([
    {
      title: "Include Uppercase Letters",
      state: false,
    },
    {
      title: "Include Lowercase Letters",
      state: false,
    },
    {
      title: "Include Numbers",
      state: false,
    },
    {
      title: "Include Symbols",
      state: false,
    },
  ]);

  const handleCheckboxData = (index) => {
    const updatedCheckboxData = [...checkboxState];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    setCheckboxState(updatedCheckboxData)
  }

  const handleCopy = () => {
    setIsCopy(true)
    navigator.clipboard.writeText(password);

    setTimeout(() => {
      setIsCopy(false)
    }, 2000)
  }



  return (
    <div className="container">
      {/* Password Text and Copy */}
      {password && <div className="flex justify-between header">
        <div className="title">{password}</div>
        <button onClick={handleCopy}>{isCopy ? 'Copied': 'Copy'}</button>
      </div>}
      {/* Character Length */}
      <div className="character-length">
        <div className="flex justify-between ">
          <p>Character Length </p>
          <p>{length}</p>
        </div>

        <input type="range" min={2} max={20} value={length} onChange={e => setLength(e.target.value)} />
      </div>
      {/* Checkboxes */}
      <div className="checkboxes">
        {checkboxState?.map((checkbox, index) => (
          <div key={index}>
            <label>{checkbox?.title}</label>
            <input type="checkbox" checked={checkbox.state} onChange={(e) => handleCheckboxData(index)} />
          </div>
        ))}
      </div>
      {/* Strength */}

      <StrengthChecker password={password}/>

      {errorMessage && <div className="error">{errorMessage}</div>}
      {/* Generate Button */}
      <button className="btn-generate" onClick={() => generatePassword(checkboxState, length)}>Generate Password</button>
    </div>
  );
}

export default App;
