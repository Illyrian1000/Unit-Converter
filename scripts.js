/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//


//pjesa e inputit

const inputBox = document.getElementById("input-box");
const inputBtn = document.getElementById("input-button");

const lengthP = document.getElementById("length-p");
const volumeP = document.getElementById("volume-p");
const massP = document.getElementById("mass-p");


function test(){
    let insertedValue = inputBox.value;

    let ctFeet = insertedValue * 3.28084;
    let ctMeters = insertedValue / 3.28084;

    let ctLiters = insertedValue * 0.264172;
    let ctGallons = insertedValue / 0.264172;

    let ctKilograms = insertedValue * 2.20462;
    let ctPounds = insertedValue / 2.204;


    lengthP.innerHTML = `${insertedValue} meters = ${ctFeet.toFixed(3)} feet | ${insertedValue} feet = ${ctMeters.toFixed(3)} meters`;
    volumeP.innerHTML = `${insertedValue} liters = ${ctLiters.toFixed(3)} gallons | ${insertedValue} gallons = ${ctGallons.toFixed(3)} liters`;
    massP.innerHTML = `${insertedValue} kilos = ${ctKilograms.toFixed(3)} pounds | ${insertedValue} pounds = ${ctPounds.toFixed(3)} kilos`;
}

function clear(){
    inputBox.value = " ";
    lengthP.innerHTML = ``;
    volumeP.innerHTML = ``;
    massP.innerHTML = ``;
}


inputBtn.addEventListener("click", function(){

    test();

});




inputBox.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        test();
    } else if (e.key === ' '){
        clear();
    }
});

