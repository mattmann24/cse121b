/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

const fullName = 'Matthew Shank';

/* Step 2 - Variables */

const currentYear = new Date().getFullYear();

let profilePicture = 'images/profilepicture.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById("food");

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = `${currentYear}`;

imageElement.setAttribute('src', profilePicture); 

//* Added Alt above 

imageElement.setAttribute('alt', `Profile Image of ${fullName}`);

/* Step 5 - Array */

let foodArray = ["Pizza", " Burgers", " Lasagna", " Sushi", " Enchaladas", " Steak "];
foodElement.textContent = foodArray;

foodArray.push(" Tikka Masala");

foodElement.innerHTML += `<br>${foodArray}`;

foodArray.shift();

foodElement.innerHTML += `<br>${foodArray}`;

foodArray.pop();

foodElement.innerHTML += `<br>${foodArray}`;


 