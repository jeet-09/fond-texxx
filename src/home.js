import React from "react";
import { Header, MealsSummary, MealsList, Cart } from "@components";



function Home() {
  return ( 
    <>

       <Cart />
      <Header></Header>
      <MealsSummary></MealsSummary>
      <MealsList></MealsList>
   </>

  );
}

export default Home;