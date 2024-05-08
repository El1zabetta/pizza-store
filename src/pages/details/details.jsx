import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Details({
  deletePizza,
  getPizzas,
  oneProduct,
  getOneProduct,
  toLocalStorage,
}) {
  let params = useParams();
  console.log("params: ", params.id);
  let navigate = useNavigate();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  const handleDelete = () => {
    deletePizza(params.id);
    navigate("/");
  };
  return (
    <div className="details">
      <Box className="details-inner">
        <img width={400} src={oneProduct?.url} alt={oneProduct?.title} />
        <Box className="details-inner__child">
          <Typography>{oneProduct?.title}</Typography>
          <Typography>{oneProduct?.info}</Typography>
          <Typography>{oneProduct?.price}</Typography>
          <Button
            variant="contained"
            onClick={() =>
              toLocalStorage({
                ...oneProduct,
                quantity: 1,
                totalPrice: oneProduct.price,
              })
            }
            sx={{ background: "#FE5F1E", color: "white" }}
          >
            В корзину
          </Button>
          <Button
            onClick={handleDelete}
            variant="contained"
            sx={{ background: "#Ff0505", color: "white" }}
          >
            Удалить продукт
          </Button>
          <Button
            onClick={() => navigate(`/edit-form/${params.id}`)}
            variant="contained"
            sx={{ background: "#FE5F1E", color: "white" }}
          >
            Редактировать продукт
          </Button>
        </Box>
      </Box>
    </div>
  );
}
