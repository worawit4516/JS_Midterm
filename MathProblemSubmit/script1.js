const ansForm = document.querySelector(".ans-form");
ansForm.addEventListener("submit", problemChecking);

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let Opt = ["+", "*", "-"];
let question = 0;

function CreatProblem() {
    let textbox = document.createElement("label");
    textbox.setAttribute("for", "answer");

    question = "\n" + num1 + Opt[Math.floor(Math.random() * 3)] + num2;
    textbox.innerHTML = question;

    ansForm.firstElementChild.setAttribute("id", "answer");

    ansForm.insertBefore(textbox, ansForm.firstElementChild);

}



function problemChecking(e) {
    e.preventDefault();

    let answer = document.getElementById("answer");

    if (answer.value == eval(question)) {
        alert("good job");
    } else {
        alert("Bad");
    }
    ansForm.removeChild(ansForm.firstElementChild);
    CreatProblem();
}

CreatProblem();