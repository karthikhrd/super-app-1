import toast from "react-hot-toast";
import { redirect } from "react-router-dom";

export const loader = () => {
  const user = localStorage.getItem("user");
  const selectedCategories = JSON.parse(
    localStorage.getItem("selectedCategories")
  );

  if (!user) {
    return redirect("/register");
  } else if (!selectedCategories || selectedCategories.length < 3) {
    toast.error("Select at least three categories before proceeding");
    return redirect("/select-category");
  }

  return null;
};
