import React from 'react';

interface CardProps {
  card: {
    id: number;
    title: string;
    difficulty: string;
  };
}


function Card({ card }: CardProps) {
  return (
    <div className="kanban-card flex">
        <p>{card.id}</p>
      <p>{card.title}</p>
      <p>{card.difficulty}</p>
    </div>
  );
}

export default Card;
