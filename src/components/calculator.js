import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import {appendDigit, setOperator, calculateResult, clearDisplay} from '../redux/calculatorSlice';

const Calculator = () => {
  const dispatch = useDispatch();
  const { displayValue } = useSelector((state) => state.calculator);

  const handleDigitClick = (digit) => {
    dispatch(appendDigit(digit));
  };

  const handleOperatorClick = (operator) => {
    dispatch(setOperator(operator));
  };

  const handleEqualClick = () => {
    dispatch(calculateResult());
  };

  const handleClearClick = () => {
    dispatch(clearDisplay());
  };

  return (
    <div className='container w-25'>
      <h1>Calculator</h1>
      <div>
        <input type="text" value={displayValue} readOnly />
      </div>
      <div className='btn-space'>
        <button className='btn w-25' onClick={() => handleDigitClick('1')}>1</button>
        <button className='btn w-25' onClick={() => handleDigitClick('2')}>2</button>
        <button className='btn w-25' onClick={() => handleDigitClick('3')}>3</button>
      <button className='btn btn-danger w-25' onClick={handleClearClick}>C</button>
      </div>
      <div className='btn-space'>
        <button className='btn w-25' onClick={() => handleDigitClick('4')}>4</button>
        <button className='btn w-25' onClick={() => handleDigitClick('5')}>5</button>
        <button className='btn w-25' onClick={() => handleDigitClick('6')}>6</button>
      <button className='btn w-25' onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div className='btn-space'>
        <button className='btn w-25' onClick={() => handleDigitClick('7')}>7</button>
        <button className='btn w-25' onClick={() => handleDigitClick('8')}>8</button>
        <button className='btn w-25' onClick={() => handleDigitClick('9')}>9</button>
      <button className='btn w-25' onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div className='btn-space'>
        
      <button className='btn btn-success w-25' onClick={handleEqualClick}>=</button>
      <button className='btn w-25' onClick={() => handleDigitClick('0')}>0</button>
      <button className='btn w-25' onClick={() => handleOperatorClick('*')}>*</button>
      <button className='btn w-25' onClick={() => handleOperatorClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;

