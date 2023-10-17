import { Outlet } from "react-router-dom";
import styles from "./styles/RootLayout.module.css";

export default function RootLayout() {
  return (
    <div className={styles.rootLayout}>
      <Outlet />
    </div>
  );
}
