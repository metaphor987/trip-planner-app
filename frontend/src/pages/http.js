export async function addPlan(startDate, endDate, destination, schedule, totalCost){
    const response = await fetch('http://localhost:8800/plans/add', {
        method: 'POST',
        body: JSON.stringify({
            date: [startDate, endDate],
            destination: destination,
            schedule: schedule,
            totalCost: totalCost
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // console.log("after POST method")
    const resData = await response.json();

    if (!response.ok){
        throw new Error("Failed to add a new plan to the database.")
    }
    console.log("resData", resData)
    // return resData.message;
}

export async function getAllPlans(){
    const response = await fetch('http://localhost:8800/plans', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resData = await response.json();

    if (!response.ok){
        throw new Error("Failed to get all plans from the database.")
    } else{
        // console.log("resData", resData)
        // console.log(resData.count)
        // console.log(resData.data[0])
        return resData
    }
}