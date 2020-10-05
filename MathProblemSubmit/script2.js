const ansForm = document.querySelector(".ans-form");
ansForm.addEventListener("submit", problemChecking);

let queryBox = document.querySelector(".ans-user");
queryBox.setAttribute("id", "answer")

let Score = 0;
let question = 0;


let numRand = () => {
    return Math.floor(Math.random() * 10);
}

let Opt = () => {
    let Operater = ["+", "-", "*"];
    return Operater[Math.floor(Math.random() * 3)];

}

let Creatproblem = () => {
    question = `${numRand()} ${Opt()} ${numRand()}`

    let questionShow = document.createElement("label");
    questionShow.innerHTML = question;

    ansForm.insertBefore(questionShow, ansForm.firstElementChild);
}

function problemChecking(e) {
    e.preventDefault();


    let answer = document.getElementById("answer").value;

    if (answer == eval(question)) {
        Score++;
        alert(`goodjob Your Score : ${Score}`);


    } else {
        alert("กากว่ะ");
    }

    ansForm.removeChild(ansForm.firstElementChild);
    document.getElementById("answer").value = '';
    answer.value = '';
    Creatproblem();

}

Creatproblem();