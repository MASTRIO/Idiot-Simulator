// Variables
let eventOutput;
let eventRandomiser;
let lifeSpan;

// Functions
function bootupSystem() {
    console.log("Attempting to bootup system:");
    setTimeout(() => { console.log("    00% - Booting up Nikhil Simulator."); }, 1000);
    setTimeout(() => { console.log("    10% - Booting up Nikhil Simulator.."); }, 1300);
    setTimeout(() => { console.log("    20% - Booting up Nikhil Simulator..."); }, 1600);
    setTimeout(() => { console.log("    30% - Booting up Nikhil Simulator."); }, 1900);
    setTimeout(() => { console.log("    40% - Booting up Nikhil Simulator.."); }, 2200);
    setTimeout(() => { console.log("    50% - Booting up Nikhil Simulator..."); }, 2500);
    setTimeout(() => { console.log("    60% - Booting up Nikhil Simulator."); }, 2800);
    setTimeout(() => { console.log("    70% - Booting up Nikhil Simulator.."); }, 3100);
    setTimeout(() => { console.log("    80% - Booting up Nikhil Simulator..."); }, 3400);
    setTimeout(() => { console.log("    90% - Booting up Nikhil Simulator."); }, 3700);
    setTimeout(() => { console.log(">>> Startup Complete! <<<"); }, 4000);
    setTimeout(() => { beginSimulation(); }, 5000);
}

function beginSimulation() {
    console.log("\nBeggining Simulation:");
    setTimeout(() => { runSimulation(); }, 1000);
}

function runSimulation() {
    lifeSpan = (Math.round(Math.random() * 30));

    simulateEvent();

    eventOutput = "> Nikhil " + simulateEvent();
    console.log(eventOutput);

    lifeSpan = lifeSpan - 1;
    if (lifeSpan > 0) {
        setTimeout(() => { runSimulation(); }, 1000);
    } else {
        console.log(">>> The Simulation Has Ended! <<<")
    }
}

function simulateEvent() {
    eventRandomiser = (Math.round(Math.random() * 9));
    if (eventRandomiser == 0) {
        return "bought new shoes"
    } else if (eventRandomiser == 1) {
        return "fixed a slight imperfection in his hair"
    } else if (eventRandomiser == 2) {
        return "came second in a tutorial"
    } else if (eventRandomiser == 3) {
        return "was the imposter"
    } else if (eventRandomiser == 4) {
        eventRandomiser = (Math.round(Math.random() * 20));
        return "bought " + eventRandomiser + " new cars on the way to school"
    } else if (eventRandomiser == 5) {
        return "came third in a tutorial"
    } else if (eventRandomiser == 6) {
        return "stalked someone"
    } else if (eventRandomiser == 7) {
        return "became gay"
    } else if (eventRandomiser == 8) {
        return "played fortnite and went to hell"
    } else if (eventRandomiser == 9) {
        return "drank some mineral water"
    }
}

// Start
console.log("\nWelcome to Nikhil Simulator!");
console.log("ⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺ");

setTimeout(() => { bootupSystem(); }, 2000);