export default class EmailValidator {
  email: string;
  errorMessage: string;

  constructor (email: string) {
    this.email = email;
    this.errorMessage = 'Invalid email!';
  }

  get getEmailValue() {
    return this.email;
  }

  set isValidEmail(data: string) {
    if(!this.email) {
      throw new Error(this.errorMessage);
    }
    const rgxEmailValidator = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(!rgxEmailValidator.test(this.email)) {
      throw new Error(this.errorMessage);
    }
  }
}