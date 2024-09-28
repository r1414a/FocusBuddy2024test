const postEvents = async(dataToAdd) => {
  try{
    const response = await fetch(`${import.meta.env.VITE_BACKEND_PRO_URL}/api/events`,{
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToAdd)
  })
    const data = await response.json();
    console.log('postEvent',data);
    return data;
  }catch(err){
    console.log(err);
    throw new Error('Error while creating new session.')
  }
    
}

export default postEvents;