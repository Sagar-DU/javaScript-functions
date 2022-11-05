// Leap Year Check
function isThisALeapYear (year){
    if (year % 4 == 0){
        console.log("Yeaaaaaa! It's a leap Year!", year);
    }
    else{
        console.log("Sorry! This is not a leap year.", year);
    }
}

// Checking
let year = 2022;
year = 2020;
isThisALeapYear(year);