import React from "react"
import { BadgeDelta, Card, DeltaType, Flex, Title, Metric, ProgressBar, Text } from "@tremor/react";
import { useState,useEffect} from "react";
import { getColorClasses } from "@/components/problems/todolist";
// section for dropdown 

type Kpi = {
    title: string;
    metric: string;
    progress: number;
    target: string;
  };
  


  const CategoryTable = ( { category, questions,completed,notCompleted,func }: { category: string, questions: QuestionItem[],completed:any,notCompleted:any,func:any}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [numbercompleted,setNumbercompleted] = useState(0);
    
    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
    const isFinished = (id:number) => completed.has(id);
    const inProgress = (id:number) => notCompleted.has(id);

    useEffect(() => {
      let totalCompleted = 0;
      // Iterate through the questions and check if each one is completed
      questions.forEach((question) => {
        if (completed.has(question.id)) {
          totalCompleted++;
        }
      });
      func(totalCompleted)
      setNumbercompleted(totalCompleted);
    }, []);
  
    return (
      <div className="mb-2">
        <div className="flex justify-between items-center border p-5 font-bold bg-gray-50" onClick={toggleExpansion}>
          <h2>{category}</h2>
          <div className="w-2/5  flex "> 
          <div className="font-bold text-sm mr-3">{numbercompleted + '/' + questions.length}</div>
          <ProgressBar value={numbercompleted/questions.length * 100} color="green" className="" />
          <div className="ml-3 font-bold">{isExpanded ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M10.103 7.222c3.447 3.468 5.744 5.764 6.89 6.887c.198.185.539.56 1.046.07c.339-.327.325-.685-.039-1.073l-7.444-7.43a.638.638 0 0 0-.455-.176a.702.702 0 0 0-.472.176l-7.453 7.635c-.241.388-.231.715.03.98c.26.265.577.28.95.043l6.947-7.112Z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M10.103 12.778L16.81 6.08a.69.69 0 0 1 .99.012a.726.726 0 0 1-.012 1.012l-7.203 7.193a.69.69 0 0 1-.985-.006L2.205 6.72a.727.727 0 0 1 0-1.01a.69.69 0 0 1 .99 0l6.908 7.068Z"/></svg>}</div>
</div>
        </div>
        {isExpanded && (
        <div className="">
            {questions.map((item) => (
              <div className={`flex justify-between items-center border p-3 font-bold w-full pl-10 ${isFinished(item.id) && 'bg-green-100'} ${inProgress(item.id) && 'bg-gray-100'} justify-between` } >
                <div className="flex items-center "> <h2 className="">{item.name}</h2> <span className={`${getColorClasses(item.difficulty)} p-1 rounded-sm ml-3`}>{item.difficulty}</span></div>
  
              <div className="">    {isFinished(item.id) ? (
      <div className=" p-2 rounded-xl text-green-600 flex gap-2">Solved<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"/></svg></div>
    ) : inProgress(item.id)? (
      <div className=" p-2 rounded-xl  flex">In Progress <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20.777a8.942 8.942 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a8.961 8.961 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A8.954 8.954 0 0 1 10 3.223"/></svg></div>
    ) : (
      <div className=""></div>
    )}</div>
            </div>
            ))}
        </div>
      )}
      </div>
    );
  };

  export default function Neetcode(takein:any) {
    const [curr,setCurr] = useState<string>('Blind 75');
    const [total150,set150] = useState<number>(0)
    const [blind75,setblind75] = useState<number>(0)
    const handleCardClick = (title: string) => {
        setCurr(title); // Set curr to the title of the clicked card
      };

    function addtototal150(addnumber:number) {
      console.log('test')
        set150((prev150) => prev150 + addnumber);

    }
    function addtototalblind(addnumber: number) {
      setblind75((prevBlind75) => prevBlind75 + addnumber);
    }

    const completedQuestionIds = new Set(takein.takein.completed.map((item:any) => item.questionId));
    const notCompletedQuestionIds = new Set(takein.takein.notCompleted.map((item:any) => item.questionId));
      return (
        <div className="mt-10 mx-auto w-3/5">
      <Title className="font-bold text-2xl text-center mb-4">General Study Plans</Title>
          <div className="justify-center flex gap-10">

              <Card
                key={"Blind 75"}
                className={`w-1/4 hover:bg-gray-100 ${curr === "Blind 75"? 'bg-gray-100 border border-orange-200' : ''}`}
                onClick={() => handleCardClick("Blind 75")} // Handle card click event
              >
                <Flex alignItems="start">
                  <div className="truncate">
                    <Text>{"Blind 75"}</Text>
                    <Metric className="truncate">{blind75}</Metric>
                  </div>
                </Flex>
                <Flex className="mt-4 space-x-2">
                  <Text className="truncate">{`${blind75/75 * 100}% (${blind75})`}</Text>
                  <Text className="truncate">{75}</Text>
                </Flex>
                <ProgressBar value={blind75/75 * 100} className="mt-2" color="green" />
              </Card>

                          <Card
                className={`w-1/4 hover:bg-gray-100 ${curr === "Neetcode 150" ? 'bg-gray-100 border border-orange-200' : ''}`}
                onClick={() => handleCardClick("Neetcode 150")} // Handle card click event
              >
                <Flex alignItems="start">
                  <div className="truncate">
                    <Text>{"Neetcode 150"}</Text>
                    <Metric className="truncate">{total150}</Metric>
                  </div>
                </Flex>
                <Flex className="mt-4 space-x-2">
                  <Text className="truncate">{`${total150/150 * 100}% (${total150})`}</Text>
                  <Text className="truncate">{150}</Text>
                </Flex>
                <ProgressBar value={total150/150 * 100} className="mt-2" color="green" />
              </Card>
          </div>
          <div className="mt-12">
            <div className={curr === "Neetcode 150" ? "" : "hidden"}>            {
                  neet.map((category) => (
                    <CategoryTable
                        key={category.name}
                      category={category.name}
                      questions={category.items}
                      completed={completedQuestionIds}
                      notCompleted={notCompletedQuestionIds}
                      func={addtototal150}
                    />

      ))}</div>
      <div className={curr === "Blind 75" ? "" : "hidden"}>{categoriesArray.map((category) => (
        <CategoryTable
            key={category.name}
          category={category.name}
          questions={category.items}
          completed={completedQuestionIds}
          notCompleted={notCompletedQuestionIds}
          func={addtototalblind}
        />
      ))}</div>



          </div>
        </div>
      );
    }


    const neet150:ListWithIds ={
      "Array & Hashing": [
        { id: 217, name: "Contains Duplicate", difficulty: "Easy" },
        { id: 1, name: "Two Sum", difficulty: "Easy" },
        { id: 242, name: "Valid Anagram", difficulty: "Easy" },
        { id: 659, name: "Encode and Decode Strings", difficulty: "Medium" },
        { id: 49, name: "Group Anagrams", difficulty: "Medium" },
        { id: 128, name: "Longest Consecutive Sequence", difficulty: "Medium" },
        { id: 238, name: "Product of Array Except Self", difficulty: "Medium" },
        { id: 347, name: "Top K Frequent Elements", difficulty: "Medium" },
        { id: 36, name: "Valid Sudoku", difficulty: "Medium" },
      ],
      "Two-Pointers": [
        { id: 125, name: "Valid Palindrome", difficulty: "Easy" },
        { id: 15, name: "3Sum", difficulty: "Medium" },
        { id: 167, name: "Two Sum II - Input Array Is Sorted", difficulty: "Medium" }, 
        { id: 11, name: "Container With Most Water", difficulty: "Medium" },
        { id: 42, name: "Trapping Rain Water", difficulty: "Hard" },
      ],
      "Sliding Window": [
        { id: 121, name: "Best Time to Buy And Sell Stock", difficulty: "Easy" },
        { id: 3, name: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
        { id: 424, name: "Longest Repeating Character Replacement", difficulty: "Medium" },
        { id: 567, name: "Permutation in String", difficulty: "Medium" },
        { id: 76, name: "Minimum Window Substring", difficulty: "Hard" },
        { id: 239, name: "Sliding Window Maximum", difficulty: "Hard" },
      ],
      "Stack": [
        { id: 20, name: "Valid Parentheses", difficulty: "Easy" },
        { id: 155, name: "Min Stack", difficulty: "Medium" },
        { id: 150, name: "Evaluate Reverse Polish Notation", difficulty: "Medium" },
        { id: 22, name: "Generate Parentheses", difficulty: "Medium" },
        { id: 739, name: "Daily Temperatures", difficulty: "Medium" },
        { id: 853, name: "Car Fleet", difficulty: "Medium" },
        { id: 20, name: "Valid Parentheses", difficulty: "Medium" },
        { id: 84, name: "Largest Rectangle in Histogram", difficulty: "Hard" },
      ],
      "Binary Search": [
        { id: 704, name: "Binary Search", difficulty: "Easy" },

        { id: 74, name: "Search a 2D Matrix", difficulty: "Medium" },
        { id: 875, name: "Koko Eating Bananas", difficulty: "Medium" },
        { id: 153, name: "Find Minimum In Rotated Sorted Array", difficulty: "Medium" },
        { id: 22, name: "Search In Rotated Sorted Array", difficulty: "Medium" },
        { id: 981, name: "Time Based Key-Value Store", difficulty: "Medium" },
        { id: 4, name: "Median of Two Sorted Arrays", difficulty: "Hard" },
      ],
      "Linked List": [
        { id: 206, name: "Reverse a Linked List", difficulty: "Easy" },
        { id: 21, name: "Merge Two Sorted Lists", difficulty: "Easy" },
        { id: 141, name: "Linked List Cycle", difficulty: "Easy" },
        { id: 143, name: "Reorder List", difficulty: "Medium" },
        { id: 19, name: "Remove Nth Node From End of List", difficulty: "Medium" },
        { id: 138, name: "Copy List With Random Pointer", difficulty: "Medium" },
        { id: 2, name: "Add Two Numbers", difficulty: "Medium" },
        { id: 287, name: "Find The Duplicate Number", difficulty: "Medium" },
        { id: 146, name: "LRU Cache", difficulty: "Medium" },
        { id: 23, name: "Merge K Sorted Lists", difficulty: "Hard" },
        { id: 25, name: "Reverse Nodes in k-Group", difficulty: "Hard" },
      ],
      "Tree": [
        { id: 226, name: "Invert Binary Tree", difficulty: "Easy" },
        { id: 104, name: "Maximum Depth of Binary Tree", difficulty: "Easy" },
        { id: 100, name: "Same Tree", difficulty: "Easy" },
        { id: 572, name: "Subtree of Another Tree", difficulty: "Easy" },
        { id: 110, name: "Balanced Binary Tree", difficulty: "Easy" },
        { id: 543, name: "Diameter of Binary Tree", difficulty: "Easy" },

        { id: 235, name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium" },
        { id: 102, name: "Binary Tree Level Order Traversal", difficulty: "Medium" },
        { id: 199, name: "Binary Tree Right Side View", difficulty: "Medium" },
        { id: 1448, name: "Count Good Nodes In Binary Tree", difficulty: "Medium" },
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
        { id: 703, name: "Kth Largest Element In a Stream", difficulty: "Easy" },
        { id: 1046, name: "Last Stone Weight", difficulty: "Easy" },
        { id: 973, name: "K Closest Points to Origin", difficulty: "Medium" },
        { id: 215, name: "Kth Largest Element In An Array", difficulty: "Medium" },
        { id: 621, name: "Task Scheduler", difficulty: "Medium" },
        { id: 355, name: "Design Twitter", difficulty: "Medium" },
        { id: 295, name: "Find Median from Data Stream", difficulty: "Hard" },
      ],
      "Backtracking": [
        { id: 78, name: "Subsets", difficulty: "Medium" },
        { id: 39, name: "Combination Sum", difficulty: "Medium" },
        { id: 46, name: "Permutations", difficulty: "Medium" },
        { id: 90, name: "Subsets II", difficulty: "Medium" },
        { id: 40, name: "Combination Sum II", difficulty: "Medium" },
        { id: 79, name: "Word Search", difficulty: "Medium" },
        { id: 131, name: "Palindrome Partitioning", difficulty: "Medium" },
        { id: 17, name: "Letter Combinations of a Phone Number", difficulty: "Medium" },
        { id: 51, name: "N Queens", difficulty: "Hard" },
      ],
      "Graphs": [
        { id: 200, name: "Number of Islands", difficulty: "Medium" },
        { id: 133, name: "Clone Graph", difficulty: "Medium" },
        { id: 695, name: "Max Area of Island", difficulty: "Medium" },
        { id: 417, name: "Pacific Atlantic Water Flow", difficulty: "Medium" },
        { id: 130, name: "Surrounded Regions", difficulty: "Medium" },
        { id: 994, name: "Rotting Oranges", difficulty: "Medium" },
        { id: 286, name: "Walls And Gates", difficulty: "Medium" },
        { id: 207, name: "Course Schedule", difficulty: "Medium" },
        { id: 210, name: "Course Schedule II", difficulty: "Medium" },
        { id: 684, name: "Redundant Connection", difficulty: "Medium" },
        { id: 323, name: "Number of Connected Components In An Undirected Graph", difficulty: "Medium" },
        { id: 261, name: "Graph Valid Tree", difficulty: "Medium" },
        { id: 127, name: "Word Ladder", difficulty: "Hard" },
      ],
      "Advanced Graphs": [
        { id: 1584, name: "Min Cost to Connect All Points", difficulty: "Medium" },
        { id: 743, name: "Network Delay Time", difficulty: "Medium" },
        { id: 787, name: "Cheapest Flights Within K Stops", difficulty: "Medium" },
        { id: 332, name: "Reconstruct Itinerary", difficulty: "Hard" },
        { id: 778, name: "Swim In Rising Water", difficulty: "Hard" },
        { id: 269, name: "Alien Dictionary", difficulty: "Hard" },
      ],
      "1-D Dynamic Programming": [
        { id: 70, name: "Climbing Stairs", difficulty: "Easy" },
        { id: 746, name: "Min Cost Climbing Stairs", difficulty: "Easy" },
        { id: 198, name: "House Robber", difficulty: "Medium" },
        { id: 213, name: "House Robber II", difficulty: "Medium" },
        { id: 5, name: "Longest Palindromic Substring", difficulty: "Medium" },
        { id: 647, name: "Palindromic Substrings", difficulty: "Medium" },
        { id: 91, name: "Decode Ways", difficulty: "Medium" },
        { id: 322, name: "Coin Change", difficulty: "Medium" },
        { id: 152, name: "Maximum Product Subarray", difficulty: "Medium" },
        { id: 139, name: "Word Break", difficulty: "Medium" },
        { id: 300, name: "Longest Increasing Subsequence", difficulty: "Medium" },
        { id: 416, name: "Partition Equal Subset Sum", difficulty: "Medium" },
      ],
      "2-D Dynamic Programming": [
        { id: 62, name: "Unique Paths", difficulty: "Medium" },
        { id: 1143, name: "Longest Common Subsequence", difficulty: "Medium" },
        { id: 309, name: "Best Time to Buy And Sell Stock With Cooldown", difficulty: "Medium" },
        { id: 518, name: "Coin Change II", difficulty: "Medium" },
        { id: 494, name: "Target Sum", difficulty: "Medium" },
        { id: 97, name: "Interleaving String", difficulty: "Medium" },
        { id: 72, name: "Edit Distance", difficulty: "Medium" },
        { id: 329, name: "Longest Increasing Path In a Matrix", difficulty: "Hard" },
        { id: 115, name: "Distinct Subsequences", difficulty: "Hard" },
        { id: 312, name: "Burst Balloons", difficulty: "Hard" },
        { id: 10, name: "Regular Expression Matching", difficulty: "Hard" },
      ],
      "Greedy": [
        { id: 53, name: "Maximum Subarray", difficulty: "Medium" },
        { id: 55, name: "Jump Game", difficulty: "Medium" },
        { id: 45, name: "Jump Game II", difficulty: "Medium" },
        { id: 134, name: "Gas Station", difficulty: "Medium" },
        { id: 846, name: "Hand of Straights", difficulty: "Medium" },
        { id: 1899, name: "Merge Triplets to Form Target Triplet", difficulty: "Medium" },
        { id: 763, name: "Partition Labels", difficulty: "Medium" },
        { id: 5678, name: "Valid Parenthesis String", difficulty: "Medium" },
      ],
      "Intervals": [
        { id: 252, name: "Meeting Rooms", difficulty: "Easy" },
        { id: 57, name: "Insert Interval", difficulty: "Medium" },
        { id: 56, name: "Merge Intervals", difficulty: "Medium" },
        { id: 435, name: "Non Overlapping Intervals", difficulty: "Medium" },
        { id: 253, name: "Meeting Rooms II", difficulty: "Medium" },
        { id: 1851, name: "Minimum Interval to Include Each Query", difficulty: "Hard" },
      ],
      "Math & Geometry": [
        { id: 202, name: "Happy Number", difficulty: "Easy" },
        { id: 66, name: "Plus One", difficulty: "Easy" },
        { id: 48, name: "Rotate Image", difficulty: "Medium" },
        { id: 54, name: "Spiral Matrix", difficulty: "Medium" },
        { id: 73, name: "Set Matrix Zeroes", difficulty: "Medium" },
        { id: 50, name: "Pow(x, n)", difficulty: "Medium" },
        { id: 43, name: "Multiply Strings", difficulty: "Medium" },
        { id: 2013, name: "Detect Squares", difficulty: "Medium" },
      ],
      "Bit Manipulation": [
        { id: 136, name: "Single Number", difficulty: "Easy" },
        { id: 191, name: "Number of 1 Bits", difficulty: "Easy" },
        { id: 338, name: "Counting Bits", difficulty: "Easy" },
        { id: 190, name: "Reverse Bits", difficulty: "Easy" },
        { id: 268, name: "Missing Number", difficulty: "Easy" },
        { id: 371, name: "Sum of Two Integers", difficulty: "Medium" },
        { id: 7, name: "Reverse Integer", difficulty: "Medium" },
      ],
    };

    const listWithIds:ListWithIds ={
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
        { id: 79, name: "Word Search", difficulty: "Medium" },
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

    type QuestionItem = {
      id: number;
      name: string;
      difficulty: string;
    };
    
    type ListWithIds = {
      [key: string]: QuestionItem[];
    };
    
    const categoriesArray = Object.keys(listWithIds).map((category) => ({
      name: category,
      items: listWithIds[category],
    }));

    const neet = Object.keys(listWithIds).map((category) => ({
      name: category,
      items: neet150[category],
    }));
    
