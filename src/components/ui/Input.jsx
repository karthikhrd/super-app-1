import Text from "./Text";
import styles from "./styles/Input.module.css";

export default function Input({
  type = "text",
  placeholder = "Something",
  isInvalid,
  value,
  onChange,
  onBlur,
  invalidMessage,
}) {
  return (
    <div className={styles.inputContainer}>
      <input
        id="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={styles.input}
      />
      {isInvalid && (
        <Text step={2} color="rgb(255, 115, 115)">
          {invalidMessage}
        </Text>
      )}
    </div>
  );
}
