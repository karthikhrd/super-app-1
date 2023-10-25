import { useAsyncError } from "react-router-dom";
import Fallback from "../../components/ui/Fallback";
import styles from "./styles/NewsCardFallback.module.css";

export default function NewsCardFallback() {
  const error = useAsyncError();

  return (
    <div className={styles.container}>
      <Fallback error={error} />
    </div>
  );
}
