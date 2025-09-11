import { useState } from 'react';
import './App.css';

import Card from '../src/components/Card';

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card
        title="Counter Card"
        body={`You have clicked the button ${count} times.`}
        buttonText="Increment"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
