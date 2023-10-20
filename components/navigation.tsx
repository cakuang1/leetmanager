import React, { useState } from "react";

export default function Navigation() {
  const [currPage, setCurrPage] = useState("Problems");

  return (
    <nav className="mt-40">
        <div className=""><h1>{currPage}</h1></div>
      <div className="flex items-center justify-between">
        <div className="">
          <button
            className={`${
              currPage === "Problems" ? "border-b border-leetcodelight" : ""
            } `}
            onClick={() => setCurrPage("Problems")}
          >
            Problems
          </button>
          <button
            className={`${
              currPage === "Calendar" ? "bg-white text-blue-500" : ""
            } px-4 py-2 rounded`}
            onClick={() => setCurrPage("Calendar")}
          >
            Calendar
          </button>
          <button
            className={`${
              currPage === "Metrics" ? "bg-white text-blue-500" : ""
            } px-4 py-2 rounded`}
            onClick={() => setCurrPage("Metrics")}
          >
            Metrics
          </button>
        </div>
      </div>
    </nav>
  );
}
