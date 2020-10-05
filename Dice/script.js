class Player {
    constructor(Id) {
        this._Id = Id;
    }
    get Id() {
        return this._Id;
    }
}

let P1 = new Player(prompt("Input Your Id Player1 : "));
let P2 = new Player(prompt("Input Your Id Player2 : "));

let Dice = {

    faceVlaue: function() {
        const num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        return num;
    }
}

let Maxround = parseInt(prompt("Input Round : "))


document.write("PlayerP1 ID :  " + P1.Id);
document.write("<br>PlayerP2 ID :  " + P2.Id);
document.write("<br>Max Round is : " + Maxround);


function Play() {
    let Playernum = Dice.faceVlaue();
    return Playernum;
}

function roundAt() {
    let scoreP = this.Play();
    return scoreP;
}

var Player1 = { id: P1.Id, roundFace: {}, totalwin: 0, totalScore: 0 };
var Player2 = { id: P1.Id, roundFace: {}, totalwin: 0, totalScore: 0 };
var totaldraw = 0;

for (let i = 0; i < Maxround; i++) {

    Player1.roundFace.round = roundAt();
    document.write("<br><br>Round :" + (1 + i) + "<br> P1 Point : " + Player1.roundFace.round);

    Player2.roundFace.round = roundAt();
    document.write("<br> P2 Point : " + Player2.roundFace.round);

    Player1.totalScore = Player1.totalScore + Player1.roundFace.round;

    Player2.totalScore += Player2.roundFace.round;
    if (Player1.roundFace.round == Player2.roundFace.round) {
        document.write("<br>this Round is Draw : <br>");
        totaldraw++;
    }
    if (Player1.roundFace.round > Player2.roundFace.round) {
        document.write("<br>Player1 is winner in this Round<br>");
        Player1.totalwin++;
    }

    if (Player1.roundFace.round < Player2.roundFace.round) {
        document.write("<br>Player2 is winner in this Round<br>");
        Player2.totalwin++;
    }

}

document.write("<br>Player1 Score : <br>" + Player1.totalScore)
document.write("<br>Player2 Score : <br>" + Player2.totalScore)

if (Player1.totalwin > Player2.totalwin) {

    document.write("<br>Player 1 Is Winner : Total Winner is :" + Player1.totalwin);
}

if (Player1.totalwin < Player2.totalwin) {

    document.write("<br>Player 2 Is Winner : Total Winner is :" + Player2.totalwin);
}

if (Player1.totalwin == Player2.totalwin) {

    document.write("<br>NO Winner");
}