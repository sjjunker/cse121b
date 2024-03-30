/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = temples => {
    templeList.forEach(async temple => {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.innerText = await temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.src = await temple.imageUrl;
        imgElement.alt = await temple.location;

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
}

/* reset Function */
let reset = function() {
    templesElement.innerHTML = "";
};

/* filterTemples Function */
function filterTemples (temples) {
    reset();

    let filter = document.getElementById("filtered").value;
    let filteredTemples = [];

    switch (filter) {
        case "utah":   
            filteredTemples = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(filteredTemples);
            break;
        case "noutah":
            filteredTemples = temples.filter(temple => !(temple.location.includes("Utah")));
            displayTemples(filteredTemples);
            break;
        case "older":
            let oldDate = new Date(1950, 0, 1);
            filteredTemples = temples.filter(temple => temple.dedicated < oldDate);
            displayTemples(filteredTemples);
            break;
        case "all":
            displayTemples(filteredTemples);
            break;
    }
}

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {filterTemples(templeList)});

getTemples();