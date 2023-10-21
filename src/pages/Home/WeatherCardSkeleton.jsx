import styles from "./styles/WeatherCardSkeleton.module.css";

export default function WeatherCardSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.now}></div>
      <div className={styles.weather}></div>
    </div>
  );
}
