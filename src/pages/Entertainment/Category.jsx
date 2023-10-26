import { Image, Text } from "../../components/ui";
import styles from "./styles/Categoty.module.css";
import { NEUTRAL_COLOR } from "../../constants";
import { useCallback, useEffect, useState } from "react";
import CategorySkeleton from "./CategorySkeleton";
import CategoryFallback from "./CategoryFallback";

export default function Category({ genre }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = genre;

  const fetchMovies = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=c92a1812d52b9947ab6ba910234c503d`
    );

    if (!response.ok) {
      throw new Error("Couldn't fetch movies");
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    const data = await response.json();
    return data;
  }, [id]);

  useEffect(() => {
    setLoading(true);
    fetchMovies()
      .then((res) => {
        setData(res.results.slice(0, 4));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [fetchMovies]);

  let content = "";

  if (loading) {
    content = <CategorySkeleton />;
  } else if (error) {
    content = <CategoryFallback error={error} />;
  } else {
    content = <MapContent data={data} />;
  }

  return (
    <div className={styles.container}>
      <Text color={NEUTRAL_COLOR} step={5} weight="500">
        {genre.name}
      </Text>
      {content}
    </div>
  );
}

const MapContent = ({ data }) => {
  return (
    <div className={styles.list}>
      {data &&
        data.map((movie) => (
          <div className={styles.moviesImage} key={movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
    </div>
  );
};
