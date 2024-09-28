const sendReport = async ( reportSelect,reportText,reportingUserEmail,reportedUserEmail,reportedUserName) => {
    try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_PRO_URL}/api/user/reportuser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              reportSelect,
              reportText,
              reportingUser: reportingUserEmail,
              reportedUser: reportedUserEmail,
              reportedUserName,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        return response.status;
    }catch (err) {
        console.log(err);
        throw new Error("Error occur while reporting user.");
      }
}

export default sendReport;