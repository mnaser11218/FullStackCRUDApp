console.log("inside service.js")

class Person{
constructor(id, firstName, lastName){
this.id = id;
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
const id = document.getElementById("id").value
  const person = new Person(id, firstName, lastName);
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
}