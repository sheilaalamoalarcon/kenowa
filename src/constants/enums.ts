enum BASE_ROUTES {
  API_HEAD_ROUTE = "http://localhost:3600/api",
  AUTH = BASE_ROUTES.API_HEAD_ROUTE + "/auth",
  USERS = BASE_ROUTES.API_HEAD_ROUTE + "/users",
  MESSAGES = BASE_ROUTES.API_HEAD_ROUTE + "/messages",

  POST = "/post",
  GET = "/get",
  ALL = "/all",
  DELETE = "/delete",
  UPDATE = "/update",
  GET_ID = "/get/",
  DELETE_ID = "/delete/:id",
  UPDATE_ID = "/update/:id",
}

export enum API_ROUTES {
  LOGIN = BASE_ROUTES.AUTH + "/login",
  LOGOUT = BASE_ROUTES.AUTH + "/logout",
  REGISTER = BASE_ROUTES.AUTH + "/register",

  GET_USER = BASE_ROUTES.USERS + BASE_ROUTES.GET_ID,
  GET_ALL_MESSAGES = BASE_ROUTES.MESSAGES + BASE_ROUTES.ALL,
  POST_MESSAGE = BASE_ROUTES.MESSAGES + BASE_ROUTES.POST,
}

export enum WebRoutesEnum {
  LOG_IN = "/logIn",
  LOG_OUT = "/logOut",
  SIGN_IN = "/signIn",
  RESET_PASSWORD = "/resetPassword",
  GLOBAL_CHAT = "/globalChat",
  PAYING_HALL = "/payingHall",
  PROFILE = "/profile",
  SHOP = "/shop",
  LANDING = "/",
}
export enum HeaderTypeEnum {
  USER, //is logged in
  PASSENGER,
}
export enum ClickActions {
  OPEN_MODULE,
  NAVIGATE,
  NONE,
  LOG_OUT,
}
export enum ModalChildrens {
  NEW_MESSAGE,
  NONE,
}
export enum ImagesSourceEnum {
  STOCK_IMAGE_1 = "/stock-image-katsiaryna-endruszkiewicz.png",
  STOCK_IMAGE_2 = "/stock-image-dom-hill.png",
  STOCK_IMAGE_3 = "/stock-image-ave-calvar.png",
  STOCK_IMAGE_4 = "/stock-image-aiony-haust.png",
}
