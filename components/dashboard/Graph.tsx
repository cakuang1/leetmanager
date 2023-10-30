"use client";

import { AreaChart, Color, Flex, Icon, Tab, TabGroup, TabList, Text, Title } from "@tremor/react";
import { useState } from "react";




export type DailyPerformance = {
  date: string;
  Sales: number;
};



export const week: DailyPerformance[] = [
  {
    date: "2023-05-01",
    questionsDone: 900,

  },
  {
    date: "2023-05-02",
    questionsDone: 1000,

  },
  {
    date: "2023-05-03",
    questionsDone: 1100,

  },
  {
    date: "2023-05-04",
    questionsDone: 1200,
  },
];

export const month =  [
    {
      date: "2023-05-00",
      Sales: 900,
  
    },
    {
      date: "2023-05-02",
      Sales: 1000,
  
    },
    {
      date: "2023-05-03",
      Sales: 1100,
  
    },
    {
      date: "2023-05-04",
      Sales: 1200,
    },
  ];




const listofcategories = [week,month]







export default function ChartView() {
  const [selectedIndex, setSelectedIndex] = useState(0);


  
  console.log(selectedIndex)
console.log(listofcategories[selectedIndex])
  const areaChartArgs = {
    className: "mt-5 h-72",
    data: listofcategories[selectedIndex],
    index: "date",
    categories : ['Sales'],
    colors: ["yellow"] as Color[],
    showLegend: false,
    yAxisWidth: 60,
  };


  return (
    <>
      <div className="md:flex justify-between">
        <div>
          <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
            <Title>Questions Solved</Title>

          </Flex>

        </div>
        <div>
          <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
            <TabList color="gray" variant="solid">
              <Tab>Week</Tab>
              <Tab>Month</Tab>
              <Tab>6 Month</Tab>
              <Tab>Year</Tab>
            </TabList>
          </TabGroup>
        </div>
      </div>
      {/* web */}
      <div className="mt-8 hidden sm:block">
        <AreaChart {...areaChartArgs} />
      </div>
      {/* mobile */}
      <div className="mt-8 sm:hidden">
        <AreaChart {...areaChartArgs} startEndOnly={true} showGradient={false} showYAxis={false} />
      </div>
    </>
  );
}