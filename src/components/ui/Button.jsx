import styles from "./styles/Button.module.css";

export default function Button({
  children = "button",
  variant = "primary",
  disabled = false,
  onClick,
  onIconClick,
  icon,
}) {
  const buttonVariant = styles[variant];
  const buttonWithIcon = icon ? styles.withIcon : "";

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${buttonVariant} ${buttonWithIcon}`}
      disabled={disabled}
    >
      {children}
      {icon && (
        <button onClick={onIconClick} className={styles.icon}>
          {icon}
        </button>
      )}
    </button>
  );
}
