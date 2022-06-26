const MIN_PASSWORD = 8;

export default class PasswordValidator {
  password: string;
  errorMessage: string;
  
  constructor(
    password: string,
  ) {
    this.password = password;
    this.errorMessage = 'Invalid password!'
  }

  get getPasswordValue() {
    return '';
  }

  isValidPassword() {
    if(!this.password || this.password.length < MIN_PASSWORD)
    throw new Error(this.errorMessage)
  }
}