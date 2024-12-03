import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates{
  lat: number;
  lon: number;

}
// TODO: Define a class for the Weather object
//THEN I am presented with the city name, the date, an icon representation of weather conditions, a description of the weather for the icon's alt tag, the temperature, the humidity, and the wind speed
 export class Weather {
  id: number
  main: string 
  description: string
  icon: string

  constructor(id: number, main: string, description:string, icon: string) {
    this.id = id
    this.main= main
    this.description= description
    this.icon= icon
  }
}
/*testing const myWeather = new Weather()
console.log(myWeather)*/

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL?: string;
  private apiKey?: string;
  private cityName: string = 'New York';

  constructor(baseURL?: string, apiKey?: string, cityName?: string) {
    this.baseURL= baseURL ?? 'https://api.openweathermap.org/data/2.5/weather';
    this.apiKey= apiKey ?? '76b5bfdb1e3279a9d4283c0d7ba7dcaa';
    this.cityName= cityName ?? 'New York';
  }
  // TODO: Create fetchLocationData method
   private async fetchLocationData(query: string) {
   return `${this.baseURL}/geo/1.0/direct?q=${this.cityName}&limit=1&appid=${this.apiKey}`;
  }

  // TODO: Create destructureLocationData method
   private destructureLocationData(locationData: Coordinates) {


   }

//description creates geocoding url for the current city 
//returns API url to go geocode current city
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    const geocodeQuery = `${this.baseURL}/geo/1.0/direct?q=${this.cityName}&limit=1&appid=${this.apiKey}`;
  }


  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {

  }


  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {
    const locationData = await this.fetchLocationData(this.cityName);
    return this.destructureLocationData(locationData);
  }


  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {}


  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {}


  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {
    return weatherData.map((weather) => {
      return new Weather(weather.id, weather.main, weather.description, weather.icon);
    });
  }


  // TODO: Complete getWeatherForCity method
 async getWeatherForCity(city: string) {

    const URL = `${this.baseURL} ?q= ${city} & appid=${this.apiKey}`
    const weatherForCity = await fetch(URL)
    console.log(`city data` + JSON.stringify(await weatherForCity.json()))
 }
}


export default new WeatherService();
