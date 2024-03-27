import React from "react";
import { useDrop } from 'react-dnd';
import ChildCard from "./ChildCard";

export default function ParentCard ({label, tickets, totalTickets, onDrop}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ticket',
    drop: (item) => onDrop(item.ticket),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
    return (
      <div  ref={drop}
      className={`bg-white min-h-screen rounded-xl font-trebuchet mb-4 shadow-lg shadow-gray-500/50 ${
        isOver ? 'bg-green-100' : ''
      }`}>
           <div className="flex flex-row justify-between">
             <p className="text-slate-800 text-bold pt-2 pl-4">{label}</p>
             <p className="text-slate-400 pt-2 pr-6">{`${tickets.length}/${totalTickets}`}</p>
            </div>
            <div className="p-1 m-1">
               {tickets && tickets.length > 0 ? tickets.map(ticketData => {
                return <ChildCard code={ticketData.code} label={ticketData.label} note={ticketData.note} key={ticketData.code} />
               }) : <div>No Tickets</div>}
               </div>
           </div>    
         )
   }
