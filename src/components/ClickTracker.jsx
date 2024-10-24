import { useState } from "react";

export default function ClickTracker() {
  const [clicks, setCliks] = useState(0);
  const [arr, setArr] = useState([1, 2, 3]);
  const [textColor, setTextColor] = useState({ color: "black" });

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const value = getRandomInRange(1, 1000);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const handleClick = () => {
    setCliks(clicks + value);
  };

  const handleClickO = () => {
    setTextColor({ color: getRandomHexColor() });
  };

  const pushValue = () => {
    setArr([...arr, value]);
  };

  return (
    <div>
      <h3>{arr}</h3>
      <button onClick={pushValue}>Add to arr</button>
      <p>
        <button onClick={handleClick}>Random Variable: {clicks}</button>
      </p>

      <button onClick={handleClickO}>Add to arr1</button>
      <p style={textColor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
}
