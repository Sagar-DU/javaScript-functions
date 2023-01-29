//0 1 1 2 3 5 8 13 21 34 55

let f0 = 0, f1 = 1, series = [f0, f1,];

for (let i = 0; i < 10; i++){
    f = f0 + f1;
    series.push(f);
    f0 = f1;
    f1 = f;
}
console.log("first numbers in Fibonacci series is:", series);