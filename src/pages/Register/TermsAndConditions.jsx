import { Text } from "../../components/ui";
import styles from "./styles/TermsAndConditions.module.css";
import { SECONDARY_COLOR } from "../../../constants";

export default function TermsAndConditions() {
  return (
    <div className={styles.termsAndConditions}>
      <Text step={2} color={SECONDARY_COLOR}>
        By clicking on Sign up. you agree to Superapp{" "}
        <a href="#">Terms and Conditions of Use</a>
      </Text>

      <Text className={styles.textone} step={2} color={SECONDARY_COLOR}>
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp <a href="#">Privacy Policy</a>
      </Text>
    </div>
  );
}
