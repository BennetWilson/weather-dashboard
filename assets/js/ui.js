
class Ui {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
    }
    populateUI(data) {
        this.uiContainer.innerHTML = `
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Currently, it's ${data.main.temp}F.<br> Highs of ${data.main.temp_max}F.<br> Lows of ${data.main.temp_min}F.<br> Humidity is ${data.main.humidity}%.<br> Wind speed of ${data.wind.speed} miles per hour.</h6>
                <p class="card-text"> Weather conditions are described as: ${data.weather[0].description}</p>
            </div>
        </div>
        `;
    }
    // populateUI(data) {`
    // <div class="row justify-content-center">
    // <div id="5dayForecast" class = "card-deck position-relative ">
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
    //     <div class="card mx-auto mt-5" style="width: 18rem;">
    //         <div class="card-body justify-content-center">
    //             <h5 class="card-title"></h5>
    //             <h6 class="card-subtitle mb-2 text-muted"></h6>
    //             <p class="card-text"></p>
    //         </div>
    //     </div>
    
        
    // </div>
    // </div>
    // `
    // }
}
