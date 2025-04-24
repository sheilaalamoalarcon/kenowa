import type { CMessage } from "./Classes";

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
          entry.target.classList.add("animate-fadeIn"); // Add animation class
          entry.target.classList.remove("opacity-0", "translate-y-4");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px",
    }
  );

  elements.forEach((element) => observer.observe(element));
};

export function AddStyleInClassList(
  element: HTMLElement | null,
  stylesToRemove?: string[],
  stylesToAdd?: string[]
) {
  if (!element) return console.error("Element is null");
  if (stylesToRemove) element.classList.remove(...stylesToRemove);
  if (stylesToAdd) element.classList.add(...stylesToAdd);
}
