const MIN_CHARS = 2;

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

  set isValidName(nameValue: string) {
    if(!this.nameValue || this.nameValue.trim().length < MIN_CHARS) {
      throw new Error(this.errorMessage);
    }
  }

}
