import React from "react";
import "./HeaderM.css";
import { AiFillCar } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const HeaderM = () => {


  return (
    <>
      <div className="container-fluid headerHM">
        <div className="row .headerRM">
          <div className="col-12 locationM">
            
              454 E North Ave, Lombard, IL 60148
  
          
         
          </div>
          <div className="col-12 directionsOverall">
          <AiFillCar className="logod" />
              <a
                className="directionsM"
                href="https://www.google.com/maps/dir/42.0466263,-87.7664923/multiautos/@41.9800368,-88.0259443,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x880fb3c48ab5a81d:0x25c78116cdfb093f!2m2!1d-88.0055381!2d41.905359"
              >
                Get Directions
              </a>
          </div>
          <div className="col-12 row PHEMM">
            <div className="col pheMM">
              <BsPhone className="logo" /> XXX-XXX-XXXX{" "}
            </div>
            <div className="col pheM">
              <MdOutlineMailOutline className="logo" /> Email@email.com
            </div>
          </div>
   
        </div>
      </div>
      
    </>
  );
};

export default HeaderM;
