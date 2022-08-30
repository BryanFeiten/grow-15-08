export interface Notification {
  fieldName: string,
  message: string,
}

export class Validator {
  process: string;
  isValid = true;
  readonly notifications: Notification[] = [];

  constructor(process: string) {
    this.process = process;
  }

  isRequired(property: any, fieldName: string) {
    if (!property) {
      this.#addNotification(fieldName, 'Este campo é obrigatório');
    }
  }

  isMinLength(minLength: number, property: any, fieldName: string) {
    if (!property) return;

    if (property.length < minLength) {
      this.#addNotification(fieldName, `Este campo deve ter no mínimo ${minLength} caractéres`);
    }
  }

  isMaxLength(maxLength: number, property: any, fieldName: string) {
    if (!property) return;

    if (property.length < maxLength) {
      this.#addNotification(fieldName, `Este campo deve ter no máximo ${maxLength} caractéres`);
    }
  }

  isValidEmail(email: string) {
    if (!email) return;
    let validEmail = false;

    if (email) {
      const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

      validEmail = regex.test(email.toLowerCase());
    }


    if (!validEmail) {
      this.#addNotification('E-mail', 'Informação inválida');
    }
  }

  #addNotification(fieldName: string, message: string) {
    this.notifications.push({ fieldName, message });
  }

  validate() {
    this.isValid = this.notifications.length === 0;
  }
}