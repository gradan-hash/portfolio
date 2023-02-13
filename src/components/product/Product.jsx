import React from "react";
import "./product.css";
const Product = ({ img, link, name }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <h4 className="name">projectname:{name}</h4>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        <h4 className="name">projectname:{name}</h4>
      </a>
    </div>
  );
};

export default Product;
