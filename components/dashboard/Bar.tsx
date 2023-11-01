import { BarChart, Card, Subtitle, Title } from "@tremor/react";
  
  

export default function Bar({bardata} : any)
{return (
  <Card className="mt-5">
    <Title>Questions Done by Topic</Title>
    <BarChart
      className="mt-6"
      data={bardata}
      index='topic'
      categories={["count"]}
      colors={["amber"]}
      yAxisWidth={48}
    />
  </Card>
)}