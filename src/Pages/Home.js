import React, { useEffect, useState } from "react";
import car1 from "../Assets/car1.jpg"
import car2 from "../Assets/car2.jpg"
import car3 from "../Assets/car3.jpg"


const Home = () => {

  const Corolla = [car1,car2,car3]
  console.log(Corolla)
  let count = 0;
  const [car, setCar] = useState(Corolla[count]);
  const [zoomE, setzoomE] = useState(false)


  const handleChange = () => {
    setCar(Corolla[count + 1]);
    if (count === (Corolla.length - 2)) {
      count = -1;
    } else {
       count= count +1
    }

    console.log(count);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleChange();
    }, 5010);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="overflow">
    <div key={{car}} className="slideshow" style={{width:"75%"}}>
    <img src={car} className="slideshowPic zoom" alt=""></img>
    </div>
    </div>
      
    </>
  );
};

export default Home;
