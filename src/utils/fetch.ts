const API_KEY = "KgRpyFjzIMzkKoMdBrKH149BhgmMYOLvI5fE6PsO";
const BASE_URL = "https://api.nasa.gov/planetary/apod";

export default async function fetchData(urlParams?: string): Promise<any> {
  try {
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}${urlParams ? urlParams : ""}`
    );
    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
