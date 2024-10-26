interface CustomInputProps {
  name: string;
  placeholder: string;
}
export default function CustomInput({ name, placeholder }: CustomInputProps) {
  const styles: string[] = [
    "display: flex;width: 20.75rem;flex-direction: column;justify-content: center;align-items: flex-start;gap: 0.3125rem;",
    "color: var(--PRIMARY, #f36337);text-align: center;/* INPUT LABEL BOLD */font-family: Urbanist; font-size: 0.875rem;font-style: normal;font-weight: 700;line-height: normal;text-transform:capitalize",
    "display: flex;flex-direction: column;justify-content: center;align-items: flex-start;align-self: stretch;width: 20.75rem;height: 2.5rem;gap: 0.625rem;padding: 0.5625rem 0.625rem;border-radius: 0.3125rem;border: 1px solid var(--Disabled, #B3B3B3);",
  ];
  return (
    <div style={styles[0]} id={"input-container"}>
      <p style={styles[1]} id="input-title">
        {name}
      </p>
      <input
        style={styles[2]}
        id="input"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
