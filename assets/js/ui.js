
class Ui {
    constructor() {
        this.uiContainer = document.getElementById("content");

        this.uiFiveday= document.getElementById("fiveday");
        
        this.city;
    }
    populateUI(data) {
        console.log(data)
        let uvStatus = "";
        if (data.uvi < 3) {
            uvStatus = "green"
        } else if (data.uvi >= 3 && data.uvi < 6){
            uvStatus = "yellow"
        } else if (data.uvi >= 6 && data.uvi <8){
            uvStatus = "orange"
        } else if (data.uvi >= 8 && data.uvi < 11) {
            uvStatus = "red"
        } else {
            uvStatus = "purple"
        }
        this.uiContainer.innerHTML = ""
        this.uiContainer.innerHTML = this.uiContainer.innerHTML+`
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                <h6 class="card-subtitle mb-2 text-muted">Currently, it's ${data.main.temp}F.<br> Highs of ${data.main.temp_max}F.<br> Lows of ${data.main.temp_min}F.<br> Humidity is ${data.main.humidity}%.<br> Wind speed of ${data.wind.speed} MPH.<br> UVI is <span class = "${uvStatus}"> &nbsp; &nbsp;    ${data.uvi}  &nbsp;  &nbsp;  </span></h6>
                <p class="card-text"> Weather conditions are described as: ${data.weather[0].description}</p>
            </div>
        </div>
        
      
        `;
    }

    populateCards(oneCallData) {
        this.uiFiveday.innerHTML = this.uiFiveday.innerHTML +`
        
        `
        this.uiFiveday.innerHTML = "";
        for (let i = 1; i < 6; i++) {
            
            let uvStatus = "";
        if (oneCallData.daily[i].uvi < 3) {
            uvStatus = "green"
        } else if (oneCallData.daily[i].uvi >= 3 && oneCallData.daily[i].uvi < 6){
            uvStatus = "yellow"
        } else if (oneCallData.daily[i].uvi >= 6 && oneCallData.daily[i].uvi <8){
            uvStatus = "orange"
        } else if (oneCallData.daily[i].uvi >= 8 && oneCallData.daily[i].uvi< 11) {
            uvStatus = "red"
        } else {
            uvStatus = "purple"
        }
        
            this.uiFiveday.innerHTML = this.uiFiveday.innerHTML +`
            <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${moment(oneCallData.daily[i].dt,"X").format("MM/DD/YYYY") }</h5>
                <img src="http://openweathermap.org/img/wn/${oneCallData.daily[i].weather[0].icon}@2x.png">
                <h6 class="card-subtitle mb-2 text-muted">High of ${oneCallData.daily[i].temp.max}. <br> Lows of ${oneCallData.daily[i].temp.min}.<br> Humidity is ${oneCallData.daily[i].humidity}%.<br> Wind speed of ${oneCallData.daily[i].wind_speed} MPH.<br> UVI is <span class = "${uvStatus}"> &nbsp; &nbsp; ${oneCallData.daily[i].uvi} &nbsp; &nbsp; </span>.<br> Weather conditions are described as: ${oneCallData.daily[i].weather[0].description}</h6>
                <p class="card-text"></p>
            </div>
            </div>
            `
        }
      
      
    }
   
}
