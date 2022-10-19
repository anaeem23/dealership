import React, { useEffect, useState } from "react";
import RenderCars from "../Components/CarPage/RenderCars";
import {
  Camry,
  Corolla,
  Highlander,
  Edge,
  Escape,
  Focus,
  Civic,
  Accord,
} from "../Components/CarSearch/seed";

const Home = () => {
  let count = 0;
  const [car, setCar] = useState(Corolla[count]);
  const allCars = [
    Camry,
    Corolla,
    Highlander,
    Edge,
    Escape,
    Focus,
    Civic,
    Accord,
  ];
  console.log(Camry.length);

  const handleChange = () => {
    setCar(Corolla[count + 1]);
    if (count === (Corolla.length - 2)) {
      count = 0;
    } else {
       count= count +1
    }

    console.log(count);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleChange();
    }, 100000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div key={car.IMG} className="slideshow" style={{width:"75%"}}>
    <img src={car.IMG} className="slideshowPic" alt=""></img>
    </div>
      
    </>
  );
};

export default Home;
