import React from "react";

const Button = ({ text, backgroundColor, color, buttonFunc }) => {
    const style = {
      color: color,
      backgroundColor: backgroundColor,
      border: "none",
      padding: "10px 25px",
      fontSize: "18px",
      borderRadius: "8px",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
,    };
    return (
        <button style={style} onClick={buttonFunc}>
          {text}
        </button>
    );
  };

  Button.defaultProps = {
    text: "Click!",
    backgroundColor: "blue",
    color: "white",
  };

  export default Button;