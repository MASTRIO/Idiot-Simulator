// Variables
let subjectsName = "Elisabeth";
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
    setTimeout(() => { document.write("<br>    30% - Connecting Pro Controller"); }, 2500);
    setTimeout(() => { document.write("<br>    40% - Returning values"); }, 3000);
    setTimeout(() => { document.write("<br>    50% - Setting timeouts"); }, 3500);
    setTimeout(() => { document.write("<br>    60% - Elsing ifs"); }, 4000);
    setTimeout(() => { document.write("<br>    70% - Logging to the console"); }, 4500);
    setTimeout(() => { document.write("<br>    80% - Buying DLC"); }, 5000);
    setTimeout(() => { document.write("<br>    90% - Finalising system bootup"); }, 5500);
    setTimeout(() => { document.write("<br><br>>>> Startup Complete! <<<"); }, 6000);
    setTimeout(() => { beginSimulation(); }, 9000);
}

function beginSimulation() {
    lifeSpan = (Math.round(Math.random() * 50));

    if (lifeSpan < 10) {
        lifeSpan = lifeSpan + 24
    }

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
    eventRandomiser = (Math.round(Math.random() * 10));
    if (eventRandomiser == 0) {
        return "played too much smash bros."
    } else if (eventRandomiser == 1) {
        return "is a bot"
    } else if (eventRandomiser == 2) {
        return "played Spiderman on his ps99999999999999"
    } else if (eventRandomiser == 3) {
        return "fell asleep in maths"
    } else if (eventRandomiser == 4) {
        return "is stinky"
    } else if (eventRandomiser == 5) {
        return "down B'd off the map"
    } else if (eventRandomiser == 6) {
        return "was beaten by steve"
    } else if (eventRandomiser == 7) {
        return "has a big ego"
    } else if (eventRandomiser == 8) {
        return "is a nerd"
    } else if (eventRandomiser == 9) {
        return "is bad at smash bros."
    } else if (eventRandomiser == 10) {
        return "did his work"
    }
}

// Start
function start() {
    document.write("<br>Welcome to " + subjectsName + " Simulator!");
    document.write("<br>------------------------------------------------------<br>");

    setTimeout(() => { bootupSystem(); }, 2000);
}