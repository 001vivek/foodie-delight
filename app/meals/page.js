import { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGird from "@/components/meals/meals-grid";
import getMeals from "@/lib/meals";
export const metadata = {
  title: "All restarants",
  description: "Browse the restaurants, shared by a food-loving community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGird meals={meals} />;
}
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Welcome to our Restaurants, like{" "}
          <span className={classes.highlight}>by peoples</span>{" "}
        </h1>
        <p>
          {" "}
          Choose your favorite dish from our menu and enjoy a delightful dining
          experience. It is delicious and satisfying!{" "}
        </p>
        <p className={classes.cta}>
          {" "}
          <Link href="/meals/share"> Add your Favorite Restaurant </Link>{" "}
        </p>{" "}
      </header>{" "}
      <main className={classes.main}>
        <Suspense
          fallback={
            <p className={classes.loading}>
              {" "}
              Please wait , While we are processing ...
            </p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
