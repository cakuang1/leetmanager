"use client";
import Image from 'next/image'
import Layout from '@/components/layout'


import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
  Metric 
} from "@tremor/react";

import ChartView from "@/components/dashboard/Graph";




export default function Home() {
  return (
    <Layout>
<div>
  <div className='h-auto'>  <h1 className='font-bold text-center mt-14 text-6xl text-gray-700'>A LeetCode based daily planner</h1>
      <p className='text-xl text-center mt-4 text-gray-600 w-2/5 mx-auto'><span className='text-leetcode font-semibold'>LeetTracker </span>is a simple free to use LeetCode productivity app to schedule your problems and track your overall progress. </p>
      <div className=''>
        <div className=''>  <Image src={'/calendar.png'} width={900} height={1000} className='mx-auto rounded mt-5 p-2   rounded bg-gray-200'/></div>
        <div className='text-center text-xl  font-semibold text-gray-600'> <p className=' mt-10'> Sign in with Github to get started</p></div>
        <button type="button" className="flex font-bold items-center mt-5 mx-auto bg-gray-800 p-3 rounded-lg hover:bg-gray-700 text-white hover">
  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
  </svg>
  Sign in
</button></div>
<div className='next section mt-20  w-4/6 mx-auto'>
  <h2 className='text-2xl text-center font-semibold text-gray-600'>Three Simple Features </h2>
  <div className='mt-5'>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 first feature">
  <div className=" p-4">
    <h2 className='text-2xl font-bold text-gray-600'>Tabular View</h2>
    <p className='mt-3 text-xl text-gray-500'>View your scheduled and finished problems in table.</p>
  </div>
  <div className="bg-gray-200 p-4">Column 2</div>
</div>

  </div>

  <div>
    
  </div>





  <div className='dashboard'>
  <Title className="font-bold text-2xl">Dashboard</Title>
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
          <ChartView listofcategories = {[randomDataForWeek,randomDataForMonth,randomDataForSixMonths,randomDataForYear]}/>
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
  </div>

</div>
</div>

      


    </div>
    </Layout>

  )
}




// Generate random data for the past week, month, 6 months, and year
function generateRandomData() {
  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate);
  oneWeekAgo.setDate(currentDate.getDate() - 7);
  const oneMonthAgo = new Date(currentDate);
  oneMonthAgo.setMonth(currentDate.getMonth() - 1);
  const sixMonthsAgo = new Date(currentDate);
  sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
  const oneYearAgo = new Date(currentDate);
  oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

  const randomData = [];

  // Generate random data for the past week
  let currentDateCopy = new Date(oneWeekAgo);
  while (currentDateCopy <= currentDate) {
    const formattedDate = currentDateCopy.toISOString().split("T")[0];
    const questionsDone = Math.floor(Math.random() * 100); // Adjust the range
    randomData.push({ date: formattedDate, questionsDone });
    currentDateCopy.setDate(currentDateCopy.getDate() + 1);
  }

  // Generate random data for the past month
  currentDateCopy = new Date(oneMonthAgo);
  while (currentDateCopy <= currentDate) {
    const formattedDate = currentDateCopy.toISOString().split("T")[0];
    const questionsDone = Math.floor(Math.random() * 100); // Adjust the range
    randomData.push({ date: formattedDate, questionsDone });
    currentDateCopy.setDate(currentDateCopy.getDate() + 1);
  }

  // Generate random data for the past 6 months
  currentDateCopy = new Date(sixMonthsAgo);
  while (currentDateCopy <= currentDate) {
    const formattedDate = currentDateCopy.toISOString().split("T")[0];
    const questionsDone = Math.floor(Math.random() * 100); // Adjust the range
    randomData.push({ date: formattedDate, questionsDone });
    currentDateCopy.setDate(currentDateCopy.getDate() + 1);
  }

  // Generate random data for the past year
  currentDateCopy = new Date(oneYearAgo);
  while (currentDateCopy <= currentDate) {
    const formattedDate = currentDateCopy.toISOString().split("T")[0];
    const questionsDone = Math.floor(Math.random() * 100); // Adjust the range
    randomData.push({ date: formattedDate, questionsDone });
    currentDateCopy.setDate(currentDateCopy.getDate() + 1);
  }

  return randomData;
}

// Generate random data for the past week
function generateRandomDataForWeek() {
  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate);
  oneWeekAgo.setDate(currentDate.getDate() - 7);

  const randomData = [];
  let currentDateCopy = new Date(oneWeekAgo);

  while (currentDateCopy <= currentDate) {
    const formattedDate = currentDateCopy.toISOString().split("T")[0];
    const questionsDone = Math.floor(Math.random() * 100); // Adjust the range
    randomData.push({ date: formattedDate, questionsDone });
    currentDateCopy.setDate(currentDateCopy.getDate() + 1);
  }

  return randomData;
}

// Generate random data for the past month
function generateRandomDataForMonth() {
  const currentDate = new Date();
  const oneMonthAgo = new Date(currentDate);
  oneMonthAgo.setMonth(currentDate.getMonth() - 1);

  const randomData = [];
  let currentDateCopy = new Date(oneMonthAgo);

  while (currentDateCopy <= currentDate) {
    const formattedDate = currentDateCopy.toISOString().split("T")[0];
    const questionsDone = Math.floor(Math.random() * 100); // Adjust the range
    randomData.push({ date: formattedDate, questionsDone });
    currentDateCopy.setDate(currentDateCopy.getDate() + 1);
  }

  return randomData;
}

// Generate random data for the past 6 months
function generateRandomDataForSixMonths() {
  const currentDate = new Date();
  const sixMonthsAgo = new Date(currentDate);
  sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

  const randomData = [];
  let currentDateCopy = new Date(sixMonthsAgo);

  while (currentDateCopy <= currentDate) {
    const formattedDate = currentDateCopy.toISOString().split("T")[0];
    const questionsDone = Math.floor(Math.random() * 100); // Adjust the range
    randomData.push({ date: formattedDate, questionsDone });
    currentDateCopy.setDate(currentDateCopy.getDate() + 1);
  }

  return randomData;
}

// Generate random data for the past year
function generateRandomDataForYear() {
  const currentDate = new Date();
  const oneYearAgo = new Date(currentDate);
  oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

  const randomData = [];
  let currentDateCopy = new Date(oneYearAgo);

  while (currentDateCopy <= currentDate) {
    const formattedDate = currentDateCopy.toISOString().split("T")[0];
    const questionsDone = Math.floor(Math.random() * 100); // Adjust the range
    randomData.push({ date: formattedDate, questionsDone });
    currentDateCopy.setDate(currentDateCopy.getDate() + 1);
  }

  return randomData;
}

// Example usage
const randomDataForWeek = generateRandomDataForWeek();
const randomDataForMonth = generateRandomDataForMonth();
const randomDataForSixMonths = generateRandomDataForSixMonths();
const randomDataForYear = generateRandomDataForYear();

console.log("Random Data for the Past Week:", randomDataForWeek);
console.log("Random Data for the Past Month:", randomDataForMonth);
console.log("Random Data for the Past 6 Months:", randomDataForSixMonths);
console.log("Random Data for the Past Year:", randomDataForYear);
