import styles from "./styles.module.css";
import { useEffect, useState } from "preact/hooks";

export default function Loader() {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const value = localStorage.getItem("isFetching");
    if (value === null) {
      setIsFetching(false);
    }
    if (value === null) {
      setIsFetching(value === true ? true : false);
    }
  }, [isFetching]);

  return <div class={`${isFetching ? styles.loader : styles.none}`}></div>;
}
