// import { useState,useEffect } from "react";
import Home from "@componets/home/Home"
import { getdatas } from "@componets/loading/delay"



const HomeRoute = async  () => {
// console.log("Homello")
  const data = await getdatas();


  return (
    <>
    <Home/>
    </>
  )
}


export default HomeRoute;