"use client";
import Image from 'next/image'
import LandingNavigation from '@/components/landingNavigation';
import Footer from '@/components/footer';
import {
  Card,
  Grid,
  TabGroup,
  TabPanel,
  TabPanels,
  Text,
  Metric 
} from "@tremor/react";

import {  signIn,signOut,useSession } from "next-auth/react";

import ChartView from "@/components/dashboard/Graph";
import Bar from '@/components/dashboard/Bar';




export default function Home() {

  return (
    <>
    <LandingNavigation/> 
<div className='bg-white '>
  <div className='h-auto'>  <h1 className='font-bold text-center pt-14 text-6xl text-gray-700'>A LeetCode based daily planner</h1>
      <p className='text-xl text-center mt-4 text-gray-600 w-2/5 mx-auto'><span className='text-leetcode font-semibold'>LeetTracker </span>is a simple free to use LeetCode productivity app to schedule your problems and track your overall progress. </p>
      <div className=''>
        <div className=''>  <Image src={'/calendar.png'} width={900} height={1000} className='mx-auto rounded mt-5 p-1   rounded bg-gray-200'/></div>
        <div className='text-center text-xl  font-semibold text-gray-600'> <p className=' mt-10'> Sign in with Github to get started</p></div>
        <button type="button" className="flex font-bold items-center mt-5 mx-auto bg-gray-800 p-3 rounded-lg hover:bg-gray-700 text-white hover" onClick={() => signIn('github',{ callbackUrl: '/tabular' })}>
  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
  </svg>
  Sign in
</button></div>
<div className='next section mt-14  w-4/6 mx-auto'>
  <h2 className='text-2xl text-center font-semibold text-gray-600'>Three Simple Features </h2>
  <div className='mt-8'>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 first feature">
  <div className=" p-4 flex items-center">
    <div>
    <div className='flex items-center'> 

<svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10`} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20V4h16v16H4ZM5 9.154h14V5H5v4.154Zm4.998 4.923h4.004v-3.923H9.998v3.923Zm0 4.923h4.004v-3.923H9.998V19ZM5 14.077h3.998v-3.923H5v3.923Zm10.002 0H19v-3.923h-3.998v3.923ZM5 19h3.998v-3.923H5V19Zm10.002 0H19v-3.923h-3.998V19Z"/></svg>
 <h2 className='text-2xl font-bold text-gray-600'>Tabular</h2>
 </div>
 <p className='mt-3 text-xl text-gray-500'>View and edit your problems in tablular view, seperated by scheduled and completed questions</p>

    </div>


  </div>
  <div className="bg-gray-200 p-1 rounded"><Image alt = 'alt' src={'/tabular.png'} width={600} height={600}/>  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 second feature mt-10">
<div className="bg-gray-200 p-1 rounded"><Image src={'/calendar.png'} alt='alt' width={600} height={600}/>  </div>
<div className=" p-4 flex items-center">
    <div>
    <div className='flex items-center'> 

    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 mr-2`} width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M2 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Zm6 0H3v2h5V3ZM2 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Zm6 0H3v2h5V9Zm-5 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3Zm0 1h5v2H3v-2Zm8-12a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V3Zm6 0h-5v2h5V3Zm-5 5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5Zm0 1h5v2h-5V9Z"/></svg>
 <h2 className='text-2xl font-bold text-gray-600'>Kanban</h2>
 </div>
 <p className='mt-3 text-xl text-gray-500'>
  
 Schedule and edit your problems in a Kanban view  </p>

    </div>


  </div>
</div>
  </div>
  <div className='dashboard mt-12'>
    <div className='flex justify-center items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 mr-2`} width="24" height="24" viewBox="0 0 32 32"><g fill="currentColor"><path d="M29 17.518a.5.5 0 0 0-.5-.5H15V3.5a.5.5 0 0 0-.5-.5C6.505 3 0 9.495 0 17.479C0 25.757 6.243 32 14.521 32C22.234 32 29 25.232 29 17.518zm-28-.039c0-7.266 5.787-13.206 13-13.47v13.509c0 .276.224.5.5.482h13.49c-.283 6.99-6.455 13-13.469 13C6.813 31 1 25.188 1 17.479z"/><path d="M17.5 15h13.999c.276.018.501-.224.501-.5C32 6.505 25.495 0 17.5 0a.5.5 0 0 0-.5.5v14.018c0 .276.224.5.5.482zM18 1.009c7.063.259 12.759 5.97 12.994 13.009H18V1.009z"/></g></svg> 
    <h2 className='text-xl font-bold text-center text-gray-600'>Dashboard</h2>
    </div>

  <p className='mt-3 text-xl text-gray-500 text-center'> Visualize your progress</p>
<TabGroup className="mt-6"> 
  <TabPanels>
    <TabPanel>
      <Grid numItemsMd={2} numItemsLg={4} className="gap-6 mt-6">
        <Card className=" ">
        <div className="text-center pt-6 ">
          <div></div>
          <Metric>{100}</Metric>
          <Text className="mt-5">Total Questions Solved</Text>
        </div>
        </Card>
        <Card className=" ">
        <div className="text-center pt-6 ">
          <Metric>{50}</Metric>
          <div className="inline-flex items-center mt-5">
  <span className="w-2 h-2 inline-block bg-green-500 rounded-full   mr-2"></span>

  <Text className="text-gray-600 text-sm">Easy</Text>
</div>
        </div>
        </Card>
        <Card className=" ">
        <div className="text-center pt-6 ">
          <Metric>{35}</Metric>
          <div className="inline-flex items-center mt-5">
  <span className="w-2 h-2 inline-block bg-yellow-200 rounded-full   mr-2"></span>
  <Text className="text-gray-600 text-sm">Medium</Text>
</div>
        </div>
        </Card>
        <Card className=" ">
        <div className="text-center pt-6 ">
          <Metric>{15}</Metric>
          <div className="inline-flex items-center mt-5">
  <span className="w-2 h-2 inline-block bg-red-500 rounded-full   mr-2"></span>

  <Text className="text-gray-600 text-sm">Hard</Text>
</div>
        </div>
        </Card>
      </Grid>
      <div className="mt-6">
      <Card>
          <ChartView listofcategories = {[last7Items,last30Items,last180Items,randomDataForYear]}/>
        </Card>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="mt-6">
        <Card>
          <div className="h-96" />
        </Card>
      </div>
      
    </TabPanel>
  </TabPanels>
  
</TabGroup>
<Bar bardata= {topicCounts}/>
  </div>

</div>
</div>

    </div>
    <Footer/> 

    </>
  )
}







function generateRandomDataForYear() {
  const currentDate = new Date();
  const oneYearAgo = new Date(currentDate);
  oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

  const randomData = [];
  let currentDateCopy = new Date(oneYearAgo);

  while (currentDateCopy <= currentDate) {
    const formattedDate = currentDateCopy.toISOString().split("T")[0];
    const questionsDone = Math.floor(Math.random() * 10); // Adjust the range
    randomData.push({ date: formattedDate, questionsDone });
    currentDateCopy.setDate(currentDateCopy.getDate() + 1);
  }

  return randomData;
}

// Example usage

const randomDataForYear = generateRandomDataForYear();

const last7Items = randomDataForYear.slice(-7);
const last30Items = randomDataForYear.slice(-30);
const last180Items = randomDataForYear.slice(-180);

const topicKeys = [
  "array",
  "hash-table",
  "linked-list",
  "math",
  "recursion",
  "string",
  "sliding-window",
  "binary-search",
  "divide-and-conquer",
  "dynamic-programming",
  "two-pointers",
  "greedy",
  "trie",
  "sorting",
  "backtracking",
  "stack",
  "heap-priority-queue",
  "merge-sort",
  "string-matching",
  "bit-manipulation",
  "matrix",
  "monotonic-stack",
  "simulation",
  "combinatorics",
  "memoization",
  "tree",
  "depth-first-search",
  "binary-tree",
  "binary-search-tree",
  "breadth-first-search",
  "union-find",
  "graph",
  "design",
  "doubly-linked-list",
  "geometry",
  "interactive",
  "bucket-sort",
  "radix-sort",
  "counting",
  "data-stream",
  "iterator",
  "database",
  "rolling-hash",
  "hash-function",
  "shell",
  "enumeration",
  "number-theory",
  "topological-sort",
  "prefix-sum",
  "quickselect",
  "binary-indexed-tree",
  "segment-tree",
  "line-sweep",
  "ordered-set",
  "queue",
  "monotonic-queue",
  "counting-sort",
  "brainteaser",
  "game-theory",
  "eulerian-circuit",
  "randomized",
  "reservoir-sampling",
  "shortest-path",
  "bitmask",
  "rejection-sampling",
  "probability-and-statistics",
  "suffix-array",
  "concurrency",
  "minimum-spanning-tree",
  "biconnected-component",
  "strongly-connected-component",
];

for (let i = topicKeys.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [topicKeys[i], topicKeys[j]] = [topicKeys[j], topicKeys[i]];
}

// Randomly select at most 10 topics
const selectedTopics = topicKeys.slice(0, 10);

// Calculate a balanced count for each topic
const balancedCount = Math.floor(100 / selectedTopics.length);

// Create an array of objects with topics and counts
const topicCounts = selectedTopics.map(topic => ({
  topic,
  count: balancedCount + Math.floor(Math.random() * 3) - 1, // Variation within +/- 1
}));

// Adjust the total count to exactly 100
const totalCounts = topicCounts.reduce((total, { count }) => total + count, 0);
const diff = 100 - totalCounts;
topicCounts[0].count += diff;
