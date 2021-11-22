import { TextField } from "@mui/material";
import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProduct = { ...product };
    newProduct[field] = value;
    setProduct(newProduct);
  };

  const handleProductSubmit = (e) => {
    // Collect Data from form to send Server..
    fetch(`https://thawing-crag-19500.herokuapp.com/product`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Submitted Successfully");
        }
      });
    e.preventDefault();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className="title">
        <h1 className=" mt-3 text-uppercase" style={{ textAlign: "center" }}>
          <span>Add Product</span>
        </h1>
      </div>
      <form onSubmit={handleProductSubmit}>
        <TextField
          required
          label="Product Name"
          sx={{ width: "50%", mt: 3 }}
          id="outlined-size-small"
          size="small"
          name="product_name"
          onBlur={handleOnBlur}
        />
        <br />
        <TextField
          required
          label="Image Link"
          sx={{ width: "50%", mt: 3 }}
          id="outlined-size-small"
          size="small"
          type="text"
          name="img"
          onBlur={handleOnBlur}
        />
        <br />
        <TextField
          required
          label="Price"
          sx={{ width: "50%", mt: 3 }}
          id="outlined-size-small"
          size="small"
          name="price"
          onBlur={handleOnBlur}
        />
        <br />
        <TextField
          required
          label="Product Description"
          sx={{ width: "50%", mt: 3 }}
          id="outlined-size-small"
          size="small"
          name="product_description"
          onBlur={handleOnBlur}
        />
        <br />
        <TextField
          required
          label="Mileage"
          sx={{ width: "50%", mt: 3 }}
          id="outlined-size-small"
          size="small"
          name="mileage"
          onBlur={handleOnBlur}
        />
        <br />
        <TextField
          required
          label="Engine"
          sx={{ width: "50%", mt: 3 }}
          id="outlined-size-small"
          size="small"
          name="engine"
          onBlur={handleOnBlur}
        />
        <br />
        <TextField
          required
          label="Weight"
          sx={{ width: "50%", mt: 3 }}
          id="outlined-size-small"
          size="small"
          name="weight"
          onBlur={handleOnBlur}
        />
        <br />
        <button type="submit" className="reg-btn mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
