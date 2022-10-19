import React from "react";
import { Link } from "react-router-dom";

const RenderCars = (prop) => {
  return prop.Model.map((car) => (
    <div className="card" style={{ width: "75%" }}>
      <div className="row no-gutters">
        <div className="col-auto">
          <img src={car.IMG} className="img-fluid" alt="" width={250} height={200} ></img>
        </div>
        <div className="col">
         <div className="card-block px-2">
            <h4 className="card-title">{car.Name}</h4>
            <p className="card-text">
              {
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
              }
            </p>
          </div>
        </div>
      </div>
      <div className="card-footer w-100 text-muted">
        <Link to={`/inventory/${car.VIN}`}>        <button value={JSON.stringify(car)} className="btn btn-primary">
          BUTTON
        </button>
        </Link>
      </div>
    </div>
  ));
};

export default RenderCars;
