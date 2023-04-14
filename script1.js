const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('search-btn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temprature');
const description=document.querySelector('.description');
const humidity1=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');
console.log(location_not_found);
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
   
});
async function checkWeather(city){
    const api_key="80551265d31a93fe8aeaf108d9c8abf8"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&`
    const weather_data=await fetch(`${url}`).then(response=>
        response.json());
    console.log(weather_data.cod);
    if(weather_data.cod ==='404'){
        console.log("a")
         location_not_found.style.display="flex";
         weather_body.style.display="none";

             return;

    }
     weather_body.style.display="flex";
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity1.innerHTML=`${weather_data.main.humidity}`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/h`;
    switch(weather_data.weather[0].main){
        case'Clouds':
         weather_img.src="/assets/cloud.png";
         break;
        case 'Clear':
         weather_img.src="/assets/clear.png";
         break;
        case 'Rain':
            weather_img.src="/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src="/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src="/assets/snow.png";
            break;
        default:
            console.log("0");
         
    }

}