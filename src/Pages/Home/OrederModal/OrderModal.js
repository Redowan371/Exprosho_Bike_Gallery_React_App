import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const OrderModal = ({ openOrder, handleOrderModalClose, productDetails }) => {
  const { product_description, product_name, price, engine, weight, mileage } =
    productDetails;
  const { user } = useAuth();

  const initialInfo = {
    userName: user.displayName,
    email: user.email,
    price: price,
    mileage: mileage,
    weight: weight,
    engine: engine,
  };
  const [orderInfo, setOrderInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  };

  const handleOrderSubmit = (e) => {
    // Collect Data from form to send Server..
    const userOrder = {
      ...orderInfo,
      pdName: product_name,
      pd_Des: product_description,
    };
    fetch(`https://thawing-crag-19500.herokuapp.com/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Submitted Successfully");
          handleOrderModalClose();
        }
      });
    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openOrder}
      onClose={handleOrderModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openOrder}>
        <Box sx={style} style={{ textAlign: "center" }}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {product_name}
          </Typography>
          <form onSubmit={handleOrderSubmit}>
            <TextField
              label="Name"
              sx={{ width: "90%", mt: 3 }}
              id="outlined-size-small"
              size="small"
              name="userName"
              defaultValue={user.displayName}
              onBlur={handleOnBlur}
            />
            <TextField
              required
              label="Phone"
              sx={{ width: "90%", mt: 3 }}
              id="outlined-size-small"
              size="small"
              type="number"
              name="phone"
              onBlur={handleOnBlur}
            />
            <TextField
              label="Email"
              sx={{ width: "90%", mt: 3 }}
              id="outlined-size-small"
              size="small"
              defaultValue={user.email}
              name="email"
              onBlur={handleOnBlur}
            />
            <TextField
              label="Price"
              disabled
              sx={{ width: "90%", mt: 3 }}
              id="outlined-size-small"
              defaultValue={price}
              size="small"
              name="price"
              onBlur={handleOnBlur}
            />
            <TextField
              label="Mileage"
              disabled
              sx={{ width: "90%", mt: 3 }}
              id="outlined-size-small"
              defaultValue={mileage}
              size="small"
              name="mileage"
              onBlur={handleOnBlur}
            />
            <TextField
              label="Weight"
              disabled
              sx={{ width: "90%", mt: 3 }}
              id="outlined-size-small"
              defaultValue={weight}
              name="weight"
              size="small"
              onBlur={handleOnBlur}
            />
            <TextField
              label="Engine"
              disabled
              sx={{ width: "90%", mt: 3 }}
              id="outlined-size-small"
              defaultValue={engine}
              size="small"
              name="engine"
              onBlur={handleOnBlur}
            />
            <Link to="/dashboard">
              <button type="submit" className="reg-btn mt-3">
                Submit
              </button>
            </Link>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default OrderModal;
