import { X } from "lucide-react";
import { Button, Text } from "../../components/ui";
import { ERROR_COLOR } from "../../constants";
import styles from "./styles/SelectedCategories.module.css";

export default function SelectedCategories({
  selectedCategories,
  removeCategory,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {selectedCategories.map((category) => (
          <Button
            variant="secondary"
            onIconClick={() => removeCategory(category)}
            key={category.id}
            icon={<X size={16} strokeWidth={4}/>}
          >
            {category.name}
          </Button>
        ))}
      </div>
      {selectedCategories.length < 3 && (
        <Text color={ERROR_COLOR}>⚠️ Minimum 3 categories required</Text>
      )}
    </div>
  );
}
