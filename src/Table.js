import React, { useEffect, useState } from "react";
import axios from "axios";
import errorImage from "./assets/404.jpg";
import Table from "react-bootstrap/Table";
import Buttons from "./components/Button";
export default function Tables() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7057/api/Product")
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <img
          style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
          src={errorImage}
          alt="Error"
        />
      ) : (
        <div style={{ margin: "50px 200px" }}>
          <div style={{ textAlign: "right" }}>
            <Buttons link="/Add" color="primary" title="Add Product" />
          </div>
          <h2>Products</h2>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image Url</th>
              </tr>
            </thead>
            <tbody>
              {products.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.imageUrl}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
}
