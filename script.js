import User, { printName, printAge } from './second.js';

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('process-button').addEventListener('click', processData);
});

function processData() {
  let firstInput = document.getElementById('first-input').value;

  let secondInput = document.getElementById('second-input').value;
  
  // let result = addNumbers(parseFloat(firstInput), parseFloat(secondInput));

  // Use User class and methods as needed...
  const user = new User(firstInput, secondInput); // Example usage
  printName(user); // Note: Ensure the console is open to see this output
  printAge(user);

  document.getElementById('result').innerHTML = user.name + ' ' + user.age;
}

// function addNumbers(a, b) {
//   if (isNaN(a) || isNaN(b))
//     return "Використовуйте, будь ласка, числа";
//   return a + b;
// }

class Basket  {
  constructor(fruit) {
  this.fruit = fruit;
  this.amount = 7 + 'kg';
  this.when = [];
  }
   getFruits(){
    this.amount +=10;
    const stamp = Date.now();
    const time = new Date (stamp);
     this.when.push(time.toString())
  return this.amount; 
  }
  returnFruit(){
  this.amount -=1 ;
  return this.amount;
  }
  }
  let apples = new Basket('apples');
  // apples.getFruits();
  // const bananas = new Basket('bananas');
  console.log(apples)
  
