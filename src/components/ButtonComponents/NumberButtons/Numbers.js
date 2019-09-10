import React from "react";

//import any components needed
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const { numbers } = props;

  return (
    <div>
      {numbers.map(number => (
        <NumberButton key={number} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
