import { Text } from "../../components/ui";
import styles from "./styles/TermsAndConditions.module.css";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constants.js";

export default function TermsAndConditions() {
  return (
    <div className={styles.termsAndConditions}>
      <Text step={2} color={SECONDARY_COLOR}>
        By clicking on Sign up. you agree to Superapp{" "}
        <a href="#" style={{ color: PRIMARY_COLOR }}>
          Terms and Conditions of Use
        </a>
      </Text>

      <Text step={2} color={SECONDARY_COLOR}>
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp{" "}
        <a href="#" style={{ color: PRIMARY_COLOR }}>
          Privacy Policy
        </a>
      </Text>
    </div>
  );
}
