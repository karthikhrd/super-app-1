import Category from "./Category";
import { categories } from "../../data/categories";
import styles from "./styles/Categories.module.css";

export default function Categories() {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}
