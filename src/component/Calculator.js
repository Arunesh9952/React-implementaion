import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const performOperation = (operation) => {
    const value = parseFloat(input);
    if (isNaN(value)) return;

    switch (operation) {
      case "add":
        setResult(result + value);
        break;
      case "subtract":
        setResult(result - value);
        break;
      case "multiply":
        setResult(result * value);
        break;
      case "divide":
        if (value !== 0) setResult(result / value);
        break;
      default:
        break;
    }
    setInput("");
  };

  const resetInput = () => setInput("");
  const resetResult = () => setResult(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Simplest Working Calculator</h1>
      <h2>{result}</h2>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter number"
      />
      <br /><br />
      <button onClick={() => performOperation("add")}>add</button>
      <button onClick={() => performOperation("subtract")}>subtract</button>
      <button onClick={() => performOperation("multiply")}>multiply</button>
      <button onClick={() => performOperation("divide")}>divide</button>
      <br /><br />
      <button onClick={resetInput} style={{ backgroundColor: "#f44", color: "white" }}>reset input</button>
      <button onClick={resetResult} style={{ backgroundColor: "#f44", color: "white", marginLeft: "10px" }}>reset result</button>
    </div>
  );
};

export default Calculator;
