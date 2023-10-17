import { useState } from "react";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../constants";
import { Button, Input, Text } from "../../components/ui/index.js";
import styles from "./styles/Form.module.css";
import { useInputValidation } from "./useInputValidation.js";
import {
  contactValidation,
  emailValidation,
  nameValidation,
  userNameValidation,
} from "../../utils/inputValidation";

export default function Form() {
  const [isChecked, setIsChecked] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const {
    input: nameInput,
    handleInputChange: handleNameInputChange,
    handleIsTouched: handleNameIsTouched,
    enteredInputIsValid: enteredNameIsValid,
    isInvalidInput: isInvalidName,
    reset: resetName,
  } = useInputValidation((value) => nameValidation(value));

  const {
    input: usernameInput,
    handleInputChange: handleUsernameInputChange,
    handleIsTouched: handleUsernameIsTouched,
    enteredInputIsValid: enteredUsernameIsValid,
    isInvalidInput: isInvalidUsername,
    reset: resetUsername,
  } = useInputValidation((value) => userNameValidation(value));

  const {
    input: emailInput,
    handleInputChange: handleEmailInputChange,
    handleIsTouched: handleEmailIsTouched,
    enteredInputIsValid: enteredEmailIsValid,
    isInvalidInput: isInvalidEmail,
    reset: resetEmail,
  } = useInputValidation((value) => emailValidation(value));

  const {
    input: contactInput,
    handleInputChange: handleContactInputChange,
    handleIsTouched: handleContactIsTouched,
    enteredInputIsValid: enteredContactIsValid,
    isInvalidInput: isInvalidContact,
    reset: resetContact,
  } = useInputValidation((value) => contactValidation(value));

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredUsernameIsValid &&
    enteredEmailIsValid &&
    enteredContactIsValid
  ) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNameIsTouched();
    handleUsernameIsTouched();
    handleEmailIsTouched();
    handleContactIsTouched();

    if (!formIsValid || !isChecked) {
      setDidSubmit(true);
      return;
    }

    const user = {
      name: nameInput,
      username: usernameInput,
      email: emailInput,
      contact: contactInput,
    };

    localStorage.setItem("user", JSON.stringify(user));

    resetName();
    resetUsername();
    resetEmail();
    resetContact();
    setIsChecked(false);
    setDidSubmit(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formInputs}>
          <Input
            placeholder="Name"
            value={nameInput}
            onChange={handleNameInputChange}
            onBlur={handleNameIsTouched}
            isInvalid={isInvalidName}
            invalidMessage="Name cannot be empty."
          />
          <Input
            placeholder="Username"
            value={usernameInput}
            onChange={handleUsernameInputChange}
            onBlur={handleUsernameIsTouched}
            isInvalid={isInvalidUsername}
            invalidMessage="Please enter a valid username"
          />
          <Input
            placeholder="Email"
            value={emailInput}
            onChange={handleEmailInputChange}
            onBlur={handleEmailIsTouched}
            isInvalid={isInvalidEmail}
            invalidMessage="Please enter a valid email"
          />
          <Input
            placeholder="Mobile"
            value={contactInput}
            onChange={handleContactInputChange}
            onBlur={handleContactIsTouched}
            isInvalid={isInvalidContact}
            invalidMessage="Please enter a valid mobile number"
          />
        </div>

        <div className={styles.checkboxContainer}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              style={{ accentColor: PRIMARY_COLOR }}
              id="terms-conditions"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />

            <label className={styles.label} htmlFor="terms-conditions">
              <Text className={styles.text} color={SECONDARY_COLOR}>
                Share my registration data with Superapp
              </Text>
            </label>
          </div>

          {formIsValid && !isChecked && didSubmit && (
            <Text step={2} color="rgb(255, 115, 115)">
              Check this box to accept terms and conditions
            </Text>
          )}
        </div>

        <Button text="Submit" />
      </form>
    </div>
  );
}
