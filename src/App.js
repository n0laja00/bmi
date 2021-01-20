import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);


    function handleSubmit(e) {
      e.preventDefault();
      const conversion = weight / (height*height);
      setBMI(conversion.toFixed(1));
    };
  
  return (
    <div>
      <h3>Currency calculator</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>height</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)}></input>
        </div>
        <div>
          <label>BMI </label>
          <output>{bmi}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
};

export default App;
