import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('0'); // Use string to store the result for easier handling
  const [currentValue, setCurrentValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);

  const handleNumberClick = (number) => {
    if (currentValue === '0' || isOperatorClicked) {
      setCurrentValue(number.toString());
      setIsOperatorClicked(false);
    } else {
      setCurrentValue((prevValue) => prevValue + number);
    }
  };

  const handleOperatorClick = (selectedOperator) => {
    if (operator) {
      calculateResult();
    } else {
      setResult(currentValue);
    }
    setOperator(selectedOperator);
    setIsOperatorClicked(true);
  };

  const calculateResult = () => {
    const num1 = parseFloat(result);
    const num2 = parseFloat(currentValue);

    switch (operator) {
      case '+':
        setResult((num1 + num2).toString());
        break;
      case '-':
        setResult((num1 - num2).toString());
        break;
      case '*':
        setResult((num1 * num2).toString());
        break;
      case '/':
        setResult((num1 / num2).toString());
        break;
      default:
        break;
    }
    setCurrentValue('0');
  };

  const handleEqualClick = () => {
    calculateResult();
    setOperator(null);
  };

  const handleClearClick = () => {
    setResult('0');
    setCurrentValue('0');
    setOperator(null);
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <div>
        <input type="text" value={currentValue} readOnly />
      </div>
      <div>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;


