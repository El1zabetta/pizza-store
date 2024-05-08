import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Product({ product, cart, getCart, deleteProduct }) {
  const currentProductFromStorage = cart.find((item) => item.id === product.id);
  const [quantity, setQuantity] = useState(
    currentProductFromStorage.quantity || 1
  );

  function decrement() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      updateCart(quantity - 1);
    }
  }

  function increment() {
    setQuantity((prev) => prev + 1);
    updateCart(quantity + 1);
  }

  function updateCart(newQuantity) {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: newQuantity * item.price,
        };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    getCart();
  }
  function deleteProduct() {
    let newCart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    getCart();
  }

  return (
    <Box className="cart-product">
      <Box className="cart-product__info">
        <img src={product.url} alt="" />
        <Box sx={{ width: "300px" }}>
          <Typography>{product.title}</Typography>
          <Typography>{product.info}</Typography>
        </Box>
      </Box>
      <Box className="cart-product__quant">
        <button onClick={decrement}>-</button>
        <p>{quantity} </p>
        <button onClick={increment}>+</button>
      </Box>
      <Typography>{currentProductFromStorage.totalPrice} cом</Typography>
      <Button onClick={deleteProduct}>
        <DeleteOutlinedIcon />
      </Button>
    </Box>
  );
}
