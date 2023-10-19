import { useState } from "react";
import styles from "./styles/Form.module.css";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants";
import { Button, Input, Text } from "../../components/ui/index.js";
import { useInputValidation } from "./useInputValidation.js";
import {
  contactValidation,
  emailValidation,
  nameValidation,
  userNameValidation,
} from "../../utils/inputValidation";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [isChecked, setIsChecked] = useState(false);
  const [formDidSubmit, setFormDidSubmit] = useState(false);

  const navigate = useNavigate();

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
      setFormDidSubmit(true);
      return;
    }

    navigate("/select-category");

    const user = {
      name: nameInput,
      username: usernameInput,
      email: emailInput,
      contact: contactInput,
    };

    localStorage.setItem("user", JSON.stringify(user));

    toast.success("You are signed in!", {
      duration: 4000,
    });

    resetName();
    resetUsername();
    resetEmail();
    resetContact();
    setIsChecked(false);
    setFormDidSubmit(false);
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
            <label htmlFor="terms-conditions">
              <Text color={SECONDARY_COLOR}>
                Share my registration data with Superapp.
              </Text>
            </label>
          </div>

          {formIsValid && !isChecked && formDidSubmit && (
            <Text step={2} color="rgb(255, 115, 115)">
              Check this box to accept our terms and conditions.
            </Text>
          )}
        </div>

        <Button>Sign up</Button>
      </form>
    </div>
  );
}
