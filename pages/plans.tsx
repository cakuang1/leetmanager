import React from "react"
import Layout from "@/components/layout"
import Neetcode from "@/components/dashboard/plans/Neetcode"
import { useEffect,useState } from "react";


export default function Plans() {
  const [questions, setQuestions] = useState<any>(null);

  useEffect(() => {
    const apiUrl = "/api/userquestions/graball";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Once data is fetched, update the state with the questions
        setQuestions(data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });

  }, []);


  return (
    <Layout showFooter = {false}>
      {questions != null ?  <Neetcode takein = {questions}/> : ''}
      </Layout>
  )
}





