import type { ICustomButton } from "@/components/Header.astro";
import { WebRoutesEnum } from "./enums";
import type { CParagraph, CProduct } from "./classes";
import type { CustomCardClass } from "@/components/CustomCard.astro";
import {
  ImagesSourceEnum,
  type CastleImage,
} from "@/components/LandingImages.astro";
import { atom } from "nanostores";

export const defaultBttns: ICustomButton[] = [
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
    title: "Log out",
    href: WebRoutesEnum.LOG_IN,
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

export const defaultComments: CustomCardClass[] = [
  {
    src: "/public/favicon.svg",
    title: "Madelyn Vaccaro",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. At nunc massa sed eleifend. Facilisis dolor sem amet purus sagittis odio. Adipiscing tempus nibh enim est arcu diam. Pellentesque proin suspendisse egestas ut sed vitae vel. Lectus purus cum diam cursus id pellentesque diam ",
  },
  {
    src: "/public/favicon.svg",
    title: "Madelyn Vaccaro",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. At nunc massa sed eleifend. Facilisis dolor sem amet purus sagittis odio. Adipiscing tempus nibh enim est arcu diam. Pellentesque proin suspendisse egestas ut sed vitae vel. Lectus purus cum diam cursus id pellentesque diam ",
  },
  {
    src: "/public/favicon.svg",
    title: "Madelyn Vaccaro",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. At nunc massa sed eleifend. Facilisis dolor sem amet purus sagittis odio. Adipiscing tempus nibh enim est arcu diam. Pellentesque proin suspendisse egestas ut sed vitae vel. Lectus purus cum diam cursus id pellentesque diam ",
  },
];

export const produtDescription: string =
  "Preparate para sumergirte en nuestra web y encontrar los productos con las mejores reviews solo de clientes 100% reales. Share all your visions in the global chat. Search products with honest reviews. Build your fashion online store.";
export const landingCopies: CParagraph[] = [
  {
    title: "Share All Your Visions: Connect, Share, and Collaborate",
    description:
      "Join the conversation in our Global Chat! This space is designed for you to connect with the entire community, exchange ideas, get feedback, and spark new discussions. It’s a real-time feature where you can share your thoughts and explore new perspectives with like-minded users. Dive in, start a chat, and let your voice be part of the collective conversation. This is where ideas come to life — together.",
  },
  {
    title: "Search Honest Reviews: Find Genuine Insights",
    description:
      "Discover authentic feedback. Skip the noise and get straight to the real experiences from users like you. Whether you're looking for opinions on products, services, or experiences, our platform prioritizes transparency, helping you make informed decisions with trustworthy, unbiased reviews. Find what matters most with confidence.",
  },
  {
    title: "Get Style Inspiration: Discover Your Next Look",
    description:
      "Unleash your creativity. Browse a curated selection of looks, ideas, and trends from real users and fashion enthusiasts. Whether you're updating your wardrobe or looking for fresh styling tips, this is your go-to space for discovering the latest trends and finding inspiration tailored to your taste. Start exploring and elevate your style game today!",
  },
];
export const welcomeMessage: string =
  "Welcome to your go-to space for genuine insights and creative inspiration. Explore trusted reviews, share your own experiences, and find fresh style ideas, all in one place. Dive into our global chat to connect with a vibrant community, exchange opinions, and spark new conversations. Whether you're searching for the best recommendations or looking to inspire others, this is where real voices meet innovative ideas. Join the conversation and start exploring now!";

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
