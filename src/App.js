import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Header from "./components/header/Header";
import AddForm from "./pages/addForm/AddForm";
import axios from "axios";

function App() {
  const API = "http://localhost:8000/pizzas";
  function createPizza(pizza) {
    axios.post(API, pizza);
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/add-form"
          element={<AddForm createPizza={createPizza} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
