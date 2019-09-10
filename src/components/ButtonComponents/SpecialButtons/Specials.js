import React from "react";

//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const { specials } = props;
  return (
    <div>
      {specials.map(special => (
        <SpecialButton key={special} special={special} />
      ))}
    </div>
  );
};
export default Specials;
