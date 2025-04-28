import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res;

    switch (operation) {
      case "add":
        res = n1 + n2;
        break;
      case "subtract":
        res = n1 - n2;
        break;
      case "multiply":
        res = n1 * n2;
        break;
      case "divide":
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by 0";
        break;
      default:
        res = "Invalid operation";
    }

    setResult(res);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>React Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ margin: "0.5rem" }}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ margin: "0.5rem" }}
      />

      <div style={{ margin: "1rem 0" }}>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          style={{ padding: "0.3rem" }}
        >
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (−)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
        </select>
      </div>

      <button onClick={calculate} style={{ padding: "0.5rem 1rem" }}>
        Calculate
      </button>

      {result !== null && (
        <h3 style={{ marginTop: "1rem" }}>Result: {result}</h3>
      )}
    </div>
  );
}

export default App;