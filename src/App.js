import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Heading from './components/Heading.jsx';
import ParentContainer from './components/ParentContainer.jsx';
import { dataObject } from './data.js';

export default function App() {
  const employeeData = useSelector((state) => state.employee.employeeData);
  const dispatch = useDispatch();

  const setEmployeeData = (data) => {
    dispatch({ type: 'SET_EMPLOYEE_DATA', payload: data });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-200">
        <Heading heading="Call Schedule" description="Schedule all calls here by drag and drop" />
        <div className="pr-2 pl-2">
          <ParentContainer dataArray={employeeData || dataObject} setEmployeeData={setEmployeeData} />
        </div>
      </div>
    </DndProvider>
  );
}