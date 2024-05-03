import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Header from "./components/header/Header";
import AddForm from "./pages/addForm/AddForm";
import axios from "axios";
import { useEffect, useState } from "react";
import Details from "./pages/details/details";

//! create
function App() {
  const API = "http://localhost:8000/pizzas";
  const [pizzas, setPizzas] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);
  function createPizza(pizza) {
    axios.post(API, pizza);
    getPizzas();
  }

  // ! как только массив с пиццами измениться, мы вызваем функцию getPizzas для того чтобы обновить данные в стэйте pizzas и для того чтобы показать пользователю актуальные данные после удаления
  // useEffect (() => {
  //   getPizzas();
  // }, [pizzas]);

  //! read
  async function getPizzas() {
    let result = await axios.get(API);
    setPizzas(result.data);
  }

  //! delete
  async function deletePizza(id) {
    await axios.delete(`${API}/${id}`);
    getPizzas();
  }

  //! details and update
  async function getOneProduct(id) {
    let result = await axios.get(`${API}/${id}`);
    setOneProduct(result.data);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage pizzas={pizzas} getPizzas={getPizzas} />}
        />
        <Route
          path="/add-form"
          element={<AddForm createPizza={createPizza} />}
        />
        <Route
          path="/details/:id"
          element={
            <Details
              oneProduct={oneProduct}
              getOneProduct={getOneProduct}
              deletePizza={deletePizza}
              getPizzas={getPizzas}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
