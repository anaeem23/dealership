import React from "react";
import { Camry, Corolla, Highlander, Edge, Escape, Focus, Civic, Accord } from "../Components/CarSearch/seed";
import RenderCars from "../Components/CarPage/RenderCars";

const Inventory = () => {
return (
    <>
    <RenderCars Model = {Camry}/>
    <RenderCars Model = {Corolla}/>
    <RenderCars Model = {Highlander}/>
    <RenderCars Model = {Edge}/>
    <RenderCars Model = {Escape}/>
    <RenderCars Model = {Focus}/>
    <RenderCars Model = {Civic}/>
    <RenderCars Model = {Accord}/>
    </>
)
}

export default Inventory