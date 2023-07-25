import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Buttons from "./components/Button";
import AddProduct from "./AddProduct";
import Tables from "./Table";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Add" element={<AddProduct />} />
        <Route path="/" element={<Tables />} />
      </Routes>
    </div>
  );
}

export default App;
