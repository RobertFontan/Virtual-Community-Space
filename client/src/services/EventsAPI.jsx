
const getAllEvents = async () => {
  try{
    const response = await fetch("http://localhost:3000/events");
    const result = await response.json();
    return result;
  }
  catch(error){
    console.log(error);
  }
}

const getEventById = async (eventId) => {
  try{
    const response = await fetch(`http://localhost:3000/events/${eventId}`);
    const result = await response.json();
    return result;
  }
  catch(error){
    console.log(error);
  }
}

const getEventsByLocationId = async (locationId) => {
  try{
    const response = await fetch(`http://localhost:3000/events/location/${locationId}`);
    const result = await response.json();
    console.log(result)
    return result;
  }
  catch(error){
    console.log(error);
  }
}

export default {
  getAllEvents,
  getEventById,
  getEventsByLocationId
}






// }