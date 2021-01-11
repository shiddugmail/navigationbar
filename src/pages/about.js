import React from "react";
import Links from "../links";

const Product = () => {
  return (
    <div >
      <Links />
      <div className='card'>
        <div className='card-header'>
            <h3>Company</h3>
        </div>
        <div className='card-body'>        
            <p>
                Started in 2020. Pioneer in web development. Dedicate team with full commitment to deliver the best.
            </p>
        </div>
      </div>
    </div>
  );
}
export default Product;