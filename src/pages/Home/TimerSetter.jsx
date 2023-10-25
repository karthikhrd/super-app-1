import { Icon } from "@iconify/react";
import { Button, Text } from "../../components/ui";
import { NEUTRAL_COLOR } from "../../constants";
import styles from "./styles/TimerSetter.module.css";

export default function TimerSetter({
  isCounting,
  isRinging,
  setIsCounting,
  dispatch,
  time,
}) {
  const toggleCountDown = () => {
    if (isCounting) {
      dispatch({ type: "reset" });
    } else {
      setIsCounting(true);
    }
  };

  return (
    <div className={styles.container}>
      <Headings />
      <Counter>
        <Hours
          time={time}
          dispatch={dispatch}
          isCounting={isCounting}
          isRinging={isRinging}
        />
        <Text step={7} weight="500">
          :
        </Text>
        <Minutes
          time={time}
          dispatch={dispatch}
          isCounting={isCounting}
          isRinging={isRinging}
        />
        <Text step={7} weight="500">
          :
        </Text>
        <Seconds
          time={time}
          dispatch={dispatch}
          isCounting={isCounting}
          isRinging={isRinging}
        />
      </Counter>
      <Button disabled={isRinging} onClick={toggleCountDown} variant="error">
        {isCounting ? "Stop" : "Start"}
      </Button>
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

const Counter = ({ children }) => {
  return <div className={styles.timer}>{children}</div>;
};

const Hours = ({ time, dispatch, isCounting, isRinging }) => {
  return (
    <div className={styles.setter}>
      <button
        disabled={isCounting || isRinging}
        className={styles.timerButton}
        onClick={() => dispatch({ type: "incrementHours" })}
      >
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          rotate={2}
          color={NEUTRAL_COLOR}
        />
      </button>
      <Text step={7}>{time.hours}</Text>
      <button
        disabled={isCounting || isRinging}
        className={styles.timerButton}
        onClick={() => dispatch({ type: "decrementHours" })}
      >
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          color={NEUTRAL_COLOR}
        />
      </button>
    </div>
  );
};

const Minutes = ({ time, dispatch, isCounting, isRinging }) => {
  return (
    <div className={styles.setter}>
      <button
        disabled={isCounting || isRinging}
        className={styles.timerButton}
        onClick={() => dispatch({ type: "incrementMinutes" })}
      >
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          rotate={2}
          color={NEUTRAL_COLOR}
        />
      </button>
      <Text step={7}>{time.minutes}</Text>
      <button
        disabled={isCounting || isRinging}
        className={styles.timerButton}
        onClick={() => dispatch({ type: "decrementMinutes" })}
      >
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          color={NEUTRAL_COLOR}
        />
      </button>
    </div>
  );
};

const Seconds = ({ time, dispatch, isCounting, isRinging }) => {
  return (
    <div className={styles.setter}>
      <button
        disabled={isCounting || isRinging}
        className={styles.timerButton}
        onClick={() => dispatch({ type: "incrementSeconds" })}
      >
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          rotate={2}
          color={NEUTRAL_COLOR}
        />
      </button>
      <Text step={7}>{time.seconds}</Text>
      <button
        disabled={isCounting || isRinging}
        className={styles.timerButton}
        onClick={() => dispatch({ type: "decrementSeconds" })}
      >
        <Icon
          icon="octicon:triangle-down-24"
          style={{
            fontSize: "2.5rem",
          }}
          color={NEUTRAL_COLOR}
        />
      </button>
    </div>
  );
};
