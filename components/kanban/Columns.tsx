import React, { ChangeEvent } from 'react';
import Card from './Card';
import { useState ,useEffect,useRef} from 'react';
import { Droppable } from 'react-beautiful-dnd';


interface SearchProps {
    onClickOutside: () => void;
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


  interface question {
    id:number;
    name:string;
    difficulty:string;
  }



  const example = [
    {
      "id": 1,
      "name": "Two Sum",
      "difficulty": "Easy"
    },
    {
      "id": 23,
      "name": "Merge k Sorted Lists",
      "difficulty": "Hard"
    },
    {
      "id": 46,
      "name": "Permutations",
      "difficulty": "Medium"
    },
    {
      "id": 94,
      "name": "Binary Tree Inorder Traversal",
      "difficulty": "Medium"
    }];





function Search({ onClickOutside }: SearchProps) {
    const searchRef = useRef<HTMLDivElement | null>(null);
    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState<question[]>(example);
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
    


      };

    return (
        <div>
      <div ref={searchRef} className=" border rounded p-2 text-sm hover:border-leetcode  hover:shadow cursor-pointer flex items-center p-2 cursor-pointer">
        <div className="add-card-left text-gray-400 pr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="16" stroke-dashoffset="16" d="M10.5 13.5L3 21"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"/></path><path stroke-dasharray="40" stroke-dashoffset="40" d="M10.7574 13.2426C8.41421 10.8995 8.41421 7.10051 10.7574 4.75736C13.1005 2.41421 16.8995 2.41421 19.2426 4.75736C21.5858 7.10051 21.5858 10.8995 19.2426 13.2426C16.8995 15.5858 13.1005 15.5858 10.7574 13.2426Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="40;0"/></path></g></svg>
        </div>
        <input type="email" name="email" id="email" placeholder="Search for problem to add " className="focus:outline-none form-input bg-gray-50 add-card-right text-gray-400 w-full" />
      </div>
      <ul>
        {queryResults.map((question) => (
          <li key={question.id} className='border rounded  hover:border-leetcode  hover:shadow cursor-pointer flex items-center p-2 cursor-pointer text-sm font-semibold'>
            <p>{question.id}.&nbsp;</p>
            <p>{question.name}&nbsp;</p>
            <p className={`${getColorClasses(question.difficulty)} px-2 inline-flex text-xs leading-5 font-semibold rounded-full overflow-hidden`}>{question.difficulty}</p>
          </li>
        ))}
      </ul>
        
      </div>
    );
  }


  
function Column({ id, cards }: ColumnProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [currcards, setCardSection] = useState<question[]>(example);
     const handleEditClick = () => {
        setIsEditing(true);
      };
    
      const handleEditOff = () => {
        setIsEditing(false);
      };

    return (


<div className="kanban-column w-1/6 mx-3 flex-shrink-0">
        <h2 className='font-bold mb-4'></h2>
    {isEditing ? <Search onClickOutside={handleEditOff} /> : <div className=" border rounded-xl  hover:border-leetcode  hover:shadow cursor-pointer flex items-center  p-2 text-sm bg-white cursor-pointer " onClick={handleEditClick}>
    <div className="add-card-left text-gray-400  pr-2 ">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><rect width="36" height="36" x="6" y="6" rx="3"/><path stroke-linecap="round" d="M24 16v16m-8-8h16"/></g></svg> 
    </div>
    <div className="add-card-right text-gray-400" >
        Add a Problem
    </div>
    </div>}
    <div>
    <Droppable droppableId={id} type="CARD">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="kanban-card-list"
          >
            {cards.map((card, index) => (
              <Card key={card.card.id} card={card.card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
</div>

    );
  }

export default Column;





// HELPER FUNCTIONS ignore

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