import React, { useState } from 'react';
import './styles/App.css';
import IngredientList from './components/IngredientList.tsx';

const App: React.FC = () => {
  const [days, setDays] = useState<number>(7);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDays(Number(event.target.value));
  };

  return (
    <div className="App">
      <h1>Food Calculator</h1>
      <label htmlFor="days">Days</label>
      <input
        id="days"
        type="number"
        value={days}
        onChange={handleInputChange}
        placeholder="Enter number of days"
      />
      <IngredientList days={days} />
    </div>
  );
};

export default App;