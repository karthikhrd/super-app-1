import styles from "./styles/Button.module.css";

export default function Button({
  children = "button",
  variant = "primary",
  disabled = false,
  onClick,
  icon,
}) {
  const buttonVariant = styles[variant];

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${buttonVariant}`}
      disabled={disabled}
    >
      {children}
      {icon && <div className={styles.icon}>{icon}</div>}
    </button>
  );
}
