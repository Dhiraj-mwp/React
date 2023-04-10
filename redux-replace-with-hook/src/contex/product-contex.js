import React, { useState } from 'react';


// createcontext for product
export const ProductsContex = React.createContext({
    products : [],
    toggaleFav : () => {}
});



export default props => {

    const [productsList, setProducstList] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
          },
          {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
          },
          {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
          },
          {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
          }
    ]);

    const toggleFavorate = productId =>{
        setProducstList(currentProductList =>{
            const prodIndex = currentProductList.findIndex(
                p => p.id === productId
              );
              const newFavStatus = !currentProductList[prodIndex].isFavorite;
              const updatedProducts = [...currentProductList];
              updatedProducts[prodIndex] = {
                ...currentProductList[prodIndex],
                isFavorite: newFavStatus
              };
              return  updatedProducts           
        })
    }

    return (
    <ProductsContex.Provider value={{products: productsList, toggaleFav: toggleFavorate}}>
        {props.children}
    </ProductsContex.Provider>
    );
};
