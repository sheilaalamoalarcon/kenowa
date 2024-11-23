export class CUser {
  _id?: string;
  email: string = "user@anon.com";
  _password: string = "anonPassword@123";
  image: ImageType = new ImageType(new ArrayBuffer(0), "");
  username: string = "";

  bag?: string[]; //id de cada producto

  constructor(
    email: string,
    _password: string,
    image: ImageType,
    username: string
  ) {
    this.email = email;
    this._password = _password;
    this.image = image;
    this.username = username;
  }
}

export class ImageType {
  data: ArrayBufferLike = new ArrayBuffer(0);
  type: string = "";

  constructor(data: ArrayBufferLike, type: string) {
    this.data = data;
    this.type = type;
  }
}

export class CMessage {
  _id: string = "";
  content: string = "";
  propietary: string = ""; //propietary id
  image: ImageType = new ImageType(new ArrayBuffer(0), "");
  created_at: string = "";

  constructor(
    _id: string,
    content: string,
    propietary: string,
    image: ImageType,
    created_at: string
  ) {
    this._id = _id;
    this.content = content;
    this.propietary = propietary;
    this.image = image;
    this.created_at = created_at;
  }
}

export class CProduct {
  src: string = "";
  title: string = "";
  subtitle: string = "";

  constructor(src: string, title: string, subtitle: string) {
    this.src = src;
    this.title = title;
    this.subtitle = subtitle;
  }
}
export class CParagraph {
  title: string = "";
  subtitle: string = "";
  description: string = "";

  constructor(title: string, subtitle: string, description: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
  }
}
