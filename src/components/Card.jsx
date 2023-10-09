import React from "react";

const Card = ({ title, data }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{data}</div>
    </div>
  );
};

export default Card;
