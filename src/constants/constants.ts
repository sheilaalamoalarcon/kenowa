import { ClickActions, WebRoutesEnum } from "./enums";
import type { CParagraph, CProduct, ImageType } from "./classes";
import { type CastleImage } from "@/components/LandingImages.astro";
import { atom } from "nanostores";

export interface INav {
  title: string;
  href?: WebRoutesEnum;
  icon?: HTMLElement;
  action?: ClickActions;
}
export interface CustomCardClass {
  content: string;
  image: ImageType;
  subtitle?: string;
}
export const defaultBttns: INav[] = [
  {
    title: "log in",
    href: WebRoutesEnum.LOG_IN,
  },
  {
    title: "sign in",
    href: WebRoutesEnum.SIGN_IN,
  },
  {
    title: "global chat",
    href: WebRoutesEnum.GLOBAL_CHAT,
  },
];

export const userBttns: INav[] = [
  {
    title: "profile",
    href: WebRoutesEnum.PROFILE,
  },
  {
    title: "global chat",
    href: WebRoutesEnum.GLOBAL_CHAT,
  },
  {
    title: "log out",
    action: ClickActions.LOG_OUT,
  },
];

export const _defaultCards: CProduct[] = [
  {
    src: "/public/stock-image-aiony-haust.svg",
    title: "test",
    subtitle: "test",
  },
  {
    src: "/public/stock-image-aiony-haust.svg",
    title: "test",
    subtitle: "test",
  },
  {
    src: "/public/stock-image-aiony-haust.svg",
    title: "test",
    subtitle: "test",
  },
  {
    src: "/public/stock-image-aiony-haust.svg",
    title: "test",
    subtitle: "test",
  },
  {
    src: "/public/stock-image-aiony-haust.svg",
    title: "test",
    subtitle: "test",
  },
  {
    src: "/public/stock-image-aiony-haust.svg",
    title: "test",
    subtitle: "test",
  },
];

export const produtDescription: string =
  "Preparate para sumergirte en nuestra web y encontrar los productos con las mejores reviews solo de clientes 100% reales. Share all your visions in the global chat. Search products with honest reviews. Build your fashion online store.";
export const landingCopies: CParagraph[] = [
  {
    title: "Share All Your Visions",
    subtitle: "Connect, Share, and Collaborate",
    description:
      "Join the conversation in our Global Chat! This space is designed for you to connect with the entire community, exchange ideas, get feedback, and spark new discussions. It’s a real-time feature where you can share your thoughts and explore new perspectives with like-minded users. Dive in, start a chat, and let your voice be part of the collective conversation. This is where ideas come to life — together.",
  },
  {
    title: "Search Honest Reviews",
    subtitle: "Find Genuine Insights",
    description:
      "Discover authentic feedback. Skip the noise and get straight to the real experiences from users like you. Whether you're looking for opinions on products, services, or experiences, our platform prioritizes transparency, helping you make informed decisions with trustworthy, unbiased reviews. Find what matters most with confidence.",
  },
  {
    title: "Get Style Inspiration",
    subtitle: "Discover Your Next Look",
    description:
      "Unleash your creativity. Browse a curated selection of looks, ideas, and trends from real users and fashion enthusiasts. Whether you're updating your wardrobe or looking for fresh styling tips, this is your go-to space for discovering the latest trends and finding inspiration tailored to your taste. Start exploring and elevate your style game today!",
  },
];
export const welcomeMessage: string =
  "Welcome to your go-to space for genuine insights and creative inspiration. Explore trusted reviews, share your own experiences, and find fresh style ideas, all in one place. Dive into our global chat to connect with a vibrant community, exchange opinions, and spark new conversations. Whether you're searching for the best recommendations or looking to inspire others, this is where real voices meet innovative ideas. Join the conversation and start exploring now!";

export enum ImagesSourceEnum {
  STOCK_IMAGE_1 = "/stock-image-katsiaryna-endruszkiewicz.png",
  STOCK_IMAGE_2 = "/stock-image-dom-hill.png",
  STOCK_IMAGE_3 = "/stock-image-ave-calvar.png",
  STOCK_IMAGE_4 = "/stock-image-aiony-haust.png",
}
export const landingImages: CastleImage[] = [
  {
    src: ImagesSourceEnum.STOCK_IMAGE_1,
    isRound: true,
  },
  {
    src: ImagesSourceEnum.STOCK_IMAGE_2,
    isRound: false,
  },
  {
    src: ImagesSourceEnum.STOCK_IMAGE_3,
    isRound: true,
  },
  {
    src: ImagesSourceEnum.STOCK_IMAGE_4,
    isRound: false,
  },
];
export const $isOpen = atom<boolean>(false);
export const $isLogged = atom<boolean>(false);
export const $token = atom<string | null>(null);

export const $isFetching = atom<boolean>(false);
export const $userEmail = atom<string>("");
