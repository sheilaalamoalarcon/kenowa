enum BaseRoutes {
  API_HEAD_ROUTE = "http://localhost:3600/api",
  AUTH = BaseRoutes.API_HEAD_ROUTE + "/auth",
  USERS = BaseRoutes.API_HEAD_ROUTE + "/users",
  MESSAGES = BaseRoutes.API_HEAD_ROUTE + "/messages",

  POST = "/post",
  GET = "/get/",
  ALL = "/all",
  DELETE = "/delete",
  UPDATE = "/put",
  GET_ID = "/get/",
  DELETE_ID = "/delete/:id",
  UPDATE_ID = "/update/:id",
}

export enum FetchRoutes {
  GET_ALL_MESSAGES = BaseRoutes.MESSAGES + BaseRoutes.ALL,
  GET_SAVED_MESSAGES = BaseRoutes.MESSAGES + "/saved" + BaseRoutes.GET,
  PUT_MESSAGE = BaseRoutes.MESSAGES + BaseRoutes.UPDATE,
}

export enum Routes {
  LOG_OUT = "/logOut",
  LOG_IN = "/logIn",
  GLOBAL_CHAT = "/globalChat",
  PROFILE = "/profile",
  LANDING = "/",
}
export enum ClickActions {
  OPEN_MODULE,
  NAVIGATE,
  NONE,
  LOG_OUT,
  LOG_IN,
  SAVE_POST,
}
export enum ImageSource {
  STOCK_IMAGE_1 = "/stock-image-katsiaryna-endruszkiewicz.png",
  STOCK_IMAGE_2 = "/stock-image-dom-hill.png",
  STOCK_IMAGE_3 = "/stock-image-ave-calvar.png",
  STOCK_IMAGE_4 = "/stock-image-aiony-haust.png",
}
export enum AlertType {
  SUCCESS,
  INFO,
  WARNING,
  ERROR,
}
export enum ContentTypes {
  JSON = "application/json",
  FORM_DATA = "multipart/form-data",
}
