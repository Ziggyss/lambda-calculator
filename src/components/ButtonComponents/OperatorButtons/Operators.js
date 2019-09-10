import React from "react";

//import any components needed
import { operators } from './data.js';

//Import your array data to from the provided data file

const Operators = (operators) => {
  // STEP 2 - add the imported data to state
  const { operators } = props; 
  return (
    <div>
      {
        operators.map(
          (operatorSymbol) => (
            <OperatorButton
              key={operatorSymbol}
              name={operatorSymbol}
            />
          ))
      }
    </div>
  );
};
