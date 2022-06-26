import {IUser} from '../protocols/user.interface';

import NameValidator from '../validators/users/name-validator';
import EmailValidator from '../validators/users/email-validator';
import AgeValidator from '../validators/users/age-validator';

export default class Validator {

  // Tipo da interface: "Omit"
  // Deve omitir o atributo "id"
  constructor(private data: Omit<IUser, 'id'>) {
    this.data = data;
  }

  verify() {
    new NameValidator(this.data.name).isValidName;
    new EmailValidator(this.data.email).isValidEmail;
    new AgeValidator(this.data.age, 16).isValidAge;
  }

}
