let numRand = () => {
    return Math.floor(Math.random() * 10);
}

let Opt = () => {
    let Operater = ["+", "-", "*", "/"];
    return Operater[Math.floor(Math.random() * 4)];

}

let numberRound = parseInt(prompt("Input Number :"));

//console.log(Opt());

function RandomQuestion(numberRound) {
    for (let index = 0; index < numberRound; index++) {

        let question = `${numRand()} ${Opt()} ${numRand()}`;
        document.write(`${question} <Input type ="text" value = ${question}/>` + "<br>")


    }
}

RandomQuestion(numberRound);