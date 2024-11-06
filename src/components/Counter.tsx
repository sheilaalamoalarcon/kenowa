import { useEffect, useState } from "preact/hooks";

interface ICounter {
  maxValue: number;
}

export default function Counter({ maxValue }: ICounter) {
  const minValue = 0;
  const [value, setValue] = useState<number>(minValue);

  const buttonBase = ";background: none; border-color: transparent";

  useEffect(() => {
    if (value <= minValue) {
      setValue(0);
    }
    if (value >= maxValue) {
      setValue(maxValue);
    }
  }, [value]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <button
        style={value <= minValue ? `opacity:0` : `display:block, ${buttonBase}`}
        onClick={() => {
          setValue(value - 1);
        }}
      >
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
          <path
            d="M0.181641 4.44012C0.181641 2.23099 1.9725 0.440125 4.18164 0.440125H16.1816C18.3908 0.440125 20.1816 2.23099 20.1816 4.44012V16.4401C20.1816 18.6493 18.3908 20.4401 16.1816 20.4401H4.18164C1.9725 20.4401 0.181641 18.6493 0.181641 16.4401V4.44012Z"
            fill="#F36337"
          />
          <path
            d="M16.4541 10.4404C16.4541 10.9934 16.4061 11.4404 15.8531 11.4404H5.0551C4.5031 11.4404 4.4541 10.9934 4.4541 10.4404C4.4541 9.88737 4.5031 9.44037 5.0551 9.44037H15.8541C16.4061 9.44037 16.4541 9.88737 16.4541 10.4404Z"
            fill="#F5FAF9"
          />
        </svg>
      </button>
      <p>{value}</p>
      <button
        style={value >= maxValue ? `opacity:0` : `display:block, ${buttonBase}`}
        onClick={() => {
          setValue(value + 1);
        }}
      >
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
          <path
            d="M0.455078 4.44012C0.455078 2.23099 2.24594 0.440125 4.45508 0.440125H16.4551C18.6642 0.440125 20.4551 2.23099 20.4551 4.44012V16.4401C20.4551 18.6493 18.6642 20.4401 16.4551 20.4401H4.45508C2.24594 20.4401 0.455078 18.6493 0.455078 16.4401V4.44012Z"
            fill="#F36337"
          />
          <path
            d="M16.4551 10.4401C16.4551 10.9931 16.4071 11.4401 15.8541 11.4401H11.4551V15.8391C11.4551 16.3911 11.0081 16.4401 10.4551 16.4401C9.90208 16.4401 9.45508 16.3911 9.45508 15.8391V11.4401H5.05608C4.50408 11.4401 4.45508 10.9931 4.45508 10.4401C4.45508 9.88712 4.50408 9.44012 5.05608 9.44012H9.45508V5.04112C9.45508 4.48812 9.90208 4.44012 10.4551 4.44012C11.0081 4.44012 11.4551 4.48812 11.4551 5.04112V9.44012H15.8541C16.4071 9.44012 16.4551 9.88712 16.4551 10.4401Z"
            fill="#F5FAF9"
          />
        </svg>
      </button>
    </div>
  );
}
