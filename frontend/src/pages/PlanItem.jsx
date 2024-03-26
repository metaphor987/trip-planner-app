// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

export default function PlanItem({plan}){
    console.log(plan)
    const handleUpdate = () => {
      
    }

    const handleDelete = () => {

    }
    
    return (
        <div>
          {/* <p>date: [{plan.date[0]}, {plan.date[1]}]</p> */}
          <p>date:</p>
          <p>destination: {plan.destination}</p>
          <p>schedule: {JSON.stringify(plan.schedule)}</p>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
    );
}