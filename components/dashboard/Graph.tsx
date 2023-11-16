"use client";

import { AreaChart, Color, Flex, Icon, Tab, TabGroup, TabList, Text, Title } from "@tremor/react";
import { useState } from "react";




export type DailyPerformance = {
  date: string;
  Sales: number;
};


export default function ChartView({ listofcategories }:any) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const areaChartArgs = {
    className: "mt-5 h-72",
    data: listofcategories[selectedIndex],
    index: "date",
    categories : ['questionsDone'],
    colors: ["yellow"] as Color[],
    showLegend: false,
    yAxisWidth: 60,
  };

  const fortitle = ["Week","Month","6 Months", "Year"]


  return (
    <>
      <div className="md:flex justify-between">
        <div>
          <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
            <Title>Problems Solved in the last {fortitle[selectedIndex]}</Title>
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