import axios from "axios";

const API_KEY = "22fcaa80b5174d65b1164952251411";
const API_BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const getWeather = async (cityName, countryCode, aqi) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}?q=${cityName}&country=${countryCode}&key=${API_KEY}&aqi=${aqi}`
    );
    return response.data;
  } catch (error) {
    console.error("Error while calling the API:", error.message);
    throw error; // Re-throw the error for the caller to handle
  }
};

// https://api.weatherbit.io/v2.0/history/energy?lat=38.0&lon=-78.0&start_date=2024-03-03&end_date=2024-03-10&threshold=63&units=I&key=8ff6b1c427824112b02b9f92f1485bbb&tp=daily
