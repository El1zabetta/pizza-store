import React from "react";
import logo from "../../images/logo.svg";
import { Box, color } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box component="header" className="header">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <Box className="header-form">
        <input placeholder="Поиск..." type="text" />
        <button>
          <SearchIcon sx={{ color: "white" }} />
        </button>
      </Box>
      <Box className="header-cart">
        <p>520 сом</p>
        <Box className="header-cart-line"></Box>
        <p>
          <ShoppingCartOutlinedIcon /> 3
        </p>
      </Box>
    </Box>
  );
}
