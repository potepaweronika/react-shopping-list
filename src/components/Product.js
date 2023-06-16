import { FiTrash2 } from "react-icons/fi";
import { GiMilkCarton, GiSlicedBread, GiShinyApple } from 'react-icons/gi';
import { useState } from "react";

const Product = ({ product, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="product">
      <div className="product-info">
        <div className="input-name">
          <input
            type="checkbox"
            value={isChecked}
            onChange={(e) => setIsChecked(!isChecked)}
            required
          />
          <div className="product-icons" >
            {product.category === "dairy" && <GiMilkCarton className='category-icons'></GiMilkCarton> }
            {product.category === "bread" && <GiSlicedBread className='category-icons'></GiSlicedBread> }
            {product.category === "fruits&vegetables" && <GiShinyApple className='category-icons'></GiShinyApple> }
          </div>
          <p className={isChecked ? "checked" : ""}>{product.name}</p>
        </div>
        <p>{product.quantity}</p>
      </div>
      <div className="product-icons">
        <FiTrash2 onClick={() => onDelete(product.id)}></FiTrash2>
      </div>
    </div>
  );
};

export default Product;
