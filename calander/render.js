/**
 * Course: COMP 426
 * Assignment: a04
 * Author: <type your name here>
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const createGrid = function(hero) {
    // TODO: Generate HTML elements to represent the hero
    let input = `<button type = "button"> Edit </button><br>`;
    let htmlname = `<div style = "background: ${hero.backgroundColor} "> <span = style = "color: ${hero.color}"> ${hero.name} </span> </div>`;
    let img = `<img src = ${hero.img}>`;
    let fiap = `<p>  ${hero.firstSeen}  </p>`;
    let htmlfirst = `<p style  = "color: ${hero.color}">  ${hero.first}  </p>`;
    let htmllast = `<p style  = "color: ${hero.color}">  ${hero.last}  </p>`;
    let htmldes = `<p style  = "color: ${hero.color}">  ${hero.description}  </p>`;
    return htmlname + htmlfirst + htmllast + htmldes + fiap + input + img;
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<div>${hero.name}</div>`;
};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Generate HTML elements to represent the hero edit form
    var textbox = `<form>Hero name:<br><input type = "text" value = "${hero.name}" > </input></form>`;
    var textbox1 = `<form>First name:<br><input type = "text"  value = "${hero.first}" > </input></form>`;
    var textbox2 = `<form>Last name:<br><input type= "text" value ="${hero.last}"> </input></form>`;
    var textbox3 = `<form>Description:<br><textarea type= "text">${hero.description} </textarea></form>`;
    var date = hero.firstSeen;
    var textbox4 = `<form>First Seen Date:<br><input type= "text" value= "${date}"> </input></form>`;
    let input = `<form><button type = "button"> cancle  </button></form>`;
    let input2 = `<form><button type = "submit"> save </input></form>`;
    return textbox + textbox1 + textbox2 + textbox3 + textbox4 + input + input2;
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<form>${hero.name}</form>`;
};



/**
 * Given an array of hero objects, this function converts the data into HTML and
 *     loads it into the DOM.
 * @param heroes  An array of hero objects to load (see data.js)
 */
export const createCal = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');
    let month = "December";
    let year = 2019;
    let day = "Sunday";
    let date = "8";

    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // TODO: Generate the heroes using renderHeroCard()
    for(var x = 0; x < heroes.length; x++){
        let y = (renderHeroCard(heroes[x]));
        $root.append(y);
    }
    // TODO: Append the hero cards to the $root element

    // Pick a hero from the list at random
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

    // TODO: Generate the hero edit form using renderHeroEditForm()
        let y = (renderHeroEditForm(randomHero));
        $root.append(y);
    // TODO: Append the hero edit form to the $root element
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    createCal();
});