/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.innerText = temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement);
    });    
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok) {
        const data = await response.json();
        templeList = data;
    }
    
    displayTemples(templeList);
    console.log(templeList);
}

/* reset Function */
let reset = function() {
    templesElement.innerHTML = "";
};

/* filterTemples Function */
function filterTemples (temples) {
    reset();

    const filter = document.getElementById("filtered").value;
    let filteredTemples = [];

    switch(filter) {
        case "utah":   
            filteredTemples = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(filteredTemples);
            console.log(filteredTemples);
            break;
        case "notutah":
            filteredTemples = temples.filter(temple => !(temple.location.includes("Utah")));
            displayTemples(filteredTemples);
            break;
        case "older":
            let oldDate = (new Date(1950, 0, 1)).getFullYear();
            
            filteredTemples = temples.filter(temple => {
                let templeDate = parseInt(temple.dedicated.split(",")[0]);
                return templeDate < oldDate});
            console.log(filteredTemples);
            displayTemples(filteredTemples);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}

/* Event Listener */
const selector = document.getElementById("filtered");
selector.addEventListener("change", () => {filterTemples(templeList)});


getTemples();