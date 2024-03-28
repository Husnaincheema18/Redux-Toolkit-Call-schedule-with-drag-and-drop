import React from 'react';
import { useDispatch } from 'react-redux';
import ParentCard from './ParentCard';
import { getTicketTotal } from '../utilities/getTicketTotal';

export default function ParentContainer({ dataArray, setEmployeeData }) {
  const dispatch = useDispatch();
  const totalTickets = getTicketTotal(dataArray);
  const handleDrop = (ticket, employeeLabel) => {
    dispatch((dispatch) => {
      const updatedData = dataArray.map((employee) => {
        if (employee.employee.label === employeeLabel) {
          return {
            ...employee,
            tickets: [...employee.tickets, ticket],
          };
        } else {
          return {
            ...employee,
            tickets: employee.tickets.filter((t) => t.code !== ticket.code),
          };
        }
      });
      return dispatch({ type: 'SET_EMPLOYEE_DATA', payload: updatedData });
    });
  };
  return (
    <div className="grid grid-cols-4 gap-3 min-h-screen pt-9">
      {dataArray && dataArray.length > 0 ? (
        dataArray.map((employeeData) => (
          <ParentCard
            label={employeeData.employee.label}
            tickets={employeeData.tickets}
            totalTickets={totalTickets}
            key={employeeData.employee.label}
            onDrop={(ticket) => handleDrop(ticket, employeeData.employee.label)}
          />
        ))
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}