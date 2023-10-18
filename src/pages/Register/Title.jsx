import logo from "../../assets/super-app-logo.png";
import Text from "../../components/ui/Text";
import styles from "./styles/Title.module.css";

export default function Title() {
  return (
    <div className={styles.formTitle}>
      <img src={logo} alt="logo" />
      <Text step={4}>Create your new account</Text>
    </div>
  );
}
