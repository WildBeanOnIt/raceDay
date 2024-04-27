let raceNumber = Math.floor(Math.random() * 1001);  //*Random # 1 - 1000

let hasRunnerRegEarly = false;   //* Early or Late for Registry

let runnerAge = 18;     //*Runner Age

//?Create a control flow statement that checks whether the runner is an adult AND registered early.
if (runnerAge >= 18 && hasRunnerRegEarly){
    raceNumber = 1000
}

//?This statement will check age and registration time to determine race time.
if (runnerAge >= 18 && hasRunnerRegEarly) {
    console.log(`Your race will start at 9:30AM. Your RACE NUMBER is ${raceNumber}`);
} else if (runnerAge >= 18 && hasRunnerRegEarly != true){
    console.log(`Late adults run at 11:00AM. Your RACE NUMBER is ${raceNumber}`);
} else {
    console.log(`Youth registrants run at 12:30PM`)
}



console.log(`Race Number Generator: ${raceNumber}`)