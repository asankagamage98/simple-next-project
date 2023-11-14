"use client"

import React, { useState } from 'react';


function CalculatorMy() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };
  return (
    <div className="bg-red-500 p-4 rounded-md">
      <div>
        <input
          type="text"
          value={input}
          placeholder="Enter expression"
          readOnly
          className="w-full p-2 mb-2 bg-white text-black rounded-md"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[7, 8, 9, '/'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value.toString())}
            className="bg-black text-white p-2 rounded-md"
          >
            {value}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {[4, 5, 6, '*'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value.toString())}
            className="bg-black text-white p-2 rounded-md"
          >
            {value}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {[1, 2, 3, '-'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value.toString())}
            className="bg-black text-white p-2 rounded-md"
          >
            {value}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {[0, '.', '+'].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value.toString())}
            className="bg-black text-white p-2 rounded-md"
          >
            {value}
          </button>
        ))}
      </div>
      <div className="mt-2">
        <button
          onClick={handleCalculate}
          className="bg-black text-white p-2 rounded-md"
        >
          =
        </button>
      </div>
      <div className="mt-2">
        <button
          onClick={handleClear}
          className="bg-black text-white p-2 rounded-md"
        >
          Clear
        </button>
      </div>
      <div className="mt-2">
        <p className="text-white">Result: {result}</p>
      </div>
    </div>
  )
}

export default CalculatorMy