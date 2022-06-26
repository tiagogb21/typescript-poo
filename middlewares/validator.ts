import {IUser} from '../protocols';

export default class Validator {
  errorMessage: string;

  constructor(
    private data: Omit<IUser, 'id'>,
    errorMessage: string  
  ) {
    this.data = data;
    this.errorMessage = 'Invalid name!';
  }

  valid(): void{
    if(!this.data.email) {
      throw new Error(this.errorMessage);
    }
    const rgxEmailValidator = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(!rgxEmailValidator.test(this.data.email)) {
      throw new Error(this.errorMessage);
    }
  }
}
