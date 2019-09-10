import React from "react";

//import any components needed
import { operators } from './data.js';
import OperatorButton from './OperatorButton';
//Import your array data to from the provided data file

const Operators = () => {
 
  // STEP 2 - add the imported data to state
  return (
    <div>
      {
        operators.map(
          (operators) => (
            <OperatorButton
              key={operators}
              name={operators}
            />
          ))
      }
    </div>
  );
};

export default Operators;
