import React from "react";

//import any components needed
import { operators } from './data.js';
import OperatorButton from './OperatorButton';
//Import your array data to from the provided data file

const Operators = (operators) => {
 
  // STEP 2 - add the imported data to state
  const { operators } = props; 
  return (
    <div>
      {
        operators.map(
          (operator) => (
            <OperatorButton
              key={operators}
              name={operators}
            />
          ))
      }
    </div>
  );
};
