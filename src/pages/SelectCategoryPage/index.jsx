import { Button } from "../../components/ui";
import Categories from "./Categories";
import PageTitle from "./PageTitle";
import SelectedCategories from "./SelectedCategories";
import styles from "./styles/index.module.css";

export default function SelectCategoryPage() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.leftGroup}>
          <PageTitle />
          <SelectedCategories />
        </div>
        <Categories />
      </div>
      <div className={styles.nextButton}>
        <Button variant="secondary" disabled>
          Next
        </Button>
      </div>
    </div>
  );
}
