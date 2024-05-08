import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

export default function EditForm({ updateProduct, getOneProduct, oneProduct }) {
  const navigate = useNavigate();
  const params = useParams();

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      // navigate(`/details/${params.id}`);
      setUrl(oneProduct.url);
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
    }
  }, [oneProduct]);
  const handleEdit = () => {
    let editedProduct = {
      url,
      title,
      description,
      price: +price,
    };
    updateProduct(params.id, editedProduct);
    navigate("/");
  };
  return (
    <div className="form">
      <h1>Edit Form</h1>
      <form>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="For url..."
        />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="description"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="price"
        />
        <Button onClick={() => handleEdit()}>Edit product</Button>
      </form>
    </div>
  );
}
