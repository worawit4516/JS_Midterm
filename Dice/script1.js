class Player {
    constructor(Id) {
        this._Id = Id;
    }
    get Id() {
        return this._Id;
    }

}

let player1 = new Player(prompt("Input Player1 ID :"));

let player2 = new Player(prompt("Input Player2 ID :"));

const roundInput = parseInt(prompt("Input Your Round : "));

let dice = {
    faceValue: function() {
        const num = Math.floor(Math.random() * (6 + 1 - 1));
        return num;
    }
}
console.log(player1.Id);
console.log(player2.Id);
console.log(dice.faceValue());

function Play() {
    let Playernum = dice.faceValue();
    return Playernum;
}

function RoundAT() {
    let score = this.Play();
    return score;
}

var P1 = { id: player1.Id, roundFace: {}, totalwin: 0, totalScore: 0 };

var P2 = { id: player2.Id, roundFace: {}, totalwin: 0, totalScore: 0 };

var totaldraw = 0

for (let i = 0; i < roundInput; i++) {
    P1.roundFace.round = RoundAT();
    document.write("<br>Round : " + (1 + i) + "<br>");
    document.write("<br>P1 Score : " + P1.roundFace.round + "<br>");

    P2.roundFace.round = RoundAT();
    document.write("<br>P2 Score : " + P2.roundFace.round + "<br>");

    P1.totalScore = P1.totalScore + P1.roundFace.round;
    P2.totalScore = P2.totalScore + P2.roundFace.round;

    if (P1.roundFace.round == P2.roundFace.round) {
        document.write("<br>Draw<br>");
        totaldraw++;
    }

    if (P1.roundFace.round > P2.roundFace.round) {
        document.write("<br>P1 Win<br>");
        P1.totalwin++;
    }

    if (P1.roundFace.round < P2.roundFace.round) {
        document.write("<br>P2 Win<br>");
        P2.totalwin++;
    }


}

document.write("<br>P1 Total score : " + P1.totalScore + "<br>");

document.write("<br>P2 Total score : " + P2.totalScore + "<br>");

if (P1.totalScore > P2.totalScore) {
    document.write("P1 Win this game")
}

if (P1.totalScore < P2.totalScore) {
    document.write("P2 Win this game")
}

if (P1.totalScore == P2.totalScore) {
    document.write("NO one Win this game")
}