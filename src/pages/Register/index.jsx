import Form from "./Form";
import FormContainer from "./FormContainer";
import Hero from "./Hero";
import TermsAndConditions from "./TermsAndConditions";
import Title from "./Title";
import styles from "./styles/index.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <Hero />
      <FormContainer>
        <Title />
        <Form />
        <TermsAndConditions />
      </FormContainer>
    </div>
  );
}
