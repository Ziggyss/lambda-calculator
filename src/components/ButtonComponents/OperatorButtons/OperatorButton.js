import React from "react";

const OperatorButton = (props) => {
  const operator = props.operator;
  return (

    <div>
     <button className="operatorButton">{operator}</button>

    </div>
  
    /*   {/* Display a button element rendering the data being passed down from the parent container on props */
  );
};

export default OperatorButton;