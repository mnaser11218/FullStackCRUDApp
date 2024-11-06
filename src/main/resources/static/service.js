console.log("inside service.js")

class Person{
constructor(firstName, lastName){
this.firstName = firstName;
this.lastName = lastName;
}

}

const updateDisplay = (response) =>{
document.getElementById("output").innerText = JSON.stringify(response);
}

const create = () => {
event.preventDefault()
console.log("inside create method")
const firstName = document.getElementById("fName").value
const lastName = document.getElementById("lName").value
  const person = new Person(firstName, lastName);
  const personData = JSON.stringify(person);

  $.ajax({
  type: "POST",
  crossDomain: true,
  headers: {
  'Accept': 'application/json',
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
  },
  url: 'person-controller/create',
  data:personData,
  success: function (response){
  updateDisplay(response)
  },
  error: function (response){
           updateDisplay(response)
           }
  })
}

const getPerson = ()=> {
event.preventDefault()
console.log("inside get person")
const id = document.getElementById("id").value

  $.ajax({
  type: "GET",
  crossDomain: true,
  headers: {
  'Accept': 'application/json',
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
  },
  url: 'person-controller/read/'+id,
  success: function (response){
  updateDisplay(response)
  },
  error: function (response){
           updateDisplay(response)
           }
  })
}

const readAll = ()=>{
event.preventDefault();
$.ajax({
  type: "GET",
  crossDomain: true,
  headers: {
  'Accept': 'application/json',
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
  },
  url: 'person-controller/readAll',
  success: function (response){
  updateDisplay(response)
  },
  error: function (response){
           updateDisplay(response)
           }
})
}

const updatePerson = ()=>{
event.preventDefault();
const id = document.getElementById("id").value;
const fName = document.getElementById("fName").value;
const lName = document.getElementById("lName").value;

const person = new Person(fName, lName);
const personData = JSON.stringify(person);

$.ajax({
  type: "PUT",
  crossDomain: true,
  headers: {
  'Accept': 'application/json',
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
  },
  url: 'person-controller/update/'+id,
  data:personData,
  success: function (response){
  updateDisplay(response)
  },
  error: function (response){
           updateDisplay(response)
           }
})
}


const deletePerson = ()=>{
event.preventDefault();
const id = document.getElementById("id").value;


$.ajax({
  type: "DELETE",
  crossDomain: true,
  headers: {
  'Accept': 'application/json',
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
  },
  url: 'person-controller/delete/'+id,
  success: function (response){
  updateDisplay(response)
  },
  error: function (response){
           updateDisplay(response)
           }
})
}

const usersByName = ()=>{
event.preventDefault();
const firstName = document.getElementById("fName").value;

$.ajax({
  type: "GET",
  crossDomain: true,
  headers: {
  'Accept': 'application/json',
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
  },
  url: 'person-controller/readAll/'+firstName,
  success: function (response){
  updateDisplay(response)
  },
  error: function (response){
           updateDisplay(response)
           }
})}

