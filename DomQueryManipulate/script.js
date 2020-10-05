//1.1 show the first menu of appetizer
//1.2 show a second menu item  of soup menu
//1.3 show all menus of vegan class
//1.4 insert a new list item "<li class="seafood">Shrimp Rolls</li>" to the end of appetizer menu 
//1.5 change a classname of Tuna Sandwich to "seafood"
//1.6 insert a new list item "<li class="seafood">Shrimp-Corn Soup></li> before <li class="meat">Beef Soup</li>
//1.7 show the menu category [Appetizer|Soup] of a list item <li class="meat">Beef Soup</li>
//1.8 remove a menu item <li class="meat">Beef Soup</li>

//1 สร้างแอติบิว นำข้อมูลของ ID = appetizer มาใส่
let firstMenu = document.getElementById("appetizer");
console.log(firstMenu.firstElementChild.innerHTML);

//2
console.log(firstMenu.firstElementChild.nextElementSibling.innerHTML);

//3
console.log(document.querySelector(".vegan").innerText);

//4
let newAppitizerNode = document.createElement("li"); // สร้าง Element
newAppitizerNode.innerHTML = "Shrimp Rolls"; // ใส่ข้อมูล
newAppitizerNode.setAttribute("class", "seafood"); // set class
firstMenu.insertBefore(newAppitizerNode, null); // insert
console.log(firstMenu.innerText);

//5
document.getElementsByTagName("li")[2].setAttribute("class", "seafood"); // ใช้ tag li เเล้วเลือกลำดับ Arrey เพื่อ setAttribute

//6
let secondMenu = document.getElementById("soup");
let newSoupNode = document.createElement("li");
newSoupNode.innerHTML = "Shrimp-Corn Soup";
newSoupNode.setAttribute("class", "seafood");
secondMenu.insertBefore(newSoupNode, secondMenu.lastElementChild.previousSibling.previousSibling);
console.log(secondMenu.innerText);

//7 ใช้ลูปเพื่อหาข้อมูลเมนู ที่ตรงกับ Beef Soup ในเเต่ล่ะรายการ
for (let index = 0; index < secondMenu.getElementsByTagName("li").length; index++) {

    if (secondMenu.getElementsByTagName("li")[index].innerText == "Beef Soup") {
        console.log(secondMenu.innerText);
    }

}

for (let index = 0; index < firstMenu.getElementsByTagName("li").length; index++) {

    if (firstMenu.getElementsByTagName("li")[index].innerText == "Beef Soup") {
        console.log(firstMenu.innerText);
    }

};

//8 ลบข้อมูลโดยใช้ตำเเหน่ง Arrey 
secondMenu.removeChild(secondMenu.getElementsByTagName("li")[3]);
console.log(secondMenu.innerText);