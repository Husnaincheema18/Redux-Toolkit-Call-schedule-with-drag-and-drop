import React from 'react'
import ParentCard from './ParentCard';
import { getTicketTotal } from '../utilities/getTicketTotal';

export default function ParentContainer({dataArray, setEmployeeData}) {
  const totalTickets = getTicketTotal(dataArray);
  console.log("dataArray",dataArray);
  const handleDrop = (ticket, employeeLabel) => {
    setEmployeeData((prevData) => {
      const updatedData = prevData.map((employee) => {
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
      return updatedData;
    });
  };
  return (
    <div className="grid grid-cols-4 gap-3 min-h-screen pt-9">
        {dataArray && dataArray.length > 0 ? dataArray.map((employeeData) => {
            return <ParentCard 
                      label={employeeData.employee.label}
                      tickets={employeeData.tickets}
                      totalTickets={totalTickets}
                      key={employeeData.employee.label}
                      onDrop={(ticket) => handleDrop(ticket, employeeData.employee.label)}
                    />
        }) : <div>No Data</div>}
    </div>
  )
}
