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
  "Preparate para sumergirte en nuestra web y encontrar los productos con las mejores reviews solo de clientes 100% reales. Share all your visions in the global chat. Search products with honest reviews. Build your fashion online store.";
export const landingCopies: CParagraph[] = [
  {
    title: "Share all your visions in the global chat.",
    description:
      "Comparte tus ideas y opiniones con el resto de la comunidad en nuestro chat global.",
  },
  {
    title: "Search products with honest reviews.",
    description:
      "Preparate para sumergirte en nuestra web y encontrar los productos con las mejores reviews solo de clientes 100% reales.",
  },
  {
    title: "Build your online store.",
    description:
      "Crea tu propia tienda online de moda y empieza a vender tus productos en todo el mundo.",
  },
];
export const welcomeMessage: string =
  "Bienvenido a Kenowa. Preparate para sumergirte en nuestra web y encontrar los productos con las mejores reviews solo de clientes 100% reales. Share all your visions in the global chat. Search products with honest reviews. Build your fashion online store.";

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
