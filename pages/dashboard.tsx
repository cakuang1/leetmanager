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
  const questionsByDayWeek = calculateQuestionsByDay(questions, oneWeekAgo, currentDate);
  const questionsByDayMonth = calculateQuestionsByDay(questions, oneMonthAgo, currentDate);
  const questionsByDaySixMonths = calculateQuestionsByDay(questions, sixMonthsAgo, currentDate);
  const questionsByDayYear = calculateQuestionsByDay(questions, oneYearAgo, currentDate);



  useEffect(() => {
    const apiUrl = "/api/userquestions/graball";
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

  console.log("Questions By Day (Past Week):", questionsByDayWeek);
  console.log("Questions By Day (Past Month):", questionsByDayMonth);

  return (
    <Layout>
      <div className="w-3/5 mx-auto text-center mt-10 ">
      <Title className="font-bold text-2xl">Dashboard</Title>

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
// Function to calculate the counts for easy, medium, and hard questions
function calculateQuestionsByDay(data: UserQuestionDTO[], startDate: Date, endDate: Date) {
  const counts: Record<string, number> = {};
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const formattedDate = currentDate.toISOString().split("T")[0];

    const questionsDone = data.filter((item) => {
      const itemDate = item.date.split("T")[0];
      return itemDate === formattedDate;
    }).length;

    counts[formattedDate] = questionsDone;
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return counts;
}

// Get the current date and calculate the start dates for the past week, month, 6 months, and year
const currentDate = new Date();
const oneWeekAgo = new Date(currentDate);
oneWeekAgo.setDate(currentDate.getDate() - 7);
const oneMonthAgo = new Date(currentDate);
oneMonthAgo.setMonth(currentDate.getMonth() - 1);
const sixMonthsAgo = new Date(currentDate);
sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
const oneYearAgo = new Date(currentDate);
oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

// Calculate the number of questions done by day for the past week, month, 6 months, and year


