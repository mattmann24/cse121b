/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Matthew Shank",
    photo: "images/profilepicture.jpg",

    favoriteFoods:  [
        "Pizza",
        "Lasagna",
        "Enchaladas",
        "Crab"
    ],

    hobbies: [
        '3D printing',
        'Youtuber',
        'The Gym'
    ],

    
/* Populate Profile Object with placesLive objects */
    placesLived: []

}

myProfile.placesLived.push (
    {
        place: 'Saratoga Springs, UT ',
        length: '2 years : '
    },
    { 
        place: 'Vineyard, UT ',
        length: '3 year : '
    },
    {
        place: 'Rexburg, ID ',
        length: '1 Year : '
    },
    {
        place: 'Whidbey Island ',
        length: '18 years '
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */

photo.setAttribute('src', myProfile.photo); 
photo.setAttribute('alt', `Profile Image of ${myProfile.name}`);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})


/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */


myProfile.placesLived.forEach(placeLived =>{

    let dt = document.createElement('place');
    dt.textContent = placeLived.place;
    let dd = document.createElement('length');
    dd.textContent = placeLived.length; 

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
    
}) 



