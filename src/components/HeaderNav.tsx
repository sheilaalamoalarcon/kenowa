import { useEffect, useState } from "preact/hooks";
import type { ICustomButton } from "./Header.astro";

interface HeaderNavProps {
  buttons: ICustomButton[];
}
function RenderButtons(buttons: ICustomButton[]) {
  return buttons.map(({ href, title }: ICustomButton) => (
    <a
      href={href}
      id="button"
      style={
        "color: var(--PURE_WHITE, #f5faf9);text-align: center;/* HEADING_1 */font-size: 3rem;font-style: normal;font-weight: 400;line-height: 110%;"
      }
    >
      {title}
    </a>
  ));
}

function BurgerMenu(color: string) {
  return (
    <svg
      width="72"
      height="44"
      viewBox="0 0 72 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H68"
        stroke={color}
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        d="M4 22H68"
        stroke={color}
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        d="M4 40H68"
        stroke={color}
        stroke-width="8"
        stroke-linecap="round"
      />
    </svg>
  );
}
export default function HeaderNav(params: HeaderNavProps) {
  const { buttons } = params;
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <nav
      id="button-group"
      style={"display: flex;align-items: center;gap: 2.9375rem;"}
    >
      {width > 700
        ? RenderButtons(buttons)
        : BurgerMenu("var(--white, #f36337)")}
    </nav>
  );
}
