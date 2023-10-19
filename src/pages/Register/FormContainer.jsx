import Form from "./Form";
import TermsAndConditions from "./TermsAndConditions";
import Title from "./Title";
import styles from "./styles/FormContainer.module.css";

export default function FormContainer() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.content}>
        <Title />
        <Form />
        <TermsAndConditions />
      </div>
    </div>
  );
}
