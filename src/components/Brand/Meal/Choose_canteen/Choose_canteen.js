import classes from "./Choose_canteen.module.scss";

const Choose_canteen = () => {
  return (
    <section className={classes.summary}>
      <button className={classes.button}>
        Mini Canteen
       </button>

    <button className={classes.button}>
        ShriRaj
       </button>
    </section>
  );
};

export default Choose_canteen;
