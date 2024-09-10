document.addEventListener("DOMContentLoaded",function(){
    const apiKey="b1693ed7ad181ad79817cc99d0523aa3";
    const fetchWeatherMapButton=document.getElementById("fetchWeather");
    const cityInput=document.getElementById("cityInput")
    const weatherResult=document.getElementById("weatherResult");

    fetchWeatherMapButton.addEventListener("click",function(){
        const city=cityInput.value;
        if(city.trim()===""){
            alert("Please enter a city name.");
            return;
        }
        const apiUrl=
        `https://api.openWeathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        fetch(apiUrl)
        .then((response)=>response.json())
        .then((data)=>{
            const temparature=data.main.temp;
            const weatherDescription=data.weather[0].description;
            const weatherOutput=`
            <p>Temparature:${temparature} &deg;c</p>
            <p>Weather : ${weatherDescription}</p>`;
            weatherResult.innerHTML=weatherOutput;
        })
        .catch((error)=>{
            console.error("Error fetching weather data",error);
            weatherResult.innerHTML="weather data is not availbale";
        });
        
    });
});
