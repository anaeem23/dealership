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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ByMakeModel.css"

const ByMakeModel = ({setCar,}) => {

  const Models = Object.keys(Cars);
  console.log(Models);

  const [disable, setDisable] = useState(true);
  const [Make, setMake] = useState({ Make: null });
  const [Display, setDisplay] = useState("");

  const HandleCarPage = (event) => {

    setCar(JSON.parse(event.target.value))
  }

  useEffect(() => {
    if (Make.Make) {
      setDisable(false);
      setDisplay("");
    }
  }, [Make]);
  const HandleChange = (event) => {
    const Index = event.target.selectedIndex;
    setMake({ Make: Object.values(Cars)[Index - 1] });


  };

  const HandleSubmit = (event) => {

   const   chosenCar = event.target.value;


    switch (chosenCar) {
      case "Camry":
        setDisplay(
          Camry.map((car) => (
            <div className="card" style={{ width: '75%' }}>
            <div class="row no-gutters">
                <div class="col-auto">
                    <img src={car.IMG} class="img-fluid" alt=""></img>
                </div>
                <div class="col">
                    <div class="card-block px-2">
                        <h4 class="card-title">{car.Name}</h4>
                        <p class="card-text">{
                            <ul>
                                <li>Color:{car.Color}</li>
                                <li>Interior:{car.Interior}</li>
                                <li>Drive:{car.Drive}</li>
                                <li>Trans:{car.Trans}</li>
                                <li>VIN:{car.VIN}</li>
                                <li>Engine:{car.Engine}</li>
                                <li>Stock#:{car.Stock}</li>
                                <li>Mileage:{car.Mileage}</li>
                            </ul>
                        }</p>
                 
                    </div>
                </div>
            </div>
            <div class="card-footer w-100 text-muted">
            <button value={JSON.stringify(car)}  class="btn btn-primary" onClick={HandleCarPage}>BUTTON</button>
            </div>
      </div>
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
          }


