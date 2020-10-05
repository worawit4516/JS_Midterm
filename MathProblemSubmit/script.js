const ansForm = document.querySelector(".ans-form");
ansForm.addEventListener("submit", problemChecking);

// Random Num
let num_1 = Math.floor(Math.random() * 10) + 1;
let num_2 = Math.floor(Math.random() * 10) + 1;
let Opt = ["+", "-", "*"]
let question = 0;

const problemGen = () => {

    // creat textbox ที่เป็น label
    let textbox = document.createElement('label');
    textbox.setAttribute("for", "answer"); // setAttribute for answer

    // Random question
    question = num_1 + Opt[Math.floor(Math.random() * 3)] + num_2;
    textbox.innerHTML = question; // ใส่ค่าลงไปใน textbox

    // Set id to <input> tag
    ansForm.firstElementChild.setAttribute("id", "answer");

    // Append tags to ansForm
    ansForm.insertBefore(textbox, ansForm.firstElementChild);

}

function problemChecking(e) {
    e.preventDefault();

    // Fetch answer ใส่คำตอบ
    let answer = document.getElementById("answer");
    console.log(answer.value);

    // Check the answer เช็คคำตอบ
    if (answer.value == eval(question)) {
        //eval(question) คือ นำค่าของ question ที่คำนวนเเล้วมาเช็คว่า == answer.value ที่ใส่เขามาไหม 
        //(question = "3+1" เเละ  eval(question) == 4)

        alert(`Good job \nYour correct answer is ${answer.value}`);
    } else {
        alert(`Try it out! \nYour wrong answer is ${answer.value}`)
    }

    //reset node เเละ ค่า answer
    ansForm.removeChild(ansForm.firstElementChild);
    answer.value = '';

    //refunction
    problemGen();
}

problemGen();