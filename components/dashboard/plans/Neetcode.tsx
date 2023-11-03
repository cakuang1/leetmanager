import React from "react"
import { BadgeDelta, Card, DeltaType, Flex, Grid, Metric, ProgressBar, Text } from "@tremor/react";
import { useState,useEffect} from "react";

// section for dropdown 

type Kpi = {
    title: string;
    metric: string;
    progress: number;
    target: string;
  };
  
  const kpiData: Kpi[] = [
    {
      title: "NeetCode 150",
      metric: "20",
      progress: 15.9,
      target: "150",
    },
    {
      title: "Blind 75",
      metric: "17",
      progress: 36.5,
      target: "75",
    },
  ];

  function CategoryDropdown(category:string ) {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    const isFinished = (id:number) => {
        // Add your logic to determine if the question with 'id' is finished
        return true;
      };
    const isSolved = (id:number)   => {
      return true;
    };
    const items = listWithIds[category as keyof typeof listWithIds]; // Type assertion

    return (
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-between w-64 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
            onClick={handleToggle}
          >
            {category}
            <span className="ml-2 text-gray-400">{isOpen ? '▲' : '▼'}</span>
          </button>
        </div>
        {isOpen && (
          <table className="mt-4 table-auto border border-gray-300">
            <thead>
              <tr>
                <th className="border bg-gray-200 p-2">Name</th>
                <th className="border bg-gray-200 p-2">Difficulty</th>
                <th className="border bg-gray-200 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item) => (
            <tr key={item.id}>
              <td className="border px-2 py-1">
                {isFinished(item.id) ? "Finished" : "Not Finished"}
              </td>
              <td className="border px-2 py-1">{item.name}</td>
              <td className="border px-2 py-1">{item.difficulty}</td>
            </tr>
          ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }







  export default function Neetcode() {
    const [curr,setCurr] = useState<string>('Blind 75');
    const [data,setdata] = useState({})
    const handleCardClick = (title: string) => {
        setCurr(title); // Set curr to the title of the clicked card
      };
      useEffect(() => {
        const apiUrl = "/api/userquestions/graball";
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            // Once data is fetched, update the state with the questions
            setdata(data);
          })
          .catch((error) => {
            console.error("Error fetching questions:", error);
          });
      }, []);
      return (
        <div className="mt-10">
          <h1 className="text-center">Study Plans</h1>
          <div className="w-3/5 mx-auto justify-center flex gap-10">
            {kpiData.map((item) => (
              <Card
                key={item.title}
                className={`w-1/4 hover:bg-gray-100 ${curr === item.title ? 'bg-gray-100 border border-gray-200' : ''}`}
                onClick={() => handleCardClick(item.title)} // Handle card click event
              >
                <Flex alignItems="start">
                  <div className="truncate">
                    <Text>{item.title}</Text>
                    <Metric className="truncate">{item.metric}</Metric>
                  </div>
                </Flex>
                <Flex className="mt-4 space-x-2">
                  <Text className="truncate">{`${item.progress}% (${item.metric})`}</Text>
                  <Text className="truncate">{item.target}</Text>
                </Flex>
                <ProgressBar value={item.progress} className="mt-2" />
              </Card>
            ))}
          </div>
        </div>
      );
    }


    const listWithIds = {
      "Array & Hashing": [
        { id: 217, name: "Contains Duplicate", difficulty: "Easy" },
        { id: 1, name: "Two Sum", difficulty: "Easy" },
        { id: 242, name: "Valid Anagram", difficulty: "Easy" },
        { id: 659, name: "Encode and Decode Strings", difficulty: "Medium" },
        { id: 49, name: "Group Anagrams", difficulty: "Medium" },
        { id: 128, name: "Longest Consecutive Sequence", difficulty: "Medium" },
        { id: 238, name: "Product of Array Except Self", difficulty: "Medium" },
        { id: 347, name: "Top K Frequent Elements", difficulty: "Medium" },
      ],
      "Two-Pointers": [
        { id: 125, name: "Valid Palindrome", difficulty: "Easy" },
        { id: 15, name: "3Sum", difficulty: "Medium" },
        { id: 11, name: "Container With Most Water", difficulty: "Medium" },
      ],
      "Sliding Window": [
        { id: 121, name: "Best Time to Buy And Sell Stock", difficulty: "Easy" },
        { id: 3, name: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
        { id: 424, name: "Longest Repeating Character Replacement", difficulty: "Medium" },
        { id: 76, name: "Minimum Window Substring", difficulty: "Hard" },
      ],
      "Stack": [
        { id: 20, name: "Valid Parentheses", difficulty: "Easy" },
      ],
      "Binary Search": [
        { id: 153, name: "Find Minimum In Rotated Sorted Array", difficulty: "Medium" },
        { id: 22, name: "Search In Rotated Sorted Array", difficulty: "Medium" },
      ],
      "Linked List": [
        { id: 206, name: "Reverse a Linked List", difficulty: "Easy" },
        { id: 21, name: "Merge Two Sorted Lists", difficulty: "Easy" },
        { id: 141, name: "Linked List Cycle", difficulty: "Easy" },
        { id: 143, name: "Reorder List", difficulty: "Medium" },
        { id: 19, name: "Remove Nth Node From End of List", difficulty: "Medium" },
        { id: 23, name: "Merge K Sorted Lists", difficulty: "Hard" },
      ],
      "Tree": [
        { id: 226, name: "Invert Binary Tree", difficulty: "Easy" },
        { id: 104, name: "Maximum Depth of Binary Tree", difficulty: "Easy" },
        { id: 100, name: "Same Tree", difficulty: "Easy" },
        { id: 572, name: "Subtree of Another Tree", difficulty: "Easy" },
        { id: 235, name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium" },
        { id: 102, name: "Binary Tree Level Order Traversal", difficulty: "Medium" },
        { id: 98, name: "Validate Binary Search Tree", difficulty: "Medium" },
        { id: 230, name: "Kth Smallest Element in a BST", difficulty: "Medium" },
        { id: 105, name: "Construct Binary Tree From Preorder And Inorder Traversal", difficulty: "Medium" },
        { id: 124, name: "Binary Tree Maximum Path Sum", difficulty: "Hard" },
        { id: 297, name: "Serialize and Deserialize Binary Tree", difficulty: "Hard" },
      ],
      "Tries": [
        { id: 208, name: "Implement Trie Prefix Tree", difficulty: "Medium" },
        { id: 211, name: "Design Add And Search Words Data Structure", difficulty: "Medium" },
        { id: 212, name: "Word Search II", difficulty: "Hard" },
      ],
      "Heap": [
        { id: 295, name: "Find Median from Data Stream", difficulty: "Hard" },
      ],
      "Backtracking": [
        { id: 39, name: "Combination Sum", difficulty: "Medium" },
        { id: 279, name: "Word Search", difficulty: "Medium" },
      ],
      "Graphs": [
        { id: 200, name: "Number of Islands", difficulty: "Medium" },
        { id: 133, name: "Clone Graph", difficulty: "Medium" },
        { id: 417, name: "Pacific Atlantic Water Flow", difficulty: "Medium" },
        { id: 207, name: "Course Schedule", difficulty: "Medium" },
        { id: 323, name: "Number of Connected Components In An Undirected Graph", difficulty: "Medium" },
        { id: 261, name: "Graph Valid Tree", difficulty: "Medium" },
      ],
      "Advanced Graphs": [
        { id: 269, name: "Alien Dictionary", difficulty: "Hard" },
      ],
      "1-D Dynamic Programming": [
        { id: 70, name: "Climbing Stairs", difficulty: "Easy" },
        { id: 198, name: "House Robber", difficulty: "Medium" },
        { id: 213, name: "House Robber II", difficulty: "Medium" },
        { id: 5, name: "Longest Palindromic Substring", difficulty: "Medium" },
        { id: 647, name: "Palindromic Substrings", difficulty: "Medium" },
        { id: 91, name: "Decode Ways", difficulty: "Medium" },
        { id: 322, name: "Coin Change", difficulty: "Medium" },
        { id: 152, name: "Maximum Product Subarray", difficulty: "Medium" },
        { id: 139, name: "Word Break", difficulty: "Medium" },
        { id: 300, name: "Longest Increasing Subsequence", difficulty: "Medium" },
      ],
      "2-D Dynamic Programming": [
        { id: 62, name: "Unique Paths", difficulty: "Medium" },
        { id: 1143, name: "Longest Common Subsequence", difficulty: "Medium" },
      ],
      "Greedy": [
        { id: 53, name: "Maximum Subarray", difficulty: "Medium" },
        { id: 55, name: "Jump Game", difficulty: "Medium" },
      ],
      "Intervals": [
        { id: 252, name: "Meeting Rooms", difficulty: "Easy" },
        { id: 57, name: "Insert Interval", difficulty: "Medium" },
        { id: 56, name: "Merge Intervals", difficulty: "Medium" },
        { id: 435, name: "Non Overlapping Intervals", difficulty: "Medium" },
        { id: 253, name: "Meeting Rooms II", difficulty: "Medium" },
      ],
      "Math & Geometry": [
        { id: 48, name: "Rotate Image", difficulty: "Medium" },
        { id: 54, name: "Spiral Matrix", difficulty: "Medium" },
        { id: 73, name: "Set Matrix Zeroes", difficulty: "Medium" },
      ],
      "Bit Manipulation": [
        { id: 191, name: "Number of 1 Bits", difficulty: "Easy" },
        { id: 338, name: "Counting Bits", difficulty: "Easy" },
        { id: 190, name: "Reverse Bits", difficulty: "Easy" },
        { id: 268, name: "Missing Number", difficulty: "Easy" },
        { id: 371, name: "Sum of Two Integers", difficulty: "Medium" },
      ],
    };
    