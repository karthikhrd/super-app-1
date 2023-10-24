import { Icon } from "@iconify/react";
import { Button, Text } from "../../components/ui";
import { NEUTRAL_COLOR } from "../../constants";
import styles from "./styles/TimerSetter.module.css";

export default function TimerSetter() {
  return (
    <div className={styles.container}>
      <Headings />
      <Counter />
      <Button variant="error">Pause</Button>
    </div>
  );
}

const Headings = () => {
  return (
    <div className={styles.heading}>
      <Text step={4} color={NEUTRAL_COLOR} weight="500">
        Hours
      </Text>
      <Text step={4} color={NEUTRAL_COLOR} weight="500">
        Minutes
      </Text>
      <Text step={4} color={NEUTRAL_COLOR} weight="500">
        Seconds
      </Text>
    </div>
  );
};

const Counter = () => {
  return (
    <div className={styles.timer}>
      <div className={`${styles.hour} ${styles.setter}`}>
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          rotate={2}
          color={NEUTRAL_COLOR}
        />
        <Text step={7}>00</Text>
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          color={NEUTRAL_COLOR}
        />
      </div>
      <Text step={7} weight="500">
        :
      </Text>
      <div className={`${styles.minute} ${styles.setter}`}>
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          rotate={2}
          color={NEUTRAL_COLOR}
        />
        <Text step={7}>00</Text>
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          color={NEUTRAL_COLOR}
        />
      </div>
      <Text step={7} weight="500">
        :
      </Text>
      <div className={`${styles.seconds} ${styles.setter}`}>
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          rotate={2}
          color={NEUTRAL_COLOR}
        />
        <Text step={7}>00</Text>
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          color={NEUTRAL_COLOR}
        />
      </div>
    </div>
  );
};
