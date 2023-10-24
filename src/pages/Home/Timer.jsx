import { Circle } from "rc-progress";
import styles from "./styles/Timer.module.css";
import { Text } from "../../components/ui";

export default function Timer() {
  return (
    <div className={styles.timer}>
      <Circle
        percent={75}
        strokeWidth={4}
        strokeColor="#FF6A6A"
        trailColor="transparent"
      />
      <div className={styles.time}>
        <Text step={7} weight="500">00:00:00</Text>
      </div>
    </div>
  );
}
