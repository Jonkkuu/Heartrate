import './App.css';
import { useState } from 'react';

function App() {
const [age, setAge] = useState(0)
const [upper, setUpper] = useState(0)
const [lower, setLower] = useState(0)

function calculate(e){
  e.preventDefault()
  const lower = (220 - age) * 0.65
  const upper = (220 - age) * 0.85
  setLower(lower)
  setUpper(upper)
}

  return (
   <div id="content">
    <h3>Heart rate limits calculator</h3>
    <form onSubmit={calculate}>
      <div>
        <label>Age</label>
        <input value={age} onChange={e => setAge(e.target.value)}/>
      </div>
      <div>
        <label>Heart rate limits</label>
      </div>
      <div>
        <output>{lower} - {upper}</output>
      </div>
      <div>
      </div>
      <button>Calculate</button>
    </form>
   </div>
  );
}

export default App;
