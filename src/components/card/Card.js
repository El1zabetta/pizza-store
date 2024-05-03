import React, { useState } from "react";
import pizzaImg from "../../images/image 5.png";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useNavigate } from "react-router-dom";

export default function Card({ product }) {
  const navigate = useNavigate();
  const [testo, setTesto] = useState("тонкое");
  const [size, setSize] = useState(25);

  return (
    <div className="card">
      <img
        onClick={() => navigate(`/details/${product.id}`)}
        src={product.url}
        alt={product.title}
      />
      <p>{product.title}</p>
      <div className="card-select">
        <div className="card-select-inner csi-1">
          <button
            onClick={() => setTesto("тонкое")}
            className={testo === "тонкое" ? "btn-active" : null}
          >
            Тонкое
          </button>
          <button
            onClick={() => setTesto("традиционное")}
            className={testo === "традиционное" ? "btn-active" : null}
          >
            Традиционное
          </button>
        </div>
        <div className="card-select-inner csi-2">
          <button
            onClick={() => setSize(25)}
            className={size === 25 ? "btn-active" : null}
          >
            25см
          </button>
          <button
            onClick={() => setSize(30)}
            className={size === 30 ? "btn-active" : null}
          >
            30см
          </button>
          <button
            onClick={() => setSize(40)}
            className={size === 40 ? "btn-active" : null}
          >
            40см
          </button>
        </div>
      </div>
      <div className="card-end ">
        <p>{product.price}</p>
        <button>
          <AddOutlinedIcon sx={{ color: "white" }} />
          Добавить
        </button>
      </div>
    </div>
  );
}
