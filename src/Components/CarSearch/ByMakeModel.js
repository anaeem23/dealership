import React from "react";
import Cars from "./seed";
import { useState } from "react";
import { useEffect } from "react";

const ByMakeModel = () => {
  const Models = Object.keys(Cars);
  console.log(Models);

  const [disable, setDisable] = useState(true);
  const [Make, setMake] = useState({Make: null});

  useEffect(() => {

    if(Make.Make) {
      setDisable(false);}

    }, [Make]);
  const HandleChange = (event) => {
    const Index = event.target.selectedIndex;
    setMake({Make:Object.values(Cars)[Index]});
    
    
    console.log(Object.values(Cars)[Index]);
    console.log(Make)
};

  return (
    <>
      <form>
        <select placeholder="All Makes" name="Makes" onChange={HandleChange}>
          {Models.map(model => 
            <option value={model} >{model}</option>
          )}
        </select>

        <select disabled={disable} placeholder="All Models" name="Models">


          {Make.Make ? Make.Make.map(model => 
            <option value={model}>{model}</option>
          ): <option></option>}
        </select>
      </form>
    </>
  );
};

export default ByMakeModel;
