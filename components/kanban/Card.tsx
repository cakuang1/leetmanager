import React from 'react';
import { UserQuestionDTO } from '../types';
import { useState } from 'react';
import { useKanban } from '../context/Kanbancontext';




const {update} = useKanban();


function Card({ card }: { card: UserQuestionDTO }) {
  function handledelete() {
    deleteQuestion(card.id);
    update()
  }

  
  return (
        <div
          className={`${card.completionStatus ? ' bg-green-50 bg-opacity-60 text-gray-800' : ''} kanban-card flex  justify-between  border rounded-lg mt-2 hover:border-leetcode hover:shadow cursor-pointer flex items-center p-2 cursor-pointer text-sm font-semibold `}
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


async function deleteQuestion(id:number) {
  const endpoint = `/api/userquestions/delete?id=${id}` // Replace with your actual API endpoint
  try {
    const response = await fetch(endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json', // Set the appropriate content type
      },
    }); 
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error Deleting data:', error);
    throw error;
  }
}