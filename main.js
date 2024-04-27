let raceNumber = Math.floor(Math.random() * 1000);  //*Random # 1 - 1000

let hasRunnerRegEarly = true;   //* Early or Late for Registry

let runnerAge = 7;     //*Runner Age

//!Create a control flow statement that checks whether the runner is an adult AND registered early.
if (runnerAge >= 18 && hasRunnerRegEarly){
    raceNumber = 1000
} else {
    console.log(`Must be 18 or older to join the race.`)
}

console.log(`Race Number: ${raceNumber}`)
// console.log(`Race Number: ${raceNumber}`);