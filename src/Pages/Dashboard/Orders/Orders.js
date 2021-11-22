import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `https://thawing-crag-19500.herokuapp.com/users?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
  const handleDelete = (id) => {
    const confrim = window.confirm("you want delete this item?");
    if (confrim) {
      fetch(`https://thawing-crag-19500.herokuapp.com/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete Successfully");
            const remainingUser = orders.filter((a) => a._id !== id);
            setOrders(remainingUser);
          }
        });
    }
  };
  return (
    <>
      <div className="title">
        <h1 className=" mt-3 text-uppercase" style={{ textAlign: "center" }}>
          <span>Your Order List</span>
          <small className="ms-3" style={{ fontSize: "30px" }}>
            <AddShoppingCartIcon />{" "}
            <sup style={{ color: "red" }}>{orders.length}</sup>
          </small>
        </h1>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Orders Table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Your Name</TableCell>
              <TableCell align="right">Your Phone</TableCell>
              <TableCell align="right">Cancel Order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.pdName}
                </TableCell>
                <TableCell align="right">{row.userName}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">
                  <button
                    onClick={() => handleDelete(row._id)}
                    className="reg-btn"
                  >
                    Canceled
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/congratulation">
        <button className="reg-btn mt-3">Place Order</button>
      </Link>
    </>
  );
};

export default Orders;
