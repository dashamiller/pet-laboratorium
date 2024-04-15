export default class User {
  constructor(firstValue, secondValue) {
    this.name = firstValue
    this.age = secondValue

  }
}

export function printName(user) {
  console.log('User\'s name is ' +  user.name)
}

export function printAge(user) {
  console.log('User is ' + user.age + ' years old')
}

