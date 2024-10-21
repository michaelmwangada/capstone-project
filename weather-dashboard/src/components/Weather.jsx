import React, { useEffect } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import lightning from '../assets/lightning.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

export default function Weather() {
  const inputRef=useRef()
  const[weatherData,setWeatherData] = useState(false)
       const search=async (city)=>{
        try{
const url='https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}';

        const response =await fetch(url)
        const data = await response.json();
console.log(data);
setWeatherData({
  windspeed:data.wind.speed,
  temperature:Math.floor(data.main.temp),
  location:data.name,
  
})
        }catch(error){

        }
       }

useEffect(()=>{
  search("london")
},[])


  return (
    <div className='weather'>
      <div className='search-bar'>
      <input ref={inputRef} type="text" placeholder='search' />
      <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)}/>
      </div>
      <img src={clear_icon} alt=""className='weather-icon' />
      <p className='temperature'>16°C</p>
      <p className='location'>russia</p>
      <div className='weather-data'>
        <div className='col'>
          <img src={wind_icon} alt="" />
          <div>
            <p>3.6km/h</p>
            <span>wind speed</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}
