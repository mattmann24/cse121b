/* W05: Programming Tasks */

/* Declare and initialize global variables */



const templesElement = document.querySelector('#temples')
var templeList = []

/* from the annoucments video 
function outputTemples(templeList){
    console.log('TEMPLE OUTPUT PARAM', templeList);
    const templesElement = document.querySelector('#temples')
   

    templeList.forEach(temple =>{
        const templeNameH3 = document.createElement('h3')

        templeNameH3.innerHTML = temple.templeName
        templesElement.append(templeNameH3)


    })

}
*/


const displayTemples = (temples) => {
    temples.forEach((temple) => {
        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent += temple.templeName;

        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        img.setAttribute ('width', "270em");

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    }
    )
}




/* async getTemples Function using fetch()*/

const getTemples = async () => {

    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
    //console.log('TEMPLE DATA:', templeList);

    //outputTemples(templeList)


}




function reset(){
    document.querySelector('#temples').innerHTML = '';
}



/* reset Function */




/* sortBy Function */
//getTemples();

const sortby = (temples) => {
    reset()
    const filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        
        case 'nonUtah':
            displayTemples(temples.filter(temple => !(temple.location.includes("Utah"))));
            break;
        
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        
        default:
            displayTemples(temples);
    }

}

/* from the annoucments video 
function compare(temple1, temple2){
    if(temple1.templeName < temple2.templeName){
        return 1
    }
    if(temple1.templeName > temple2.templeName){
        return -1
    }
    else {
        return 0
    }

}
*/
/* Event Listener */

document.querySelector('#sortBy').addEventListener('change', () => { sortby(templeList) });
getTemples();


