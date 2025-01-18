import type { CMessage } from "./classes";

export function parseDate(value: string) {
  const now = new Date();
  const date = new Date(value);
  const diffInMs = now.getTime() - date.getTime();

  const msToMinutes = 60 * 1000;
  const msToHour = msToMinutes * 60;
  const msToDays = msToHour * 24;

  const days = Math.floor(diffInMs / msToDays);
  const hours = Math.floor(diffInMs % msToDays) / msToHour;
  const minutes = Math.floor(diffInMs % msToHour) / msToMinutes;

  const daysParsed = days.toFixed(0);
  const hoursParsed = hours.toFixed(0);
  const minutesParsed = minutes.toFixed(0);

  if (days === 0 && hoursParsed !== "0" && minutesParsed !== "0") {
    return `${hoursParsed} horas, ${minutesParsed} minutos`;
  } else if (hoursParsed === "0" && minutesParsed != "0") {
    return `${minutesParsed} minutos`;
  } else if (
    minutesParsed === "0" &&
    hoursParsed === "0" &&
    daysParsed === "0"
  ) {
    return `Just Uploaded`;
  }
  return `${daysParsed} días, ${hoursParsed} horas, ${minutesParsed} minutos`;
}

export function sortByDate(messages: CMessage[]): CMessage[] {
  return messages.sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateA - dateB;
  });
}

export const setupScrollAnimation = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn"); // Añade la clase de animación
          entry.target.classList.remove("opacity-0", "translate-y-4");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px",
    }
  );

  elements.forEach((elemnt) => observer.observe(elemnt));
};
