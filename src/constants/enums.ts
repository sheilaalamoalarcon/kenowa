export enum API_ROUTES {
  API_HEAD_ROUTE = "http://localhost:3600/api",
  LOGIN = API_HEAD_ROUTE + "/auth/login",
  REGISTER = API_HEAD_ROUTE + "/auth/register",
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
