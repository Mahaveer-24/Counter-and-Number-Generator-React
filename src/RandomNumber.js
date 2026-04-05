import { useState } from "react";

function RandomNumber() {
  const [lowerLimit, setLowerLimit] = useState(1);
  const handleLowerLimit = (e) => {
    setLowerLimit(Number(e.target.value));
  };

  const [upperLimit, setUpperLimit] = useState(100);
  const handleUpperLimit = (e) => {
    setUpperLimit(Number(e.target.value));
  };

  const [randomNum, setRandomNum] = useState("Your Number");

  const generateRandomNum = () => {
    setRandomNum(
      Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit),
    );
  };

  return (
    <div className="container">
      <h1 className="header">Generate A<br/>Random Number</h1>
      <h1 className="randomNum">{randomNum}</h1>
      <p className="label-text">Enter your Lower Limit:</p>
      <input
        className="input"
        value={lowerLimit}
        onChange={handleLowerLimit}
        type="number"
      />
      <p className="label-text">Enter your Upper Limit:</p>
      <input
        className="input"
        value={upperLimit}
        onChange={handleUpperLimit}
        type="number"
      />
      <br />

      <button className="buttons" onClick={generateRandomNum}>Generate</button>
    </div>
  );
}

export default RandomNumber;