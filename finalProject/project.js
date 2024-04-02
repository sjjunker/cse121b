/* Declare and initialize global variables */
const plantsElement = document.getElementById("plants");
let plantList = [];

/* async displayPlants Function */
const displayPlants = (plants) => {
    plants.forEach(plant => {
        //Create a summary and details element
        const detailsElement = document.createElement("details");
        const summaryElement = document.createElement("summary");

        //create children for summary
        const h3Element = document.createElement("h3");
        h3Element.innerText = plant.plantName;

        const imgElement = document.createElement("img");
        imgElement.src = plant.imageUrl;
        imgElement.alt = plant.location;

        summaryElement.appendChild(h3Element);
        summaryElement.appendChild(imgElement);

        //create the rest of children for details element
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = plant.description;

        const seasonElement = document.createElement("p");
        seasonElement.innerText = plant.season;

        const daysToHarvestElement = documents.createElement("p");
        daysToHarvestElement.innerText = plant.daysToHarvest;

        const typeElement = document.createElement("p");
        typeElement.innerText = plant.type;

        //Append to details
        detailsElement.appendChild(summaryElement);
        detailsElement.appendChild(descriptionElement);
        detailsElement.appendChild(seasonElement);
        detailsElement.appendChild(daysToHarvestElement);
        detailsElement.appendChild(typeElement);
    });    
}

/* async getTemples Function using fetch() */
const getPlants = async () => {
    const response = await fetch("https://api.npoint.io/6fdd660864a779c6c65e");

    if (response.ok) {
        const data = await response.json();
        plantList = data;
    }
    
    displayPlants(plantList);
}

/* reset Function */
let reset = function() {
    plantsElement.innerHTML = "";
};

/* filterTemples Function 
TODO: complete json*/
function filterPlants (plants) {
    reset();

    const filter = document.getElementById("filterPlants").value;
    let filteredPlants = [];

    switch(filter) {
        case "summer":   
            filteredPlants = plants.filter(plant => plant.season.includes("Summer"));
            displayPlants(filteredPlants);
            break;
        case "winter":
            filteredPlants = plants.filter(plant => (plant.season.includes("Winter")));
            displayTemples(filteredTemples);
            break;
        case "spring":   
            filteredPlants = plants.filter(plant => plant.season.includes("Spring"));
            displayPlants(filteredPlants);
            break;
        case "fall":   
            filteredPlants = plants.filter(plant => plant.season.includes("Fall"));
            displayPlants(filteredPlants);
        case "all":
            displayPlants(plants);
            break;
    }
}

/* Event Listener */
const selector = document.getElementById("filterPlants");
selector.addEventListener("change", () => {filterPlants(plantList)});

getPlants();