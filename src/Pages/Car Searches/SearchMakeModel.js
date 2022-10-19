import React from "react";
import { useParams } from "react-router-dom";
import {
  Camry,
  Corolla,
  Highlander,
  Edge,
  Escape,
  Focus,
  Accord,
  Civic,
} from "../../Components/CarSearch/seed";

import RenderCars from "../../Components/CarPage/RenderCars";
import { useState } from "react";

const SearchMakeModel = () => {
  const [Display, setDisplay] = useState("");

  const chosenModel = useParams().Model;
  console.log("SEARCH", chosenModel, Display);

  if (chosenModel === "Camry") {
    return <RenderCars Model={Camry} />;
  } else if (chosenModel === "Corolla") {
    return <RenderCars Model={Corolla} />;
  } else if (chosenModel === "Highlander") {
    return <RenderCars Model={Highlander} />;
  } else if (chosenModel === "Edge") {
    return <RenderCars Model={Edge} />;
  } else if (chosenModel === "Escape") {
    return <RenderCars Model={Escape} />;
  } else if (chosenModel === "Focus") {
    return <RenderCars Model={Focus} />;
  } else if (chosenModel === "Accord") {
    return <RenderCars Model={Accord} />;
  } else if (chosenModel === "Civic") {
    return <RenderCars Model={Civic} />;
  }
};

export default SearchMakeModel;
