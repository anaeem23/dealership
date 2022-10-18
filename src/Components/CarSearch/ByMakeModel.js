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
import { useState } from "react";
import { useEffect } from "react";

const ByMakeModel = () => {
  const Models = Object.keys(Cars);
  console.log(Models);

  const [disable, setDisable] = useState(true);
  const [Make, setMake] = useState({ Make: null });
  const [Display, setDisplay] = useState("");

  useEffect(() => {
    if (Make.Make) {
      setDisable(false);
      setDisplay("")
    }
  }, [Make]);
  const HandleChange = (event) => {
    const Index = event.target.selectedIndex;
    setMake({ Make: Object.values(Cars)[Index - 1] });

    console.log(Object.values(Cars)[Index]);
    console.log(Make);
  };

  const HandleSubmit = (event) => {
    const chosenCar = event.target.value;

    switch (chosenCar) {
      case "Camry":
        setDisplay(
          Camry.map((car) => (
            <img
              src={car}
              width="200"
              height="150"
              style={{ display: "block", margin: "20px" }}
            ></img>
          ))
        );
        break;
      case "Corolla":
        setDisplay(
          Corolla.map((car) => (
            <img
              src={car}
              width="200"
              height="150"
              style={{ display: "block", margin: "20px" }}
            ></img>
          ))
        );
        break;
      case "Highlander":
        setDisplay(
          Highlander.map((car) => (
            <img
              src={car}
              width="200"
              height="150"
              style={{ display: "block", margin: "20px" }}
            ></img>
          ))
        );
        break;
      case "Edge":
        setDisplay(
          Edge.map((car) => (
            <img
              src={car}
              width="200"
              height="150"
              style={{ display: "block", margin: "20px" }}
            ></img>
          ))
        );
        break;
      case "Escape":
        setDisplay(
          Escape.map((car) => (
            <img
              src={car}
              width="200"
              height="150"
              style={{ display: "block", margin: "20px" }}
            ></img>
          ))
        );
        break;
      case "Focus":
        setDisplay(
          Focus.map((car) => (
            <img
              src={car}
              width="200"
              height="150"
              style={{ display: "block", margin: "20px" }}
            ></img>
          ))
        );
        break;
      case "Accord":
        setDisplay(
          Accord.map((car) => (
            <img
              src={car}
              width="200"
              height="150"
              style={{ display: "block", margin: "20px" }}
            ></img>
          ))
        );
        break;
      case "Civic":
        setDisplay(
          Civic.map((car) => (
            <img
              src={car}
              width="200"
              height="150"
              style={{ display: "block", margin: "20px" }}
            ></img>
          ))
        );
        break;
      default:
        setDisplay("");
    }
  };

  return (
    <>
      <form>
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
      </form>

      {Display}
    </>
  );
};

export default ByMakeModel;
