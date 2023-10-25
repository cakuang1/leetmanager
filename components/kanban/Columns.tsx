import React, { ChangeEvent } from 'react';
import Card from './Card';
import { useState ,useEffect,useRef} from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { parseISO, format, getDay } from 'date-fns';
import { LeetCodeQuestionDTO,UserQuestionDTO } from '../types';
import SearchResult from './SearchResult';
interface SearchProps {
    onClickOutside: () => void;
    date : string
  }
  interface CardProps {
    card: {
      id: number;
      name: string;
      difficulty: string;
    };
    index: number;
  }


interface ColumnProps {
    id: string;
    cards: CardProps[];
  }

function Search({ onClickOutside,date}: SearchProps) {
    const searchRef = useRef<HTMLDivElement | null>(null);
    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState<LeetCodeQuestionDTO[]>([]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
          onClickOutside();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClickOutside]);

    const handleSearchResultClick = (card: LeetCodeQuestionDTO,date:string) => {
      postLeetCodeQuestion(card,date);

    };
  
    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newQuery = event.target.value;
      setQuery(newQuery);
      // Call the API to search based on the new query
      searchApi(newQuery).then((results) => {
        setQueryResults(results);
      });
    };
    return (
        <div ref={searchRef}>
      <div  className=" border rounded p-2 text-sm hover:border-leetcode  hover:shadow cursor-pointer flex items-center p-2 cursor-pointer bg-white">
        <div className="add-card-left text-gray-400 pr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"/></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"/></path></g></svg>
        </div>
        <input autoComplete="off" type="email" name="email" id="email" placeholder="Search for problem to add " className="focus:outline-none form-input bg-white add-card-right text-gray-400 w-full"  onChange={handleQueryChange}/>
      </div>
      <ul>
        {queryResults.map((question) => (
          <SearchResult
          key={question.qid}
          card={question}
          onClick={() => handleSearchResultClick(question,date)}
        />
        ))}
      </ul>
      </div>
    );  
  }



  

function Column({ id, cards }: ColumnProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [currcards, setCardSection] = useState<UserQuestionDTO[]>([]);
     const handleEditClick = () => {
        setIsEditing(true);
      };
      const handleEditOff = () => {
        setIsEditing(false);
      };
    const isCurrent = isCurrentDate(id)
    const bgClass = isCurrent ? "bg-orange-50" : "";
    return (
<div className={`kanban-column w-1/5 px-2 mx-2 pt-4 flex-shrink-0 rounded ${bgClass}` }>
    <span className="font-bold text-xl">{getDateInfoFromISODate(id).month} </span>
        <span className="font-bold text-xl">{getDateInfoFromISODate(id).day} </span>
        <span className="font-bold text-leetcode">{getDateInfoFromISODate(id).dayOfWeek}</span>
    {isEditing ? <Search onClickOutside={handleEditOff} date = {id}/> : <div className=" border rounded-xl  hover:border-leetcode  hover:shadow cursor-pointer flex items-center  p-2 text-sm bg-white cursor-pointer " onClick={handleEditClick}>
    <div className="add-card-left text-gray-400  pr-2 ">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><rect width="36" height="36" x="6" y="6" rx="3"/><path stroke-linecap="round" d="M24 16v16m-8-8h16"/></g></svg> 
    </div>
    <div className="add-card-right text-gray-400" >
        Add a Problem
    </div>
    </div>}
    <div>

    </div>
</div>
    );
  }
export default Column;



// HELPER FUNCTIONS ignore



function getDateInfoFromISODate(dateString:string) {

  const dateObject = parseISO(dateString); // Parse the ISO date string
  const dayOfWeek = format(dateObject, 'EEEE'); // Get the day of the week
  const month = format(dateObject, 'MMM'); // Get the month
  const day = dateObject.getDate(); // Get the day

  return { month, dayOfWeek, day };
}


function isCurrentDate(isoDate: string) {
  const currentDate = new Date();

const isoDateString = currentDate.toISOString();
const ymd = isoDateString.split('T')[0]; 

  return ymd === isoDate;
}



const searchApi = async (query: string): Promise<LeetCodeQuestionDTO[]> => {
  return fetch(`/api/search?query=${query}`)
    .then((response) => response.json())
};

async function postLeetCodeQuestion(card:LeetCodeQuestionDTO,date:string) {
  const endpoint = `/api/userquestions/add?date=${date}` // Replace with your actual API endpoint
  try {

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the appropriate content type
      },
      body: JSON.stringify(card), // Convert the object to JSON
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}
