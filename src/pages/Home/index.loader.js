import toast from "react-hot-toast";
import { defer, redirect } from "react-router-dom";

export const loader = async () => {
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

  return defer({
    news: fetchNews(),
    weather: fetchWeather(),
  });
};

const fetchWeather = async () => {
  let response = await fetch(
    "http://api.weatherapi.com/v1/current.json?q=pune&key=8d54d569b46a4d04ac8171732232110"
  );

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  let data = await response.json();
  return data;
};

const fetchNews = async () => {
  let headersList = {
    Authorization: "9edc507f04014491957bba3d4e8af7b9",
  };

  let response = await fetch(
    "https://newsapi.org/v2/everything?q=wild&pageSize=1",
    {
      method: "GET",
      headers: headersList,
    }
  );

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  let data = await response.json();
  return data.articles;
};
