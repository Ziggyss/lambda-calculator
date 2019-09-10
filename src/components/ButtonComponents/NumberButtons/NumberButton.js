import React from "react";

const NumberButton = (props) => {
  const number  = props.number;
  return (

    <div>
     <button className='numberButton'>{number}</button>

    </div>
    
     /*  {/* Display a button element rendering the data being passed down from the parent container on props */
  )
};

export default NumberButton;