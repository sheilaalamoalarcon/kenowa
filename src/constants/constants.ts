import type { ICustomButton } from "@/components/Header.astro";
import { WebRoutesEnum } from "./enums";

export const defaultBttns: ICustomButton[] = [
  {
    title: "Test Prototype",
    href: WebRoutesEnum.LOG_IN,
  },
  {
    title: "Log In",
    href: WebRoutesEnum.LOG_IN,
  },
  {
    title: "Sig In",
    href: WebRoutesEnum.SIGN_IN,
  },
];
export const vendorBttns: ICustomButton[] = [
  {
    title: "global chat",
    href: WebRoutesEnum.GLOBAL_CHAT,
  },
  {
    title: "bag",
    href: WebRoutesEnum.PAYING_HALL,
  },
  {
    title: "log out",
    href: WebRoutesEnum.LOG_OUT,
  },
];
export const userBttns: ICustomButton[] = [
  {
    title: "global chat",
    href: WebRoutesEnum.GLOBAL_CHAT,
  },
  {
    title: "bag",
    href: WebRoutesEnum.PAYING_HALL,
  },
  {
    title: "Store",
    href: WebRoutesEnum.SHOP,
  },
  {
    title: "Log out",
    href: WebRoutesEnum.LOG_IN,
  },
];
