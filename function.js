// Declaring Function 
function startFan(){
    console.log("go to the switch");
    console.log("and start the fan with the switch");
}

// Calling Function 
// startFan();

// Function with parameter
function bringShingara(taka){
    console.log("mama viya shingarar jonno tk dise", taka);
    console.log("tara tari gorom gorom shingara den!");
}

// Calling the Function 
// bringShingara(100);

// Function with return value
function bringShingara(taka){
    console.log("mama viya shingarar jonno tk dise", taka);
    console.log("tara tari gorom gorom shingara den!");
    var shingaraPrice = 10;
    var shingaraQuantity = taka/shingaraPrice;
    return shingaraQuantity;
}

console.log(bringShingara(200));