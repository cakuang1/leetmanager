import React, { ChangeEvent } from 'react';
import Card from './Card';
import { useState ,useEffect,useRef} from 'react';

interface ColumnProps {
  title: string; 
}

interface SearchProps {
    onClickOutside: () => void;
  }

function Search({ onClickOutside }: SearchProps) {
    const searchRef = useRef<HTMLDivElement | null>(null);
    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState<string[]>([]);
  
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
  
    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
    
        // Perform your query here and update queryResults
        // For example, you can fetch data from an API or search locally
        // and set the results in the queryResults state.
        // setQueryResults(yourQueryResults);
      };

    return (
        <div>
      <div ref={searchRef} className=" border rounded-xl  hover:border-leetcode  hover:shadow cursor-pointer flex items-center p-2 cursor-pointer">
        <div className="add-card-left text-gray-400 pr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"/></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"/></path></g></svg>
        </div>
        <input type="email" name="email" id="email" placeholder="Search for problem to add " className="focus:outline-none form-input bg-gray-50 add-card-right text-gray-400 w-full" />
      </div>
        <ul>
            {queryResults.map((result, index) => (
            <li key={index}>{result}</li>
            ))}
        </ul>
        
      </div>
    );
  }
  




  
function Column({ title}: ColumnProps) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
      };
    
      const handleEditOff = () => {
        setIsEditing(false);
      };
    return (
<div className="kanban-column w-1/6 mx-3 flex-shrink-0">
        <h2 className='font-bold'>{title}</h2>


    {isEditing ? <Search onClickOutside={handleEditOff} /> : <div className=" border rounded-xl  hover:border-leetcode  hover:shadow cursor-pointer flex items-center  p-2 cursor-pointer " onClick={handleEditClick}>
    <div className="add-card-left text-gray-400  pr-2 ">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><rect width="36" height="36" x="6" y="6" rx="3"/><path stroke-linecap="round" d="M24 16v16m-8-8h16"/></g></svg> 
    </div>
    <div className="add-card-right text-gray-400" >
        Add a Problem
    </div>
    </div>}

</div>

    );
  }

export default Column;
