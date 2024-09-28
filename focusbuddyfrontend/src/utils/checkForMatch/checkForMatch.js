const checkForMatch = async (start,end,username) => {
    try{    
        const response = await fetch(`${import.meta.env.VITE_BACKEND_PRO_URL}/api/events/checkformatch`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({eventStart: start, eventEnd: end, username: username})
        });
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
        throw new Error("Error while checking if event already booked for given time and date.")
    } 
    
}

export default checkForMatch;