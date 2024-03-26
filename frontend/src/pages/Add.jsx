import { useState } from 'react';
import { addPlan } from "./http";

export default function Add(){
    const [startDate, setStartDate] = useState("2024-03-25");
    const [endDate, setEndDate] = useState("2024-03-25");
    const [destination, setDestination] = useState("");
    const [schedule, setSchedule] = useState([
        {
            date: "", 
            place: "",
            notes: "",
            cost: 0
        }
    ]);
    const [totalCost, setTotalCost] = useState(0);

    const handleClick=()=>{
        setSchedule([...schedule,{
            date: "", 
            place: "",
            notes: "",
            cost: 0
        }])
    }

    const handleChange=(e,i)=>{
        const {name,value}=e.target
        const onchangeVal = [...schedule]
        onchangeVal[i][name]=value
        setSchedule(onchangeVal)
    }

    const handleSaveSchedule = () => {
        setSchedule(schedule);
        console.log("saved version: ", schedule)
    }

    const handleSavePlan = () => {
        addPlan(startDate, endDate, destination, schedule, totalCost);
    }
    
    return (
        <div>
            <h1>Add a New Travel Plan</h1>
            <div>
                <div>
                    <label><h2>1. start date</h2></label>
                    <input
                        type='date'
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
        
                <div>
                    <label><h2>2. end date</h2></label>
                    <input
                        type='date'
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <h2>3. schedule</h2>
                <button onClick={handleClick}>Add</button>
                {
                    schedule.map((val,i)=>
                    <div>
                        <div>
                            <label>Date</label>
                            <input name="date" type='date' value={val.date} onChange={(e)=>handleChange(e,i)} />
                        </div>
                        <div>
                            <label>Place</label>
                            <input name="place" type='text' value={val.place} onChange={(e)=>handleChange(e,i)} />
                        </div>
                        <div>
                            <label>Notes</label>
                            <input name="notes" type='text' value={val.notes} onChange={(e)=>handleChange(e,i)} />
                        </div>
                        <div>
                            <label>Cost</label>
                            <input name="cost" type='number' value={val.cost} onChange={(e)=>handleChange(e,i)} />
                        </div>
                    </div>
                    )
                }
                <p>{JSON.stringify(schedule)}</p>
            
            <button onClick={handleSaveSchedule}>
                Save this Schedule
            </button>

            <div>
                <label><h2>4. total cost</h2></label>
                <input
                    type='number'
                    value={totalCost}
                    onChange={(e) => setTotalCost(e.target.value)}
                />
            </div>

            <button onClick={handleSavePlan}>
                Save this new plan
            </button>
      </div>
    </div>
    )
}