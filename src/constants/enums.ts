export enum API_ROUTES {
  API_HEAD_ROUTE = "http://localhost:3600/api",
  AUTH = "/auth",
  LOGIN = API_HEAD_ROUTE + AUTH + "/login",
  LOGOUT = API_HEAD_ROUTE + AUTH + "/logout",
  REGISTER = API_HEAD_ROUTE + AUTH + "/register",
}
export enum WebRoutesEnum {
  LOG_IN = "/logIn",
  LOG_OUT = "/logOut",
  SIGN_IN = "/signIn",
  RESET_PASSWORD = "/resetPassword",
  GLOBAL_CHAT = "/globalChat",
  PAYING_HALL = "/payingHall",
  SHOP = "/shop",
}
export enum HeaderTypeEnum {
  USER = "user", //is logged in
  USER_WITH_STORE = "vendor", //is logged and have a shop
  PASSENGER = "passenger",
}
export enum ClickActions {
  OPEN_MODULE = "open",
  NONE = "none",
}
export enum ModalChildrens {
  NEW_MESSAGE,
  NONE,
}
