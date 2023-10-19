import logo from "../../assets/super-app-logo.png";
import { Image } from "../../components/ui";
import Text from "../../components/ui/Text";
import styles from "./styles/FormTitle.module.css";

export default function FormTitle() {
  return (
    <div className={styles.formTitle}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>
      <Text step={4}>Create your new account</Text>
    </div>
  );
}
