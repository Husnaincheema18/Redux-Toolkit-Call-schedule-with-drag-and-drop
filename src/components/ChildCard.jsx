import React from 'react';
import { useDrag } from 'react-dnd';

export default function ChildCard({code, label, note}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ticket',
    item: { ticket: { code, label, note } },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div ref={drag} className={`bg-gray-200 h-24 m-2.5 rounded ${isDragging ? 'opacity-50' : ''}`}>
        <div className='flex justify-between p-2'>
            <p className="text-xl font-bold">{label}</p>
            <p className='pt-1 text-slate-400 text-sm'>{code}</p>
        </div>
    
            <p className="text-slate-400 pt-5 pl-2">{note}</p>
    
    </div>
  )
}
