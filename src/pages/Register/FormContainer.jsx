import styles from "./styles/FormContainer.module.css";

export default function FormContainer({ children }) {
  return (
    <div className={styles.formContainer}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
