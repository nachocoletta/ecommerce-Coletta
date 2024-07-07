import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [nombre, setNombre] = useState();

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi E-Commerce" />
    </>
  );
}

export default App;
