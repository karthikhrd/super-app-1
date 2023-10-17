import styles from "./styles/Text.module.css";

export default function Text({
  children,
  step = 3,
  weight = "400",
  color = "inherit",
}) {
  switch (step) {
    case 1:
      return (
        <p
          style={{
            fontWeight: weight,
            color: color,
          }}
          className={styles.stepOne}
        >
          {children}
        </p>
      );
    case 2:
      return (
        <p
          style={{
            fontWeight: weight,
            color: color,
          }}
          className={styles.stepTwo}
        >
          {children}
        </p>
      );
    case 3:
      return (
        <p
          style={{
            fontWeight: weight,
            color: color,
          }}
          className={styles.stepThree}
        >
          {children}
        </p>
      );
    case 4:
      return (
        <p
          style={{
            fontWeight: weight,
            color: color,
          }}
          className={styles.stepFour}
        >
          {children}
        </p>
      );
    case 5:
      return (
        <p
          style={{
            fontWeight: weight,
            color: color,
          }}
          className={styles.stepFive}
        >
          {children}
        </p>
      );
    case 6:
      return (
        <p
          style={{
            fontWeight: weight,
            color: color,
          }}
          className={styles.stepSix}
        >
          {children}
        </p>
      );
    case 7:
      return (
        <p
          style={{
            fontWeight: weight,
            color: color,
          }}
          className={styles.stepSeven}
        >
          {children}
        </p>
      );
    case 8:
      return (
        <p
          style={{
            fontWeight: weight,
            color: color,
          }}
          className={styles.stepEight}
        >
          {children}
        </p>
      );
    case 9:
      return (
        <p
          style={{
            fontWeight: weight,
            color: color,
          }}
          className={styles.stepNine}
        >
          {children}
        </p>
      );
  }
}
