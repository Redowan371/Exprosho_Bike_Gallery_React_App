import { TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch(`https://thawing-crag-19500.herokuapp.com/users/admin`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className="title">
        <h1 className=" mt-3 text-uppercase" style={{ textAlign: "center" }}>
          <span>Make an Admin</span>
        </h1>
      </div>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          style={{ width: "500px" }}
          onBlur={handleOnBlur}
          label="Email"
          type="email"
          variant="standard"
        />
        <button type="submit" className="reg-btn mt-2 ms-2">
          Make Admin
        </button>
      </form>
      {success && alert("This User Make Admin successfully")}
    </div>
  );
};

export default MakeAdmin;
