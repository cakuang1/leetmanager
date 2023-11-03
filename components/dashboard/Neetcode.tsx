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
  
  export default function Neetcode() {

    const [curr,setCurr] = useState<string>();


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