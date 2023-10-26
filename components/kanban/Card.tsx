import React from 'react';
import { UserQuestionDTO } from '../types';
import { useState } from 'react';






function Card({ card }: { card: UserQuestionDTO }) {
  const [carddata,setCarddata] = useState(card)
  console.log(card)
  return (
        <div
          className="kanban-card flex  justify-between  border rounded-lg mt-2 hover:border-leetcode hover:shadow cursor-pointer flex items-center p-2 cursor-pointer text-sm font-semibold bg-white"
        ><div className='flex'>          <p>{card.id}.&nbsp;</p>
              <p>{card.title} &nbsp;</p>
        
        </div>
          <p className={`${getColorClasses(card.difficulty)} px-2  text-xs font-semibold rounded-full `}>
            {card.difficulty}
          </p>
        </div>
  );
}


export default Card;


function getColorClasses(difficulty : String) {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Hard':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return ''; 
  }
}