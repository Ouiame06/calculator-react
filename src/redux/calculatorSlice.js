import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    displayValue: '0',
    operator: null,
    previousValue: null,
  },
  reducers: {
    appendDigit: (state, action) => {
      state.displayValue =
        state.displayValue === '0' ? action.payload : state.displayValue + action.payload;
    },
    setOperator: (state, action) => {
      state.operator = action.payload;
      state.previousValue = state.displayValue;
      state.displayValue = '0';
    },
    calculateResult: (state) => {
      const currentValue = parseFloat(state.displayValue);
      const previousValue = parseFloat(state.previousValue);

      switch (state.operator) {
        case '+':
          state.displayValue = (previousValue + currentValue).toString();
          break;
        case '-':
          state.displayValue = (previousValue - currentValue).toString();
          break;
        case '/':
          state.displayValue = (previousValue / currentValue).toString();
          break;
        case '*':
          state.displayValue = (previousValue * currentValue).toString();
          break;
        default:
          break;
      }
      state.operator = null;
      state.previousValue = null;
    },
    clearDisplay: (state) => {
      state.displayValue = '0';
      state.operator = null;
      state.previousValue = null;
    },
  },
});

export const {appendDigit, setOperator, calculateResult, clearDisplay} = calculatorSlice.actions;
export default calculatorSlice.reducer;

