"use client";
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
import Layout from "@/components/layout";
import ChartView from "@/components/dashboard/Graph";
import { useEffect,useState } from "react";
import { UserQuestionDTO } from "@/components/types";


export default function Dashboard() {
  const [questions, setQuestions] = useState<UserQuestionDTO[]>([]);
  const [categories,setCategories] = useState<Record<string,number>>({});

  useEffect(() => {
    // Define the URL of your API endpoint for fetching questions
    const apiUrl = "/api/userquestions/graball";
    // Use the fetch function to make the GET request to the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Once data is fetched, update the state with the questions
        setQuestions(data.completed);
        setCategories(calculateDifficultyCounts(data.completed) )
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);




  return (
    <Layout>
      <div className="w-3/5 mx-auto">
      <Title>Dashboard</Title>

<TabGroup className="mt-6">

  <TabPanels>
    <TabPanel>
      <Grid numItemsMd={2} numItemsLg={4} className="gap-6 mt-6">
        <Card className=" ">
        <div className="text-center pt-6 ">
          <div></div>
          <Metric>{calculateTotalItems(questions)}</Metric>
          <Text className="mt-5">Total Questions Solved</Text>
        </div>
        </Card>
        <Card className=" ">
        <div className="text-center pt-6 ">
          <Metric>{categories.easy}</Metric>
          <div className="inline-flex items-center mt-5">
  <span className="w-2 h-2 inline-block bg-green-500 rounded-full   mr-2"></span>

  <Text className="text-gray-600 text-sm">Easy</Text>
</div>
        </div>
        </Card>
        <Card className=" ">
        <div className="text-center pt-6 ">
          <Metric>{categories.medium}</Metric>
          <div className="inline-flex items-center mt-5">
  <span className="w-2 h-2 inline-block bg-yellow-200 rounded-full   mr-2"></span>

  <Text className="text-gray-600 text-sm">Medium</Text>
</div>
        </div>
        </Card>
        <Card className=" ">
        <div className="text-center pt-6 ">
          <Metric>{categories.hard}</Metric>
          <div className="inline-flex items-center mt-5">
  <span className="w-2 h-2 inline-block bg-red-500 rounded-full   mr-2"></span>

  <Text className="text-gray-600 text-sm">Hard</Text>
</div>
        </div>
        </Card>
      </Grid>
      <div className="mt-6">
      <Card>
          <ChartView/>
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

      </Layout>
  )
}


function calculateTotalItems(data:UserQuestionDTO[]) {
  return data.length;
}

// Function to calculate the counts for easy, medium, and hard questions
function calculateDifficultyCounts(data:UserQuestionDTO[]) {
  const counts: { [key: string]: number } = {
    easy: 0,
    medium: 0,
    hard: 0
  };
  data.forEach(item => {
    const difficulty = item.difficulty.toLowerCase();
    if (counts.hasOwnProperty(difficulty)) {
      counts[difficulty]++;
    }
  });
  return counts;
}
