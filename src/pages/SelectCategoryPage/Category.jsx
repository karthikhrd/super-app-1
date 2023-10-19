import { useState } from "react";
import { Image, Text } from "../../components/ui";
import styles from "./styles/Category.module.css";

export default function Category({ category }) {
  const [isSelected, setIsSelected] = useState(false);

  const selectedStyle = isSelected ? styles.isSelected : "";

  return (
    <div
      className={`${styles.container} ${selectedStyle}`}
      style={{ backgroundColor: category.color }}
      onClick={() => setIsSelected(!isSelected)}
    >
      <Text step={6} weight="500">
        {category.name}
      </Text>
      <div className={styles.image}>
        <Image src={category.image} alt={category.name} />
      </div>
    </div>
  );
}
