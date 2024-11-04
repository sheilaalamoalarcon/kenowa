import type { ICustomButton } from "@/components/Header.astro";
import { WebRoutesEnum } from "./enums";
import type { CParagraph, CProduct } from "./classes";
import type { CustomCardClass } from "@/components/CustomCard.astro";
import {
  ImagesSourceEnum,
  type CastleImage,
} from "@/components/LandingImages.astro";

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
  "Lorem ipsum dolor sit amet consectetur. Donec est ultricies diam enim eget facilisi aliquet. Odio laoreet pretium turpis bibendum pulvinar. Eu ut ipsum nibh elementum neque sit non aliquet sit. Cras bibendum egestas malesuada sagittis. Orci eu dolor quam pellentesque elit ultricies ullamcorper. Pellentesque molestie quis non placerat amet. Fermentum diam consectetur ultricies est duis justo. Duis  placerat nascetur interdum elit venenatis auctor felis fermentum. Viverra in ac mauris integer eu odio. Et aliquet laoreet gravida dictum velit orci vehicula nibh morbi. Porttitor turpis tristique tortor ut.";
export const landingCopies: CParagraph[] = [
  {
    title: "Share all your visions in the global chat.",
    description:
      "Lorem ipsum dolor sit amet consectetur. At nunc massa sed eleifend. Facilisis dolor sem amet purus sagittis odio. Adipiscing tempus nibh enim est arcu diam. Pellentesque proin suspendisse egestas ut sed vitae vel. Lectus purus cum diam cursus id pellentesque diam. Cursus vehicula orci phasellus cum nullam sagittis sagittis varius. Non orci convallis arcu ultrices aliquam senectus. Mauris vitae mi id a posuere in id. Nulla sit nisl magna ligula nisl. Sit nibh tristique semper",
  },
  {
    title: "Search products with honest reviews.",
    description:
      "Lorem ipsum dolor sit amet consectetur. At nunc massa sed eleifend. Facilisis dolor sem amet purus sagittis odio. Adipiscing tempus nibh enim est arcu diam. Pellentesque proin suspendisse egestas ut sed vitae vel. Lectus purus cum diam cursus id pellentesque diam. Cursus vehicula orci phasellus cum nullam sagittis sagittis varius. Non orci convallis arcu ultrices aliquam senectus. Mauris vitae mi id a posuere in id. Nulla sit nisl magna ligula nisl. Sit nibh tristique semper",
  },
  {
    title: "Build your online store.",
    description:
      "Lorem ipsum dolor sit amet consectetur. At nunc massa sed eleifend. Facilisis dolor sem amet purus sagittis odio. Adipiscing tempus nibh enim est arcu diam. Pellentesque proin suspendisse egestas ut sed vitae vel. Lectus purus cum diam cursus id pellentesque diam. Cursus vehicula orci phasellus cum nullam sagittis sagittis varius. Non orci convallis arcu ultrices aliquam senectus. Mauris vitae mi id a posuere in id. Nulla sit nisl magna ligula nisl. Sit nibh tristique semper",
  },
];
export const welcomeMessage: string =
  "Lorem ipsum dolor sit amet consectetur. At nunc massa sed eleifend. Facilisis dolor sem amet purus sagittis odio. Adipiscing tempus nibh enim est arcu diam. Pellentesque proin suspendisse egestas ut sed vitae vel. Lectus purus cum diam cursus id pellentesque diam. Cursus vehicula orci Lorem ipsum dolor sit amet consectetur. At nunc massa sed eleifend. Facilisis dolor sem amet purus sagittis odio. Adipiscing tempus nibh enim est arcu diam. Pellentesque proin suspendisse egestas ut sed vitae vel. Lectus purus cum diam cursus id pellentesque diam. Cursus vehicula orci phasellus cum nullam sagittis sagittis varius. Non orci convallis arcu ultrices aliquam senectus. Mauris vitae mi id a posuere in id. Nulla sit nisl magna ligula nisl. Sit nibh tristique semper";

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
