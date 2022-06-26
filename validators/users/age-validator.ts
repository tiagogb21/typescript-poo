export default class AgeValidator {
  age: number;
  errorMessage: string;
  
  constructor(age: number) {
    this.age = age;
    this.errorMessage = 'Invalid age!'
  }

  get getAgeValue() {
    return this.age;
  }

  set isValidAge(age: number) {
    throw new Error(this.errorMessage)
  }
}