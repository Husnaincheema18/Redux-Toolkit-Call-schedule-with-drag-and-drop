import React from 'react';

const Heading = ({heading, description}) => {
    return (
      <div className="pt-2">
        <h1 className="font-trebuchet text-slate-800 text-bold text-2xl pt-1 pl-3">{heading}</h1>
        <p className="font-trebuchet text-green-600 pt-1 pl-3">{description}</p>
      </div>
    )
  }

  export default Heading;