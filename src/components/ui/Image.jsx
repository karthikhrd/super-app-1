import styles from "./styles/Image.module.css";

export default function Image({ src, alt }) {
  return <img className={styles.image} src={src} alt={alt} />;
}
