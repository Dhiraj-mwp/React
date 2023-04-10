import React, { useContext} from 'react';
// import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import ProductsContex from '../contex/product-contex'


const Products = props => {

  const productList = useContext(ProductsContex).products;

  console.log(producltList)
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
