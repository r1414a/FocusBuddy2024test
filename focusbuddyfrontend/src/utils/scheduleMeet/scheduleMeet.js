import moment from "moment";

const scheduleMeet = async (duration,start,end) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_PRO_URL}/api/zoom/scheduleMeeting`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({meetDuration: duration, meetStart: start.toISOString(), meetEnd: end.toISOString()}),
        });
        const data = response.json({});
        console.log(data);
      } catch (error) {
        console.error('Error scheduling meeting', error);
      }
}

export default scheduleMeet;