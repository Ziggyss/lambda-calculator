import React from "react";

const SpecialButton = () => {
  const special = props.special;
  return (
    <div>
      <button className="specialButton">{special}</button>
    </div>
    /*  {/* Display a button element rendering the data being passed down from the parent container on props */
  );
};

export default SpecialButton;
