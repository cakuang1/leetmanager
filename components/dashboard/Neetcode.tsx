import React from "react"
import { BadgeDelta, Card, DeltaType, Flex, Grid, Metric, ProgressBar, Text } from "@tremor/react";
import { useState } from "react";
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





  function DropDown(topic:string,questions:string[]) {
    return (
        <div>
            <h1></h1>
        </div>
    )
  }



  export default function Neetcode() {
    const [curr,setCurr] = useState<string>('Blind 75');

    const handleCardClick = (title: string) => {
        setCurr(title); // Set curr to the title of the clicked card
      };

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



    const list = {
        "Array & Hashing": {
          "Easy": [
            "Contains Duplicate",
            "Two Sum",
            "Valid Anagram",    
          ],
          "Medium": [
            "Encode and Decode Strings",
            "Group Anagrams",
            "Longest Consecutive Sequence",
            "Product of Array Except Self",
            "Top K Frequent Elements",
          ]
        },
        "Two-Pointers": {
            "Easy": [
                "Valid Palindrome",                
              ],
          "Medium": [
            "3Sum",
            "Container With Most Water"
          ],
    
        },
        "Sliding Window": {
          "Easy": [
            "Best Time to Buy And Sell Stock",

          ],
          "Medium": [
            "Longest Substring Without Repeating Characters",
            "Longest Repeating Character Replacement",
          ],
          "Hard" : [
            "Minimum Window Substring"
          ]
        },
        "Stack": {
          "Easy": [
            "Valid Parentheses"
          ]
    
        },
        "Binary Search": {

          "Medium": [
            "Find Minimum In Rotated Sorted Array",
            "Search In Rotated Sorted Array",

          ],

    
        },
        "Linked List": {
          "Easy": [
            "Reverse a Linked List",
            "Merge Two Sorted Lists",
            "Linked List Cycle",
          ],
    
          "Medium": [
            "Reorder List",
            "Remove Nth Node From End of List"
          ],
          "Hard": [
            "Merge K Sorted Lists"
          ],
        },
        "Tree": {
            "Easy": [
              "Invert Binary Tree",
              "Maximum Depth of Binary Tree",
              "Same Tree",
              "Subtree of Another Tree",
            ],
      
            "Medium": [
              "Lowest Common Ancestor of a Binary Search Tree",
              "Binary Tree Level Order Traversal",
              "Validate Binary Search Tree",
              "Kth Smallest Element in a BST",
              "Implement Trie (Prefix Tree)",
              "Add and Search Word",
      
            ],
            "Hard": [
              "Binary Tree Maximum Path Sum",
              "Serialize and Deserialize Binary Tree",
              "Word Search II"
            ],
          },
    
        "String": {
            "Easy": [
                "Valid Anagram",
                "Valid Parentheses",
                "Valid Palindrome"
              ],
        
          "Medium": [
            "Longest Substring w/o Repeating Characters",
            "Longest Repeating Character Replacement",
            "Group Anagrams",
            "Longest Palindromic Substring",
            "Palindromic Substrings",
            "Encode and Decode Strings"
    
          ],
    
          "Hard": [
            "Minimum Window Substring",
    
          ]
        },

        "Heap": {
            "Medium": [
                "Top K Frequent Elements"
              ],
          "Hard": [
            "Merge K Sorted Lists",
            "Find Median from Data Stream"
          ],
    
        }
      }
      