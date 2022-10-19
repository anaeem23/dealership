import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Camry, Corolla, Highlander, Edge, Escape, Focus, Civic,Accord } from "../CarSearch/seed";
import { useHistory } from "react-router-dom";


const RenderCarPage = () => {
    const allCars = [Camry, Corolla, Highlander, Edge, Escape, Focus, Civic, Accord]
    const Model = useParams();
    let car =""
    allCars.forEach(items=>items.forEach(item =>{
        if(item.VIN == Model.VIN){
            car=item
        }
    }))
    const navigate = useNavigate()


  return (
    <div className="card" style={{ width: "75%" }}>
      <div className="row no-gutters">
        <div className="col-auto">
          <img src={car.IMG} className="img-fluid" alt=""></img>
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

       
      <button onClick={() => navigate(-1)} className="btn btn-primary">Go Back</button>
     
      </div>
    </div>
  );
};


export default RenderCarPage