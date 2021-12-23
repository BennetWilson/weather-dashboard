const ft = new Fetch();
const ui = new Ui();

const search = document.getElementById("userSearch");
const button = document.getElementById("submit");


let history = [];
if (localStorage.getItem("cities")){
    history = JSON.parse(localStorage.getItem("cities"))
}
button.addEventListener("click", async () => {
    const currentVal = search.value;

        const data = await ft.getCurrent(currentVal)
      
        const oneCallData = await ft.getOneCall(data);
   
        data.uvi = oneCallData.current.uvi
        console.log(data)
        await ui.populateUI(data);
       await ui.populateCards(oneCallData)
        // ui.saveToLs(data);
        if(history.indexOf(data.name) === -1) {
            history.push(data.name)
            localStorage.setItem("cities",JSON.stringify(history) )
        }
        
        // await populateList(history);
   

    
}); 
// async function  populateList(history){
//     const currentVal = search.value;

//     const data = await ft.getCurrent(currentVal)
      
//         const oneCallData = await ft.getOneCall(data);
//     console.log(data)
//     let list = document.getElementById("recentSearches");
//     list.innerHTML = "";
//     for (let i = 0; i < history.length; i++) {
//         list.innerHTML = list.innerHTML + `<li><button class = "historyBtn">${history[i]}</button></li>`
        
//     }
//     const historyBtn = document.querySelectorAll(".historyBtn");
//     for (let i = 0; i < historyBtn.length; i++) {
//         historyBtn[i].addEventListener("click", async function(event)  {
//           await  ui.populateUI(data);
//            await ui.populateCards(oneCallData);
//         })
        
//     }
// }
// populateList(history);