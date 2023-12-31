//import React from "react";
//import React, { useEffect, useCallback, useMemo, useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

// const ProductPage = () => {
//   const products = useSelector((state) => state.allProducts.products);
//   const dispatch = useDispatch();
//   const fetchProducts = async () => {
//     const response = await axios
//       .get("https://fakestoreapi.com/products")
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//     dispatch(setProducts(response.data));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   console.log("Products :", products);
//   return (
//     <div className="ui grid container">
//       <ProductComponent />
//     </div>
//   );
// };

// export default ProductPage;

const ProductListing = () => {
    // // const products = useSelector((state) = state);
    // // console.log(products);
    // return (
    //     <div className="ui grid container">
    //         <ProductComponent />
    //     </div>
    // )

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  //console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
    
}

export default ProductListing;