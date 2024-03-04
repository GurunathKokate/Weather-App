let weather = {

    apiKey : "4db42cd7a9a152e362e9f5b3adbf6731",

    fetchWeather : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=" + this.apiKey
        ).then((response)=>response.json())
        .then((data)=>this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);

        document.querySelector(".city").innerText = 'Weather in ' + name;
        document.querySelector(".icon").src = 'https://openweathermap.org/img/wn/'+icon+'.png';
        document.querySelector('.descrption').innerText = description;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind Speed: " + speed + " km/hr";
        document.querySelector('.weather').classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name+ "')"

    },
    search:function(){

       this.fetchWeather(document.querySelector('.search-bar').value);

    }
}

document
.querySelector('.search button')
.addEventListener('click', function(){
    weather.search()
} )

document.querySelector('.search-bar').addEventListener('keyup', function (event){
    if(event.key == "Enter") 
    {

        // console.log(event.key);
        weather.search()
    } 
})

weather.fetchWeather('bengaluru')
