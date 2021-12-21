
class Ui {
    constructor() {
        this.uiContainer = document.getElementById("content");

        this.uiFiveday= document.getElementById("fiveday");
        this.city;
    }
    populateUI(data) {
        this.uiContainer.innerHTML =       this.uiContainer.innerHTML+`
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Currently, it's ${data.main.temp}F.<br> Highs of ${data.main.temp_max}F.<br> Lows of ${data.main.temp_min}F.<br> Humidity is ${data.main.humidity}%.<br> Wind speed of ${data.wind.speed} MPH.<br> Uv is ${data.uvi}</h6>
                <p class="card-text"> Weather conditions are described as: ${data.weather[0].description}</p>
            </div>
        </div>
        
      
        `;
    }

    populateCards(oneCallData) {
        this.uiFiveday.innerHTML =  this.uiFiveday.innerHTML +`
        
        `
        for (let i = 1; i < 6; i++) {
            
            this.uiFiveday.innerHTML =  this.uiFiveday.innerHTML +`
            <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${moment(oneCallData.daily[i].dt,"X").format("MM/DD/YYYY") }</h5>
                <h6 class="card-subtitle mb-2 text-muted">High of ${oneCallData.daily[i].temp.max}. <br> Lows of ${oneCallData.daily[i].temp.min}.<br> Humidity is ${oneCallData.daily[i].humidity}%.<br> Wind speed of ${oneCallData.daily[i].wind_speed} MPH.<br> UVI is ${oneCallData.daily[i].uvi}.</h6>
                <p class="card-text"></p>
            </div>
            </div>
            `
        }
      
      
    }
    // populateUI(data) {`
   
    
    //     <div class="card mx-auto mt-5" style="width: 18rem;">
    //         <div class="card-body justify-content-center">
    //             <h5 class="card-title"></h5>
    //             <h6 class="card-subtitle mb-2 text-muted"></h6>
    //             <p class="card-text"></p>
    //         </div>
    //     </div>
    //     <div class="card mx-auto mt-5" style="width: 18rem;">
    //         <div class="card-body justify-content-center">
    //             <h5 class="card-title"></h5>
    //             <h6 class="card-subtitle mb-2 text-muted"></h6>
    //             <p class="card-text"></p>
    //         </div>
    //     </div>
    //     <div class="card mx-auto mt-5" style="width: 18rem;">
    //         <div class="card-body justify-content-center">
    //             <h5 class="card-title"></h5>
    //             <h6 class="card-subtitle mb-2 text-muted"></h6>
    //             <p class="card-text"></p>
    //         </div>
    //     </div>
    //     <div class="card mx-auto mt-5" style="width: 18rem;">
    //         <div class="card-body justify-content-center">
    //             <h5 class="card-title"></h5>
    //             <h6 class="card-subtitle mb-2 text-muted"></h6>
    //             <p class="card-text"></p>
    //         </div>
    //     </div>
    
        
  
    // `
    // }
}
