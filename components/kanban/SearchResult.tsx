import React from 'react';
import {LeetCodeQuestionDTO } from '@/components/types';


interface SearchResultProps {
  card: LeetCodeQuestionDTO;
  onClick: () => void; // onClick callback
}


function SearchResult({ card, onClick }: SearchResultProps) {
  return (
    <li
      key={card.qid}
      onClick={onClick} // Attach the onClick handler to the <li> element
      className="border rounded-lg hover:border-leetcode hover:shadow cursor-pointer flex items-center p-2 cursor-pointer text-sm font-semibold bg-white"
    >
      <p>{card.qid}.&nbsp;</p>
      <p>{card.title}&nbsp;</p>
      <p
        className={`${getColorClasses(card.difficulty)} px-2 inline-flex text-xs leading-5 font-semibold rounded-full overflow-hidden`}
      >
        {card.difficulty}
      </p>
    </li>
  );
}





export default SearchResult;


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






