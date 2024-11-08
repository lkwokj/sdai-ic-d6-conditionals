// all code for this lab to be completed in this file
let currentTemperature = 30
console.log("currentTemperature", currentTemperature)

//there are two possibilities:  it's freezing or it's not
if (currentTemperature <= 32) { 
    console.log('It is freezing.BRRRR')
} else {
    console.log('It is not freezing, thank goodness')
}

//challenge #2
let age1 = 50
let age2 = "50"

//3 possibilities:  Older, younger or the same age
//if... else if statement

if (age1 > age2) {//older
    console.log("Respect!")
} else if (age1 < age2) {//younger
    console.log("whippersnapper")
} else if (age1 === age2) {//same age, triple equals more strict
    console.log("Cool!")
} else { //capture errors - pro level
    console.log("Error, try again!")
}
