import { configureStore } from '@reduxjs/toolkit';
import { dataObject } from './data.js';
import { thunk } from 'redux-thunk';

const initialState = {
    employeeData: dataObject,
  };
  
  const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMPLOYEE_DATA':
        return {
          ...state,
          employeeData: action.payload,
        };
      default:
        return state;
    }
  };
  
  const store = configureStore({
    reducer: {
      employee: employeeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });
  
  export default store;