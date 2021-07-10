export default class Validator {
  constructor(login) {
    this.login = login;
  }

  validateUsername() {
    return (!(/\d{4}/.test(this.login)) && !(/[^\w-]/.test(this.login)) && (/^[^-_\d]+[\w-]+[^-_\d]$/.test(this.login)));
  }
}
