//1.1 show the first menu of appetizer
//1.2 show a second menu item  of soup menu
//1.3 show all menus of vegan class
//1.4 insert a new list item "<li class="seafood">Shrimp Rolls</li>" to the end of appetizer menu 
//1.5 change a classname of Tuna Sandwich to "seafood"
//1.6 insert a new list item "<li class="seafood">Shrimp-Corn Soup></li> before <li class="meat">Beef Soup</li>
//1.7 show the menu category [Appetizer|Soup] of a list item <li class="meat">Beef Soup</li>
//1.8 remove a menu item <li class="meat">Beef Soup</li>

//1
let firstMenu = document.getElementById("appetizer");
console.log(firstMenu.firstElementChild.innerHTML);

//2
let SecondMenu = document.getElementById("soup");
console.log(SecondMenu.firstElementChild.nextElementSibling.innerHTML);
console.log(SecondMenu.getElementsByTagName("li")[1].innerHTML);

//3
console.log(SecondMenu.querySelector(".vegan").innerHTML)

//4
let neweElementnode = document.createElement("li");
neweElementnode.innerHTML = "Shrimp Rolls";
neweElementnode.setAttribute("class", "seafood");
firstMenu.appendChild(neweElementnode);
console.log(firstMenu.innerText);


let neweElementnode2 = document.createElement("li");
neweElementnode2.innerHTML = "ควย";
neweElementnode2.setAttribute("class", "ตวย2");
firstMenu.appendChild(neweElementnode2);
console.log(firstMenu.innerText);

//5
// firstMenu.getElementsByTagName("li")[2].setAttribute("class", "seafood");
// console.log(firstMenu.getElementsByTagName("li")[2]);

for (let index = 0; index < firstMenu.children.length; index++) {
    if (firstMenu.children[index].innerHTML == "Tuna Sandwich") {
        firstMenu.children[index].setAttribute("class", "seafood")
        console.log(firstMenu.children[index]);

    }


}
let corrent_Element = firstMenu.firstElementChild;
for (let index = 0; index < firstMenu.children.length; index++) {
    if (corrent_Element.innerHTML == "Tuna Sandwich") {
        corrent_Element.setAttribute("class", "meat");
        console.log(corrent_Element);
    }

    corrent_Element = corrent_Element.nextElementSibling;

}


//6
let neweElementnode3 = document.createElement("li");
neweElementnode3.innerHTML = "Shrimp-Corn Soup";
neweElementnode3.setAttribute("class", "seafood");
SecondMenu.insertBefore(neweElementnode3, SecondMenu.getElementsByTagName("li")[2])
console.log(SecondMenu.innerText);

//7
for (let index = 0; index < SecondMenu.children.length; index++) {

    if (SecondMenu.getElementsByTagName("li")[index].innerText == "Beef Soup") {
        console.log(SecondMenu.getElementsByTagName("li")[index].parentElement.id);
    }

}

for (let index = 0; index < firstMenu.children.length; index++) {

    if (firstMenu.getElementsByTagName("li")[index].innerText == "Beef Soup") {
        console.log(firstMenu.getElementsByTagName("li")[index].parentElement.id);
    }

}

//8
let corrent_Element2 = SecondMenu.firstElementChild;

for (let index = 0; index < SecondMenu.children.length; index++) {

    if (corrent_Element2.innerText == "Beef Soup") {
        SecondMenu.removeChild(corrent_Element2);
        console.log(SecondMenu.innerText);
        break;
    }
    corrent_Element2 = corrent_Element2.nextElementSibling;

}