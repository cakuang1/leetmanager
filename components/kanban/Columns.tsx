import React from 'react';
import Card from './Card';





interface ColumnProps {
  title: string; // Assuming title is a string (date)

}
function Column({ title}: ColumnProps) {

    return (
      <div className="kanban-column mx-4 w-72 mt-10">
        <h2>{title}</h2>
<div className="add-card-container flex">
    <div className="add-card-left">
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 256 256"><g id="galaAdd0" fill="none" stroke="currentColor" stroke-dasharray="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-opacity="1" stroke-width="16"><circle id="galaAdd1" cx="128" cy="128" r="112"/><path id="galaAdd2" d="M 79.999992,128 H 176.0001"/><path id="galaAdd3" d="m 128.00004,79.99995 v 96.0001"/></g></svg>
    </div>
    <div className="add-card-right">
        Add a Problem
    </div>
    </div>

</div>

    );
  }

export default Column;
