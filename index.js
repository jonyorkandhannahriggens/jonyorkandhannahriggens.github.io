let img;
let rigsPic;
let rigsWCoffeePic;
let pizzaPic;
let speechBubble;
let speechBubble2;

let stage = 0;

let fullConvo = [
    {from: 'pizza', text: 'Hi, seems like we got off on the \nwrong foot. Sorry about that.'},
    {from: 'rigs', text: 'hi maybe you can make it\nup to me somehow'},
    {from: 'pizza', text: 'Ok great would you like a coffee?'},
    {from: 'rigs', text: 'yea that sounds lovely!'},
    {from: 'pizza', text: 'Here you go!'},
    {from: 'rigs', text: 'wow this is the best coffee \nI\'ve ever had. you\'re forgave.'},
    {from: 'pizza', text: 'Thanks. A wise person once said\n"Nothing is guaranteed, but choosing joy is"'},
    {from: 'pizza', text: 'Hannah -- will you choose me as your joy\nfor date night?'},
];

let convo = [];

// Load the image.
function preload() {
  img = loadImage('/assets/banner.png');
  rigsPic = loadImage('/assets/rigs.png');
  rigsWCoffeePic = loadImage('/assets/rigswcoffee.png');
  pizzaPic = loadImage('/assets/pizza.png');
  speechBubble = loadImage('/assets/speechbubble.png');
  speechBubble2 = loadImage('/assets/speechbubble2.png');
}

function setup() {
    canv = createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < fullConvo.length; i++) {
        setTimeout(() => {
            convo.push(fullConvo[i]);
        }, 4500 * i);
    }
    textSize(22);
    setInterval(() => {
        stage++;
        if (stage == 8) {
            document.getElementById("yes-no-modal").style.display = "flex";
        }
    }, 4500);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(250, 150, 150);

    image(img, windowWidth / 2 - 256, 0);
    image(stage <= 3 ? rigsPic : rigsWCoffeePic, windowWidth / 2 - 275 - 50, windowHeight - 572);
    image(pizzaPic, windowWidth / 2 + 50, windowHeight - 600);

    for (let i = 0; i < convo.length; i++) {
        if (convo[i].from == 'pizza') {
            image(speechBubble2, windowWidth / 2 - 256, windowHeight - 800 - (convo.length - i - 1) * 200);
            text(convo[i].text, windowWidth / 2 - 196, windowHeight - 700 - (convo.length - i - 1) * 200);
        } else {
            image(speechBubble, windowWidth / 2 - 256, windowHeight - 800 - (convo.length - i - 1) * 200);
            text(convo[i].text, windowWidth / 2 - 196, windowHeight - 700 - (convo.length - i - 1) * 200);
        }

    }
}

function yes() {
    document.getElementById("yes-no-modal").style.display = "none";
    convo.push(
        {from: 'rigs', text: "YES!!!!!!!!!"}
    );
    setTimeout(() => {
        convo.push({from: 'pizza', text: "GOD IS REAL! GOD IS GOOD! REJOYCE!"});
    }, 4500);
    setTimeout(() => {
        convo.push({from: 'rigs', text: "where did all this confetti come from?"});
    }, 4500 * 2);
    setTimeout(() => {
        convo.push({from: 'pizza', text: "Idk but it sure is cool!\nSee ya at date night!!"});
    }, 4500 * 3);
    setInterval(confetti, 500);
}
