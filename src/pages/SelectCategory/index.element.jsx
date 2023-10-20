import { useState } from "react";
import { Button } from "../../components/ui";
import { categories } from "../../data/categories";
import Category from "./Category";
import PageTitle from "./PageTitle";
import SelectedCategories from "./SelectedCategories";
import styles from "./styles/index.module.css";

export default function SelectCategoryPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  localStorage.setItem(
    "selectedCategories",
    JSON.stringify(selectedCategories)
  );

  const addCategory = (category) => {
    setSelectedCategories([...selectedCategories, category]);
  };

  const removeCategory = (category) => {
    setSelectedCategories(
      selectedCategories.filter((c) => c.id !== category.id)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.leftGroup}>
          <PageTitle />
          <SelectedCategories
            selectedCategories={selectedCategories}
            removeCategory={removeCategory}
          />
        </div>
        <div className={styles.categories}>
          {categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              addCategory={addCategory}
              removeCategory={removeCategory}
              selectedCategories={selectedCategories}
            />
          ))}
        </div>
      </div>
      <div className={styles.nextButton}>
        <Button variant="secondary" disabled={selectedCategories.length < 3}>
          Next
        </Button>
      </div>
    </div>
  );
}
