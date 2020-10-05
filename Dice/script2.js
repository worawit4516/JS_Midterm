let book = {
    id: 145,
    name: {
        name_book: "Dog"
    },
    search: function() {

    }
}


let book2 = new Object;
book2.Id = "Isbn";
book2.search = function() {

}

let book3 = function(params, searchID) {
    this.Id = params;
    this.searchID = searchID;
};


book4 = new book3(15, 50);
console.log(book4);

class book5 {
    constructor(id, name) {
        this._ID = id;
        this._name = name;
    }
    area() {

    }
}

Object.defineProperty(book4, "Id", {
    value: 50,
});
console.log(book4.Id);
console.log(book4.hasOwnProperty('Id'));