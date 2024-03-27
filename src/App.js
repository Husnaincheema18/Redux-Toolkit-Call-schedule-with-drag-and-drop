import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Heading from './components/Heading.jsx';
import { dataObject } from './data.js';
import ParentContainer from './components/ParentContainer.jsx';

export default function App() {
  const [employeeData, setEmployeeData] = useState(dataObject)
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="min-h-screen bg-gray-200">
      <Heading heading="Call Schedule" description="Schedule all calls here by drag and drop" />
      <div className="pr-2 pl-2">
        <ParentContainer dataArray={employeeData} setEmployeeData={setEmployeeData}/>
      </div>
    </div>
    </DndProvider>
  );
}
