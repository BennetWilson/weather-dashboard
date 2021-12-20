const ft = new Fetch();
const ui = new Ui();

const search = document.getElementById("userSearch");
const button = document.getElementById("submit");


button.addEventListener("click", () => {
    const currentVal = search.value;

    ft.getCurrent(currentVal).then((data) => {
        ui.populateUI(data);
        // ui.saveToLs(data);
    });
});