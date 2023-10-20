import styles from "./styles/UserDetails.module.css";
import { Button, Text } from "../../components/ui/index.js";

export default function UserDetails() {
  const user = JSON.parse(localStorage.getItem("user"));
  const selectedCategories = JSON.parse(
    localStorage.getItem("selectedCategories")
  );

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Text step={7}>{user.name}</Text>
        <Text step={7}>{user.email}</Text>
        <Text step={9} weight="500">{user.username}</Text>
      </div>
      <div className={styles.categories}>
        {selectedCategories.map((category) => (
          <div className={styles.category} key={category}>
            <Button variant="soft">{category.name}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
