import classes from "./loading.module.css";
export default function MealsLoadingPage() {
  return (
    <p className={classes.loading}>
      {" "}
      Please wait , While we are processing ...
    </p>
  );
}
