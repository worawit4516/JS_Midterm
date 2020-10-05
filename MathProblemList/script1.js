let number_input = parseInt(prompt("Put your Number of math gernerate :"));
let Opt = ["+", "-", "*"];

for (let index = 0; index < number_input; index++) {
    let num_Rand1 = Math.floor(Math.random() * 10 - 2)
    let num_Rand2 = Math.floor(Math.random() * 10 - 2)

    let resultShow = document.createElement("result");
    resultShow.innerText = "\n" + num_Rand1 + Opt[Math.floor(Math.random() * 3)] + num_Rand2;
    resultShow.setAttribute("type", "text");

    let resultText = document.createElement("input");
    resultShow.appendChild(resultText);

    document.getElementsByTagName("form")[0].appendChild(resultShow);
    resultText.setAttribute("value", resultShow.innerText);

}