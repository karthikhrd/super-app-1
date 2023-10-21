import { Await, useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";
import UserCard from "./UserCard";
import WeatherCard from "./WeatherCard";
import styles from "./styles/index.module.css";
import { Suspense } from "react";
import NewsCardSkeleton from "./NewsCardSkeleton";
import WeatherCardSkeleton from "./WeatherCardSkeleton";

export default function HomePage() {
  const { news, weather } = useLoaderData();

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <UserCard />
        <Suspense fallback={<WeatherCardSkeleton />}>
          <Await resolve={weather}>
            {(resolvedWeather) => <WeatherCard weather={resolvedWeather} />}
          </Await>
        </Suspense>
      </div>
      <Suspense fallback={<NewsCardSkeleton />}>
        <Await resolve={news}>
          {(resolvedNews) => <NewsCard news={resolvedNews[0]} />}
        </Await>
      </Suspense>
    </div>
  );
}
