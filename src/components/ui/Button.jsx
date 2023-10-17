import styles from "./styles/Button.module.css";

export default function Button({ text = "button" }) {
  return <button className={styles.button}>{text}</button>;
}
