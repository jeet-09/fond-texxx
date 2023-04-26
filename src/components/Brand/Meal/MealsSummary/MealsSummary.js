import classes from "./MealsSummary.module.scss";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Food On Demand</h2>
      <p>
        Choose your favorite meal from Canteen and PreOrder it!! Save your Time during breaks!!
      </p>
      <p>
        "Busy day ahead? Order now and fuel up with a tasty meal to keep you going!"
      </p>
    </section>
  );
};

export default MealsSummary;
