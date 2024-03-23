/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Sandi Junker",
    photo: "images/profilePicture.jpeg",
    favoriteFoods: ["cheesy bread sticks", "bean paste buns", "cotton candy icecream"],
    hobbies: ["gardening", "video games", "programming"],
    placesLived: [], 
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Michigan", 
        length: "16 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Florida", 
        length: "3 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Utah", 
        length: "2 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Colorado", 
        length: "5 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Arizona", 
        length: "3 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Hawaii", 
        length: "2 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Iraq", 
        length: "5 months"
    }
);
myProfile.placesLived.push(
    {
        place: "Kansas", 
        length: "3 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Alabama", 
        length: "1 year"
    }
);


/* DOM Manipulation - Output */

/* Name */
const title = document.getElementById("name");
title.innerText = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = "A profile photo of Sandi Junker";

/* Favorite Foods List*/
const favFoodsList = document.getElementById("favorite-foods");

myProfile.favoriteFoods.forEach(function(foodItem) {

    let li = document.createElement("li");
    li.textContent = foodItem;
    favFoodsList.appendChild(li);

});

/* Hobbies List */
const hobbiesList = document.getElementById("hobbies");

myProfile.hobbies.forEach(function(hobbyItem) {

    let li = document.createElement("li");
    li.textContent = hobbyItem;
    hobbiesList.appendChild(li);

});

/* Places Lived DataList */
const dataList = document.getElementById("places-lived");     
    
myProfile.placesLived.forEach(function(placeObj, placeName) {
    for (const i in placeObj) {
        if(i == "place") {
            let dt = document.createElement("dt");
            dt.textContent = placeObj[i];
            dataList.appendChild(dt);
        } else {
            let dd = document.createElement("dd");
            dd.textContent = placeObj[i];
            dataList.appendChild(dd);
        }
    }
});