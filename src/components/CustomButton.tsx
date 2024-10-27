interface Props {
  title: string;
}
export default function CustomButton({ title }: Props) {
  return (
    <button
      id="custom_button"
      style={
        "display: flex;height: 2.625rem;padding: 0.5625rem 7rem;justify-content: center;align-items: center;gap: 0.625rem;flex-shrink: 0;border-radius: var(--Corner-Extra-small, 0.25rem);background: var(--TEXT, #45362f);"
      }
    >
      <p
        id="custom_button_title"
        style={
          "  color: var(--SECONDARY, #fede71);font-size: 1.125rem;font-style: normal;font-weight: 400;line-height: normal;"
        }
      >
        {title}
      </p>
    </button>
  );
}
