import { Await, useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";
import UserCard from "./UserCard";
import WeatherCard from "./WeatherCard";
import styles from "./styles/index.module.css";
import { Suspense } from "react";
import NewsCardSkeleton from "./NewsCardSkeleton";
import WeatherCardSkeleton from "./WeatherCardSkeleton";
import FallbackError from "./FallbackError";
import NotesCard from "./NotesCard";
import TimerCard from "./TimerCard";

export default function HomePage() {
  const { news, weather } = useLoaderData();

  return (
    <div className={styles.container}>
      <div className={styles.leftGroup}>
        <div className={styles.topComponents}>
          <div className={styles.userAndWeather}>
            <UserCard />
            <Suspense fallback={<WeatherCardSkeleton />}>
              <Await resolve={weather} errorElement={<FallbackError />}>
                {(resolvedWeather) => <WeatherCard weather={resolvedWeather} />}
              </Await>
            </Suspense>
          </div>
          <NotesCard />
        </div>
        <TimerCard />
      </div>
      <Suspense fallback={<NewsCardSkeleton />}>
        <Await resolve={news} errorElement={<FallbackError />}>
          {(resolvedNews) => <NewsCard news={resolvedNews[0]} />}
        </Await>
      </Suspense>
    </div>
  );
}
