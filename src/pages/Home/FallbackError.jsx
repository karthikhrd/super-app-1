import { useAsyncError } from "react-router-dom";
import { Text } from "../../components/ui";
import { ERROR_COLOR } from "../../constants";
import styles from "./styles/FallbackError.module.css";

export default function WeatherError() {
  const error = useAsyncError();

  return (
    <div className={styles.error}>
      <Text step={4} color={ERROR_COLOR}>
        {error.message} 😬
      </Text>
    </div>
  );
}
