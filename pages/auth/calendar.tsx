import React from "react"





export default function Calender() {
  return (
    <div>
<div className="kanban-board">
    <div className="column-container">
        <div className="column-header">
            <div className="column-date-container">
                <div className="left">
                    <div className="column-day-text">Fri</div>
                    <div className="column-date-text">Oct 13</div>
                </div>
                <div className="right"></div>
            </div>
            <div>
                <div className="add-card-container">
                    <div className="add-card-left">
                        <div className="add-card-text">Add a task</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="draggable-container">

        </div>
    </div>

</div>



    </div>
  )
}
