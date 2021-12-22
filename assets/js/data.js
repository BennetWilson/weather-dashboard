const ft = new Fetch();
const ui = new Ui();

const search = document.getElementById("userSearch");
const button = document.getElementById("submit");


button.addEventListener("click", async () => {
    const currentVal = search.value;

        const data = await ft.getCurrent(currentVal)
      
        const oneCallData = await ft.getOneCall(data);
   
        data.uvi = oneCallData.current.uvi
        
        await ui.populateUI(data);
       await ui.populateCards(oneCallData)
        // ui.saveToLs(data);

    
});
