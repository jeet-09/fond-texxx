import classes from "./MealsSummary.module.scss";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>PreOrder it!! Save Your Time </h2>
      <p>
        Choose your favorite meal from Canteen and PreOrder it!! Save your Time during breaks!!
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and of course
        by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
