import { API_ROUTES } from "./enums";

export class CUser {
  _id?: string;
  email: string = "user@anon.com";
  _password: string = "anonPassword@123";

  image?: Blob;
  username?: string;
  lastname?: string;

  constructor(
    email: string,
    _password: string,
    image?: Blob,
    username?: string,
    lastname?: string
  ) {
    this.email = email;
    this._password = _password;
    this.image = image;
    this.username = username;
    this.lastname = lastname;
  }
  async CreateUser() {
    try {
      await fetch(API_ROUTES.REGISTER, {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this._password,
          image: this.image,
          username: this.username,
          lastname: this.lastname,
        }),
      });
    } catch {
      throw new Error("There was an issue with your registration");
    }
  }

  async LogIn() {
    try {
      await fetch(API_ROUTES.LOGIN, {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          _password: this._password,
        }),
      });
    } catch {
      throw new Error("There was an issue with your log in");
    }
  }
}
export class CMessages {
  _id?: string;
  content?: string;
  propietary?: string;

  constructor(content: string, propietary: string) {
    this.content = content;
    this.propietary = propietary;
  }
}
