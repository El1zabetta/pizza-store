import React, { useState } from "react";

export default function AddForm({ createPizza }) {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let onePizza = {
      url,
      title,
      info,
      price,
    };
    createPizza(onePizza);
  };
  return (
    <div className="form">
      <form>
        <input
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          type="text"
          placeholder="Вставьте ссылку"
        />
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Вставьте название"
        />
        <input
          onChange={(e) => setInfo(e.target.value)}
          value={info}
          type="text"
          placeholder="Вставьте описание"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="text"
          placeholder="Цена..."
        />
        <button onClick={(e) => handleClick(e)}>Добавить пиццу</button>
      </form>
    </div>
  );
}
