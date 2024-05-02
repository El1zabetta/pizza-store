import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import banner1 from "../../images/image 10.png";
import banner2 from "../../images/image 12.png";
import banner3 from "../../images/image 13.png";
import banner4 from "../../images/image 15.png";
import banner5 from "../../images/image 16.png";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [selectCategory, setSelectcategory] = useState("все");
  return (
    <div className="container">
      <Box className="banner-parent">
        <Box className="banner-inner bn-1">
          <img src={banner1} />
          <img src={banner2} />
        </Box>
        <Box className="banner-inner bn-2">
          <img src={banner3} />
          <img src={banner4} />
          <img src={banner5} />
        </Box>
      </Box>
      <Box className="hp-btns">
        <button
          onClick={() => setSelectcategory("все")}
          style={{
            background: selectCategory === "все" ? "#282828" : "#f9f9f9",
            color: selectCategory === "все" ? "white" : "#2c2c2c",
          }}
        >
          Все
        </button>
        <Link to="/add-form">
          <button
            onClick={() => setSelectcategory("мясо")}
            style={{
              background: selectCategory === "мясо" ? "#282828" : "#f9f9f9",
              color: selectCategory === "мясо" ? "white" : "#2c2c2c",
            }}
          >
            Добавить продукт
          </button>
        </Link>
        <button
          onClick={() => setSelectcategory("веган")}
          style={{
            background: selectCategory === "веган" ? "#282828" : "#f9f9f9",
            color: selectCategory === "веган" ? "white" : "#2c2c2c",
          }}
        >
          Вегетарианские
        </button>
        <button
          onClick={() => setSelectcategory("гриль")}
          style={{
            background: selectCategory === "гриль" ? "#282828" : "#f9f9f9",
            color: selectCategory === "гриль" ? "white" : "#2c2c2c",
          }}
        >
          Гриль
        </button>
        <button
          onClick={() => setSelectcategory("острые")}
          style={{
            background: selectCategory === "острые" ? "#282828" : "#f9f9f9",
            color: selectCategory === "острые" ? "white" : "#2c2c2c",
          }}
        >
          Острые
        </button>
      </Box>
      <Box>
        <Typography className="hp-h1">Все пиццы</Typography>
        <Box>
          <Card />
        </Box>
      </Box>
    </div>
  );
}
