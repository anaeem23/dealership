import React from "react";
import { Link } from "react-router-dom";
import "./RendeerCar.css"

const RenderCars = (prop) => {
  return prop.Model.map((car) => (
    <div className="container-fluid fullPage">
      <div className="row in">
        <div className="col-2 p-0 carFix"></div>
        <div className="col-8 detail p-0">
          <div className="card" style={{ width: "100%" }}>
            <div className="row no-gutters bg-black">
              <div className="col-auto">
                <img
                  src={car.IMG}
                  className="img-fluid"
                  alt=""
                  width={250}
                  height={200}
                ></img>
              </div>
              <div className="col carFix">
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
            <div className="card-footer w-100 text-muted bg-danger">
              <Link to={`/inventory/${car.VIN}`}>
                {" "}
                <button value={JSON.stringify(car)} className="btn btn-primary">
                  See Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-2 carFix"></div>
      </div>
    </div>
  ));
};

export default RenderCars;
