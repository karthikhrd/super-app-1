import styles from "./styles/Hero.module.css";
import { Text, Image } from "../../components/ui/index.js";
import heroImage from "../../assets/super-app-register-hero.png";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImage}>
        <Image src={heroImage} alt="Hero image" />
      </div>

      <div className={styles.heroContent}>
        <Text step={9} weight="700" className={styles.heroText}>
          Discover new things on Superapp
        </Text>
      </div>
    </div>
  );
}
