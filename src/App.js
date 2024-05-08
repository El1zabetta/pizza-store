import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Header from "./components/header/Header";
import AddForm from "./pages/addForm/AddForm";
import axios from "axios";
import { useEffect, useState } from "react";
import Details from "./pages/details/details";
import EditForm from "./pages/editForm/EditForm";
import Cart from "./pages/cart/cart";
import Searched from "./pages/searched/Searched";

//! create
function App() {
  const API = "http://localhost:8000/pizzas";
  const [pizzas, setPizzas] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);
  const [cart, setCart] = useState([]);
  function createPizza(pizza) {
    axios.post(API, pizza);
    getPizzas();
  }

  // ! как только массив с пиццами измениться, мы вызваем функцию getPizzas для того чтобы обновить данные в стэйте pizzas и для того чтобы показать пользователю актуальные данные после удаления
  // useEffect (() => {
  //   getPizzas();
  // }, [pizzas]);

  //! read
  async function getPizzas(search = "") {
    let result = await axios.get(`${API}?title_like=${search}`);
    setPizzas(result.data);
  }

  //! delete
  async function deletePizza(id) {
    await axios.delete(`${API}/${id}`);
    getPizzas();
  }
  //! update
  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }
  //! details and update
  async function getOneProduct(id) {
    let result = await axios.get(`${API}/${id}`);
    setOneProduct(result.data);
  }

  //! to local storage
  function toLocalStorage(sentProduct) {
    let from = JSON.parse(localStorage.getItem("cart")) || [];
    let isInCart = from.some((item) => item.id == sentProduct.id);

    if (isInCart) {
      alert(
        `В корзине уже есть ${sentProduct.title}. Увеличить кол-во можно в корзине.`
      );
      return;
    }
    let to = [...from, sentProduct];
    localStorage.setItem("cart", JSON.stringify(to));
    getCart();
  }

  function getCart() {
    let from = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(from);
  }

  function deleteCart() {
    localStorage.removeItem("cart");
    getCart();
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <BrowserRouter>
      <Header getPizzas={getPizzas} cart={cart} />
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
          path="/edit-form/:id"
          element={
            <EditForm
              updateProduct={updateProduct}
              getOneProduct={getOneProduct}
              oneProduct={oneProduct}
            />
          }
        />

        <Route
          path="/details/:id"
          element={
            <Details
              toLocalStorage={toLocalStorage}
              oneProduct={oneProduct}
              getOneProduct={getOneProduct}
              deletePizza={deletePizza}
              getPizzas={getPizzas}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart deleteCart={deleteCart} cart={cart} getCart={getCart} />
          }
        />
        <Route
          path="searched"
          element={<Searched getPizzas={getPizzas} pizzas={pizzas} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
