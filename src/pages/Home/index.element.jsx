import NewsCard from "./NewsCard";
import UserCard from "./UserCard";
import WeatherCard from "./WeatherCard";
import styles from "./styles/index.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <UserCard />
      <WeatherCard />
      <NewsCard />
    </div>
  );
}
