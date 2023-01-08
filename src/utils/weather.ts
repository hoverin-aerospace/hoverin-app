const REACT_APP_API_KEY = '5a00154a5emshe33c99a95d576d2p1a8cfajsn5c36f497c7cc';
const REACT_APP_API_HOST = 'weatherapi-com.p.rapidapi.com';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': REACT_APP_API_KEY,
    'X-RapidAPI-Host': REACT_APP_API_HOST,
  },
};

export const CurrentWeather = async () => {
  try {
    const res = await fetch(
      'https://weatherapi-com.p.rapidapi.com/current.json?q=Delhi',
      options,
    );
    const response = await res.json();
    console.log('TCL: CurrentWeather -> response', response);
    return response;
  } catch (error) {
    console.log('Weather API error:', error);
    throw error;
  }
};
