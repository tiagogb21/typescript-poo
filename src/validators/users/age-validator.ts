export default class AgeValidator {
  age: number;
  errorMessage: string;
  minAge: number;
  
  constructor(
    age: number,
    minAge: number,
  ) {
    this.age = age;
    this.minAge = minAge;
    this.errorMessage = 'Invalid age!'
  }

  get getAgeValue() {
    return this.age;
  }

  set isValidAge(age: number) {
    if(!this.age || this.age < this.minAge)
    throw new Error(this.errorMessage)
  }
}