// Variables
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
        eventOutput = "{" + eventsRun + "/" + startLifeSpan + "}    $ Nikhil " + simulateEvent();
    } else {
        eventOutput = "{" + eventsRun + "/" + startLifeSpan + "}     $ Nikhil " + simulateEvent();
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
    eventRandomiser = (Math.round(Math.random() * 33));
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
        
        if (eventRandomiser == 1) {
            return "bought " + eventRandomiser + " new car on the way to school"
        } else {
            return "bought " + eventRandomiser + " new cars on the way to school"
        }
    } else if (eventRandomiser == 5) {
        return "came third in a tutorial"
    } else if (eventRandomiser == 6) {
        return "stalked someone"
    } else if (eventRandomiser == 7) {
        return "existed, lol"
    } else if (eventRandomiser == 8) {
        return "played fortnite and went to hell"
    } else if (eventRandomiser == 9) {
        return "drank some mineral water"
    } else if (eventRandomiser == 10) {
        return "sucked someones soul"
    } else if (eventRandomiser == 11) {
        return "attempted to kiss someone..."
    } else if (eventRandomiser == 12) {
        return "asked out someones sister..."
    } else if (eventRandomiser == 13) {
        return "failed a subject"
    } else if (eventRandomiser == 14) {
        return "watched a documentry"
    } else if (eventRandomiser == 15) {
        return "was nerded to death"
    } else if (eventRandomiser == 16) {
        return "didn't sub to technoblade..."
    } else if (eventRandomiser == 17) {
        return "fell asleep"
    } else if (eventRandomiser == 18) {
        return "doubted himself"
    } else if (eventRandomiser == 19) {
        return "sent some e-mails"
    } else if (eventRandomiser == 20) {
        return "was an uncultured swine"
    } else if (eventRandomiser == 21) {
        return "didn't show up to school"
    } else if (eventRandomiser == 22) {
        return "failed to understand JavaScript, lol"
    } else if (eventRandomiser == 23) {
        return "wasted time"
    } else if (eventRandomiser == 24) {
        return "wasted his life"
    } else if (eventRandomiser == 25) {
        return "yelled at a innocent bystander"
    } else if (eventRandomiser == 26) {
        return "thought he was right when he was wrong"
    } else if (eventRandomiser == 27) {
        return "won't give Jacob gum"
    } else if (eventRandomiser == 28) {
        return "won't let Jacob play pong"
    } else if (eventRandomiser == 29) {
        return "realised that Suzie was doing his work"
    } else if (eventRandomiser == 30) {
        return "bullied a disabled person (AKA Johnny)"
    } else if (eventRandomiser == 31) {
        return "acted gay (but he doesn't need to)"
    } else if (eventRandomiser == 32) {
        return "threw out a limited edition Ps4"
    } else if (eventRandomiser == 33) {
        return "touched Aaron"
    }
}

// Start
function start() {
    document.write("<br>Welcome to Nikhil Simulator!");
    document.write("<br>ⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺⲺ");

    setTimeout(() => { bootupSystem(); }, 2000);
}