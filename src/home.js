import React from "react";
import { Header, MealsSummary, Choose_canteen , MealsList, Cart } from "@components";



function Home() {
  return ( 
    <>

       <Cart />
      <Header></Header>
      <MealsSummary></MealsSummary>
        <Choose_canteen></Choose_canteen>
      <MealsList></MealsList>
   </>

  );
}

export default Home;