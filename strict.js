"user strict";
let totalEl=document.getElementById('totalContainer');

let tableContainer = document.getElementById("tableContainer");
let myForm = document.getElementById("myform");
let total=0;
let books = [];

function book(bName, bPrice) {
  this.bName = bName;
  this.bPrice = bPrice;
  this.total=total+parseInt(this.bPrice);
  this.bPages = this.random();

  books.push(this);
  saveToLocal();
}

book.prototype.random = function () {
  let min = 1;
  let max = 500;
  let randomP = Math.floor(Math.random() * (max - min) + min);
  return randomP;
};

myForm.addEventListener('submit', creatResultD);
console.log();
function creatResultD(event) {
  event.preventDefault();

  let bName = event.target.bName.value;
  let bPrice = event.target.bPrice.value;

  let newBook = new book(bName, bPrice);

  newBook.render();
  newBook.random();
};

let tableE1 = document.createElement("table");


let trE1 = document.createElement("tr");
let thE1 = document.createElement("th");
thE1.textContent = "Book name";
tableE1.appendChild(thE1);

let thE2 = document.createElement("th");
thE2.textContent = "Book pages";
tableE1.appendChild(thE2);

let thE3 = document.createElement("th");
thE3.textContent = "Price";
tableE1.appendChild(thE3);

tableContainer.appendChild(tableE1);

book.prototype.render = function () {
    total=total+parseInt(this.bPrice);
  let trE1 = document.createElement("tr");

  let tdE1 = document.createElement("td");
  tdE1.textContent = this.bName;
  trE1.appendChild(tdE1);

  let tdE2 = document.createElement("td");
  tdE2.textContent = this.bPages;
  trE1.appendChild(tdE2);

  let tdE3 = document.createElement("td");
  tdE3.textContent = this.bPrice;
  trE1.appendChild(tdE3);

  tableE1.appendChild(trE1);
  tableContainer.appendChild(tableE1);
 let parEl=document.createElement('p');
  parEl.textContent=`The total price is ${this.total}.`
  totalEl.appendChild(parEl);
};

function saveToLocal() {
  let bookObj = JSON.stringify(books);
  localStorage.setItem("bookInLocal", bookObj);
}
 function readFromLocal(){

let stringObj = localStorage.getItem('bookInLocal');
let normalObj= JSON.parse(stringObj);

if(normalObj!==null){

    for(let i=0 ; i<normalObj.length;i++){

     new book(normalObj[i].bName , normalObj[i].bPrice).render();

    }



}
 }
 readFromLocal();