import Timer from "./Timer";
import TimerSetter from "./TimerSetter";
import styles from "./styles/TimerCard.module.css";

export default function TimerCard() {
  return (
    <div className={styles.container}>
      <Timer />
      <TimerSetter />
    </div>
  );
}
