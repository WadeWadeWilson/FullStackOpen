import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (setter) => {
    setter((value) => value + 1);
  };

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => handleClick(setGood)} />
      <Button text="neutral" onClick={() => handleClick(setNeutral)} />
      <Button text="bad" onClick={() => handleClick(setBad)} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        total={total}
      />
    </div>
  );
};

export default App;
