import { Image, Text } from "../../components/ui";
import { formatDate } from "../../utils/formatDate";
import styles from "./styles/NewsCard.module.css";

export default function NewsCard({ news }) {
  console.log(news)
  const publishedTime = formatDate("2023-09-26T13:00:00Z");

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src={news.urlToImage} alt={news.title} />
        </div>
        <div className={styles.info}>
          <Text step={6} weight="500">{news.title}</Text>
          <Text step={2}>
            {publishedTime.date} | {publishedTime.time}
          </Text>
        </div>
      </div>
      <div className={styles.description}>
        <Text>{news.description}</Text>
      </div>
    </div>
  );
}
