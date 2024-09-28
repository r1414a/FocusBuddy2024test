const fetchEvents = async () => {
    try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_PRO_URL}/api/events`,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(response.ok){
            const jsonArray = await response.json();
            const finalEvents = jsonArray.data;
            // console.log(finalEvents);
            return finalEvents;
        }


    }catch(error){
        console.log(error);
        // throw new Error(error);
        return false;
    }
}


export default fetchEvents;