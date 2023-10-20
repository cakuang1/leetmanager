import React from 'react';
import Card from './card';




interface ColumnProps {
  title: string; // Assuming title is a string (date)
  cards: any[]; // You should define a type for your cards

}


function Column({ title, cards}: ColumnProps) {


    return (
      <div className="kanban-column">
        <h2>{title}</h2>

<div className="add-card-container"><div className="add-card-left"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="add-card-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><div className="add-card-text">Add a task</div></div></div>
      </div>
    );
  }

export default Column;
