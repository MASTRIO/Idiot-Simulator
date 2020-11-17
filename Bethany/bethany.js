// Variables
const subjectsName = "Bethany";
const maxAmount = 9;
let eventOutput;
let eventRandomiser;
let lifeSpan;
let startLifeSpan;
let eventsRun = 1;
let increasedToTen = false;

// Functions
function bootupSystem() {
    document.write("<br>Attempting to bootup system:");
    setTimeout(() => { document.write("<br>    00% - Loading variables"); }, 1000);
    setTimeout(() => { document.write("<br>    10% - Pre-running functions"); }, 1500);
    setTimeout(() => { document.write("<br>    20% - Loading events"); }, 2000);
    setTimeout(() => { document.write("<br>    30% - Getting out the chess board"); }, 2500);
    setTimeout(() => { document.write("<br>    40% - Returning values"); }, 3000);
    setTimeout(() => { document.write("<br>    50% - Setting timeouts"); }, 3500);
    setTimeout(() => { document.write("<br>    60% - Elsing ifs"); }, 4000);
    setTimeout(() => { document.write("<br>    70% - Logging to the console"); }, 4500);
    setTimeout(() => { document.write("<br>    80% - Opening Youtube"); }, 5000);
    setTimeout(() => { document.write("<br>    90% - Finalising system bootup"); }, 5500);
    setTimeout(() => { document.write("<br><br>>>> Startup Complete! <<<"); }, 6000);
    setTimeout(() => { beginSimulation(); }, 9000);
}

function beginSimulation() {
    lifeSpan = (Math.round(Math.random() * maxAmount));

    startLifeSpan = lifeSpan;
    document.write("<br><br>Beggining Simulation: (Total events: " + lifeSpan + ")");
    setTimeout(() => { runSimulation(); }, 1000);
}

function runSimulation() {
    simulateEvent();

    if (eventsRun > 9) {
        eventOutput = "{" + eventsRun + "/" + startLifeSpan + "}    $ " + subjectsName + " " + simulateEvent();
    } else {
        eventOutput = "{" + eventsRun + "/" + startLifeSpan + "}     $ " + subjectsName + " " + simulateEvent();
    }

    document.write("<br>" + eventOutput);

    lifeSpan = lifeSpan - 1;
    eventsRun = eventsRun + 1;

    if (lifeSpan > 0) {
        setTimeout(() => { runSimulation(); }, 1500);
    } else {
        setTimeout(() => { document.write("<br><br>>>> The Simulation Has Ended! <<<"); }, 2000);
    }
}

function simulateEvent() {
    eventRandomiser = (Math.round(Math.random() * maxAmount));
    if (eventRandomiser == 0) {
        return "event 0"
    } else if (eventRandomiser == 1) {
        return "event 1"
    } else if (eventRandomiser == 2) {
        return "event 2"
    } else if (eventRandomiser == 3) {
        return "event 3"
    } else if (eventRandomiser == 4) {
        return "event 4"
    } else if (eventRandomiser == 5) {
        return "event 5"
    } else if (eventRandomiser == 6) {
        return "event 6"
    } else if (eventRandomiser == 7) {
        return "event 7"
    } else if (eventRandomiser == 8) {
        return "event 8"
    } else if (eventRandomiser == 9) {
        return "event 9"
    }
}

// Start
function start() {
    document.write("<br>Welcome to " + subjectsName + " Simulator!");
    document.write("<br>------------------------------------------------------<br>");

    setTimeout(() => { bootupSystem(); }, 2000);
}