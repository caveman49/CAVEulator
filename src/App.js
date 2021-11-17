import Heading from "./components/Heading";
import "./App.css";
import { useState } from "react";
// import Button from "./components/Button";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const operators = ["+", "-", "*", "/", "."];
  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    )
      return;

    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult((calc + value).toString());
    }
  };

  // function add() {
  //   setCalc(calc + value);
  // }

  const calculate = (value) => {
    setCalc((calc + value).toString());
  };

  const clear = () => {
    setCalc("")
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <Heading />
          {/* {result ? <span>({result})</span> : ""} */}
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={clear}>CLEAR</button>

          <div className="digits">
            <button onClick={() => updateCalc("1")}>1</button>
            <button onClick={() => updateCalc("2")}>2</button>
            <button onClick={() => updateCalc("3")}>3</button>
            <button onClick={() => updateCalc("4")}>4</button>
            <button onClick={() => updateCalc("5")}>5</button>
            <button onClick={() => updateCalc("6")}>6</button>
            <button onClick={() => updateCalc("7")}>7</button>
            <button onClick={() => updateCalc("8")}>8</button>
            <button onClick={() => updateCalc("9")}>9</button>
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
