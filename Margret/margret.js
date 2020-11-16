// Variables
let subjectsName = "Margret";
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
    setTimeout(() => { document.write("<br>    30% - Finding a Moose"); }, 2500);
    setTimeout(() => { document.write("<br>    40% - Returning values"); }, 3000);
    setTimeout(() => { document.write("<br>    50% - Setting timeouts"); }, 3500);
    setTimeout(() => { document.write("<br>    60% - Elsing ifs"); }, 4000);
    setTimeout(() => { document.write("<br>    70% - Logging to the console"); }, 4500);
    setTimeout(() => { document.write("<br>    80% - Bullying disrespectiful people"); }, 5000);
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
    eventRandomiser = (Math.round(Math.random() * 9));
    if (eventRandomiser == 0) {
        return "is a moose"
    } else if (eventRandomiser == 1) {
        return "got them free v-bucks"
    } else if (eventRandomiser == 2) {
        return "jumped off Mount Everest"
    } else if (eventRandomiser == 3) {
        return "spoke in a wierd voice"
    } else if (eventRandomiser == 4) {
        return "was disrespectful"
    } else if (eventRandomiser == 5) {
        return "Spoke to Ty"
    } else if (eventRandomiser == 6) {
        return "went away"
    } else if (eventRandomiser == 7) {
        return "couldn't do a situp"
    } else if (eventRandomiser == 8) {
        return "hurt his leg"
    } else if (eventRandomiser == 9) {
        return "got surgery"
    }
}

// Start
function start() {
    document.write("<br>Welcome to " + subjectsName + " Simulator!");
    document.write("<br>------------------------------------------------------<br>");

    setTimeout(() => { bootupSystem(); }, 2000);
}