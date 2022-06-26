import { IUser } from "../protocols/user.interface";
import AgeValidator from "../validators/users/age-validator";
import EmailExists from "../validators/users/email-validator";
import NameValidator from "../validators/users/name-validator";

const MIN_AGE = 16;

export default class Validator {
  // Tipo da interface: "Omit"
  // Deve omitir o atributo "id"
  constructor(private data: Omit<IUser, 'id'>) {
    this.data = data;
  }

  valid(): void {
    new AgeValidator(this.data.age, MIN_AGE).isValidAge();
    new EmailExists(this.data.email).isValidEmail();
    new NameValidator(this.data.name).isValidName();
  }
}
