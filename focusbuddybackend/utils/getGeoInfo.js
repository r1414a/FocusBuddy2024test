async function getGeoInfo(){
    try {
        const response = await fetch("https://ipapi.co/json/", {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          console.log("location",data)
          return {region: data.region,country:data.country};
        }
      } catch (err) {
        console.log(err);
        throw new Error("Something went wrong while getting user location...!");
      }
}

module.exports = getGeoInfo;