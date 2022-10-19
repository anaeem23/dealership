import React from "react";
import {
  Cars,
  Camry,
  Corolla,
  Highlander,
  Edge,
  Escape,
  Focus,
  Accord,
  Civic,
} from "./seed";
import { useState, useEffect } from "react";
import "./ByMakeModel.css";
import RenderCars from "../CarPage/RenderCars";
import { Link } from "react-router-dom";

const ByMakeModel = () => {
  const Models = Object.keys(Cars);

  const [disable, setDisable] = useState(true);
  const [Make, setMake] = useState({ Make: null });
  const [chosenCar, setCar] = useState("");

  useEffect(() => {
    if (Make.Make) {
      setDisable(false);
    }
  }, [Make]);
  const HandleChange = (event) => {
    const Index = event.target.selectedIndex;
    setMake({ Make: Object.values(Cars)[Index - 1] });
  };

  const HandleSubmit = (event) => {
    setCar(event.target.value);
  };

  return (
    <>
      <form className="form">
        <div className="formQ">
        <select placeholder="All Makes" name="Makes" onChange={HandleChange}>
          <option value="" disabled selected>
            All Makes
          </option>

          {Models.map((model) => (
            <option value={model}>{model}</option>
          ))}
        </select>

        <select
          disabled={disable}
          placeholder="All Models"
          name="Models"
          onChange={HandleSubmit}
        >
          <option value="" disabled selected>
            All Models
          </option>

          {Make.Make ? (
            Make.Make.map((model) => <option value={model}>{model}</option>)
          ) : (
            <option></option>
          )}
        </select>
        <Link to={`/inventory/Model/${chosenCar}`}>
          {" "}
          <button className="btn btn-danger">LookUp</button>
        </Link>
        </div>
      </form>
    </>
  );
};

export default ByMakeModel;
