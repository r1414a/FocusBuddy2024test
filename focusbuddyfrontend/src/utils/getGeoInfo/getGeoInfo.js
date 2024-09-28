const getGeoInfo = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong...!");
  }
};


export default getGeoInfo; 