const MIN_CHARS = 2;

const letters = 'abcdefghijklmnopqrstuvxyz';

export default class NameValidator {
  nameValue: string;
  errorMessage: string;

  constructor(nameValue: string){
    this.nameValue = nameValue;
    this.errorMessage = 'Invalid name!'
  }

  get getNameValue() {
    return this.nameValue;
  }

  isValidName() {
    if(
      !this.nameValue
      || typeof this.nameValue !== 'string'
      || this.nameValue.split('').filter((letter) => letters.indexOf(letter) === -1)
      || this.nameValue.trim().length < MIN_CHARS
    ) {
      throw new Error(this.errorMessage);
    }
  }

}
