export default class UserDomain {
  email;
  password;
  user;
  school;

  constructor(email, password, user, school) {
    this.password = password;
    this.email = email;
  }
}
