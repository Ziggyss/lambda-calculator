import React from "react";

//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  const { operators } = props;

  return (
    <div>
      {operators.map(operator => (
        <OperatorButton key={operator.value} operator={operator.value} />
      ))}
    </div>
  );
};

export default Operators;
