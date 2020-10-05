let number_input = parseInt(prompt("Input Number : "));
let Opt = ["+", "-", "*"]; // Arrey Operater

for (let i = 0; i < number_input; i++) {
    let num_1 = Math.floor(Math.random() * 10) + 1; // Random Num
    let num_2 = Math.floor(Math.random() * 10) + 1;
    let Showresult = document.createElement('result'); // สร้าง Element result
    Showresult.innerText = "\n" + num_1 + Opt[Math.floor(Math.random() * 3)] + num_2 + " "; // ใส่ค่าลงไปใน Showresult
    let ShowInput = document.createElement("INPUT"); // สร้าง Element INPUT
    ShowInput.setAttribute("type", "text"); // SetAttribute ให้เป็น text
    Showresult.appendChild(ShowInput); // นำ node ShowInput ไปใส่ใน Showresult
    document.getElementsByTagName("form")[0].appendChild(Showresult); //นำ node Showresult ในใส่ในหน้า  document
    ShowInput.setAttribute("value", Showresult.innerText) // SetAttribute นำ ค่าของ Showresult.innerText ไปใส่ในกล่อง ShowInput
}