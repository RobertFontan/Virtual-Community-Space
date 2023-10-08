const getAllLocations = async () => {
  try {
    const response = await fetch("http://localhost:3000/locations");
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

const getLocationByName = async (locationName) => {
  try{
    const response = await fetch(`http://localhost:3000/locations/${locationName}`);
    const result = await response.json();
    return result;
  }
  catch(error){
    console.log(error);
  }

}

const getLocationById = async (locationId) => {
  try{
    const response = await fetch(`http://localhost:3000/locations/${locationId}`);
    const result = await response.json();
    return result;
  }
  catch(error){
    console.log(error);
  }
}

export default {
  getAllLocations,
  getLocationByName,
  getLocationById
}