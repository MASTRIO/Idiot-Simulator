// Variables
const subjectsName = "Barbra";
const maxAmount = 0;
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
    setTimeout(() => { document.write("<br>    30% - Polishing shoes"); }, 2500);
    setTimeout(() => { document.write("<br>    40% - Returning values"); }, 3000);
    setTimeout(() => { document.write("<br>    50% - Setting timeouts"); }, 3500);
    setTimeout(() => { document.write("<br>    60% - Elsing ifs"); }, 4000);
    setTimeout(() => { document.write("<br>    70% - Logging to the console"); }, 4500);
    setTimeout(() => { document.write("<br>    80% - Counting money"); }, 5000);
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

function newEvent(eventOutput) {
    maxAmount = maxAmount + 1;
    return eventOutput
}

function simulateEvent() {
    eventRandomiser = (Math.round(Math.random() * maxAmount));
    maxAmount = 0;

    newEvent("bought new shoes");
        return "fixed a slight imperfection in his hair"
        return "came second in a tutorial"
        return "was the imposter"
        return "bought 10 new cars on the way to school"
        return "came third in a tutorial"
        return "stalked someone"
        return "existed, lol"
        return "played fortnite and went to hell"
        return "drank some mineral water"
        return "sucked someones soul"
        return "attempted to kiss someone..."
        return "asked out someones sister..."
        return "failed a subject"
        return "watched a documentry"
        return "was nerded to death"
        return "didn't sub to technoblade..."
        return "fell asleep"
        return "doubted himself"
        return "sent some e-mails"
        return "was an uncultured swine"
        return "didn't show up to school"
        return "failed to understand JavaScript, lol"
        return "wasted time"
        return "wasted his life"
        return "yelled at a innocent bystander"
        return "thought he was right when he was wrong"
        return "won't give Elisabeth gum"
        return "won't let Elisabeth play pong"
    } else if (eventRandomiser == 29) {
        return "realised that Suzie was doing his work"
    } else if (eventRandomiser == 30) {
        return "bullied a disabled person (AKA Margret)"
    } else if (eventRandomiser == 31) {
        return "acted like an ass (but he doesn't need to)"
    } else if (eventRandomiser == 32) {
        return "threw out a limited edition Ps4"
    } else if (eventRandomiser == 33) {
        return "touched Bethany"
    } else if (eventRandomiser == 34) {
        return "is a Barbie knockoff"
    } else if (eventRandomiser == 35) {
        return "is bad at chess"
    } else if (eventRandomiser == 36) {
        return "was beaten by Bethany in chess"
    }
}

// Start
function start() {
    document.write("<br>Welcome to " + subjectsName + " Simulator!");
    document.write("<br>------------------------------------------------------<br>");

    setTimeout(() => { bootupSystem(); }, 2000);
}