export default class User {
  firstName: String;
  lastName: String;
  emailId: String;
  phoneNumber: String;
  isLoggedIn: boolean;
  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.emailId = '';
    this.phoneNumber = '';
    this.isLoggedIn = false;
  }
}
