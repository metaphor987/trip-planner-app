import { useState, useEffect } from 'react';
import { getAllPlans } from "./http.js";
import PlanItem from "./PlanItem.jsx";
import { Link } from "react-router-dom";

export default function AllPlans(){

    const [allPlans, setAllPlans] = useState([])

    useEffect(() => {
        async function fetchMenuItems() {
          try{
            const resData = await getAllPlans();
            console.log(resData);
            // console.log(typeof(resData.count))
            setAllPlans(resData.data)
          }catch(err){
            console.log(err)
          }
        }

        fetchMenuItems()
      }, [])

    return (
        <div>
            <h1>View All Travel Plans</h1>

            <button><Link to="/inspiration">Get AI inspirations for a New Trip!</Link></button>
            <button><Link to="/add">Add a New Plan Directly</Link></button>
            <div>
            {allPlans.map(eachPlan => (
                <PlanItem 
                    plan = {eachPlan}
                // key={eachPlan.id}  
                // planInfo={getExistingInfo(eachPlan.id)}
                // {...eachPlan}
                />
            ))}
            </div>
        </div>
    )
}