import Form from "react-bootstrap/Form";
import Buttons from "./components/Button";
import { useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
function Forms() {
  const [data, setData] = useState({
    Name: "",
    Price: "",
    Description: "",
    Quantity: "",
  });
  const [image, setImage] = useState("");
  const [validated, setValidated] = useState(false);
  function handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    let res = axios
      .post("https://localhost:7057/api/Product", {
        name: data.Name,
        price: data.Price,
        description: data.Description,
        quantity: data.Quantity,
        imageUrl: image,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    if (res.status === 200) {
      window.location.pathname = "/";
    }

    setValidated(true);
  }
  return (
    <div style={{ margin: "50px 400px" }}>
      <h2>Add Product</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            required
            onChange={(event) => setData({ ...data, Name: event.target.value })}
            type="text"
            placeholder="Name"
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            onChange={(event) =>
              setData({ ...data, Price: event.target.value })
            }
            type="number"
            placeholder="Price"
            name="price"
          />
          <Form.Control.Feedback type="invalid">
            Price is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            onChange={(event) =>
              setData({ ...data, Description: event.target.value })
            }
            as="textarea"
            rows={3}
            placeholder="Description"
          />
          <Form.Control.Feedback type="invalid">
            Description is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            required
            onChange={(event) =>
              setData({ ...data, Quantity: event.target.value })
            }
            type="number"
            placeholder="Quantity"
          />
          <Form.Control.Feedback type="invalid">
            Quantity is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control
            required
            onChange={(event) => setImage(event.target.value)}
            type="file"
            placeholder="ImageUrl"
          />
          <Form.Control.Feedback type="invalid">
            ImageUrl is required
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex">
          <div className="d-2 mr-5">
            <Buttons color="primary" type="submit" title="Add" />
          </div>
          <div className="d-2">
            <Buttons color="danger" link="/" title="Back to list" />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Forms;
