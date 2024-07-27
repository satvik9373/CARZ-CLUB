"use client"
import CarsFilterOption from "@/components/Home/CarsFilterOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import Searchinput from "@/components/Home/Searchinput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";


export default function Home() {

  const [carsList,setCarsList]=useState<any>([])
  useEffect(()=>{
    getCarList_();
  },[])
  const getCarList_=async()=>{
    const result:any=await getCarsList();
    setCarsList(result?.carLists)
  }
  return (
   <div className="p-5 sm:px-10 md:px-20">
   <Hero/>
   <Searchinput/>
   <CarsFilterOption/>
   <CarsList carsList={carsList}/>
   </div>
  );
}
