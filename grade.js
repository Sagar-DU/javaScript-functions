//Grade Calculations
let score=0;

function Grade(s){
    if (score > 100 || score < 0) {
        console.log("Please inter a valid number.")
    }
    else if (score <=100 && score >=80) {
        console.log("Cool! You've got an A+.");
    }
    else if (score < 80 && score >= 75) {
        console.log("You've got an A.");
    }
    else if (score < 75 && score >= 70) {
        console.log("You've got an A-.");
    }
    else if (score < 70 && score >= 65) {
        console.log ("You've got a B+")
    }
    else if (score < 65 && score >= 60) {
        console.log ("You've got a B")
    }
    else if (score < 60 && score >= 55) {
        console.log ("You've got a B-")
    }
    else if (score < 55 && score >= 50) {
        console.log ("You've got a C+")
    }
    else if (score < 50 && score >= 45) {
        console.log ("You've got a C")
    }
    else if (score < 45 && score >= 40) {
        console.log ("You've got a D")
    }
    else {
        console.log ("Sorry! You've got a F. So, you've failed.")
    }
}
score=-23;
score = 87;
score = 79;
Grade(score);