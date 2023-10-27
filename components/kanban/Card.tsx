import React from 'react';
import { UserQuestionDTO } from '../types';
import { useState } from 'react';
import { useModal } from '../context/Modalcontext';
import Modal from '../Modal';


function Card({ card }: { card: UserQuestionDTO }) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleEditClick = () => {
    // Open the modal and pass the card data for editing
    openModal(card);
  };
  return (
    <div className="" onClick={handleEditClick}>
      <div
        className={`${
          card.completionStatus ? 'bg-opacity-30 text-opacity-30 bg-green-100' : ''
        }  kanban-card flex justify-between rounded-lg text-gray-500 mt-2 border hover:border-leetcode hover:shadow cursor-pointer flex items-center p-2 cursor-pointer text-sm font-semibold`}
      >
        <div className="flex">
          <p>{card.questionId}.&nbsp;</p>
          <p>{card.title} &nbsp;</p>
        </div>
        <p className={`${getColorClasses(card.difficulty)} px-2 text-xs font-semibold rounded-full `}>
          {card.difficulty}
        </p>
      </div>

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