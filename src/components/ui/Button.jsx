import styles from "./styles/Button.module.css";

export default function Button({
  children = "button",
  variant = "primary",
  disabled = false,
}) {
  const buttonVariant =
    variant === "secondary" ? styles.secondary : styles.primary;

  return (
    <button className={`${styles.button} ${buttonVariant}`} disabled={disabled}>
      {children}
    </button>
  );
}
