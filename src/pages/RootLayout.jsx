import { Outlet } from "react-router-dom";
import styles from "./styles/RootLayout.module.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout() {
  return (
    <div className={styles.rootLayout}>
      <Toaster />
      <Outlet />
    </div>
  );
}
