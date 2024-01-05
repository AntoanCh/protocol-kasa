import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        maxWidth: "40%",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1>ОБЕКТ</h1>

      <Button fullWidth component={Link} to="/n1/kasa1" variant="outlined">
        НИКОН 1
      </Button>

      <Button fullWidth component={Link} to="/n4/kasa1" variant="outlined">
        НИКОН 4
      </Button>
      <Button fullWidth component={Link} to="/n5/kasa1" variant="outlined">
        НИКОН 5
      </Button>
      <Button fullWidth component={Link} to="/n6/kasa1" variant="outlined">
        НИКОН 6
      </Button>
      <Button fullWidth component={Link} to="/n7/kasa1" variant="outlined">
        НИКОН 7
      </Button>
      <Button fullWidth component={Link} to="/n8/kasa1" variant="outlined">
        НИКОН 8
      </Button>
      <Button fullWidth component={Link} to="/n10/kasa1" variant="outlined">
        НИКОН 10
      </Button>
      <Button fullWidth component={Link} to="/n12/kasa1" variant="outlined">
        НИКОН 12
      </Button>
      <Button fullWidth component={Link} to="/n14/kasa1" variant="outlined">
        НИКОН 14
      </Button>
      <Button fullWidth component={Link} to="/n16/kasa1" variant="outlined">
        НИКОН 16
      </Button>
      <Button fullWidth component={Link} to="/n17/kasa1" variant="outlined">
        НИКОН 17
      </Button>
      <Button fullWidth component={Link} to="/n19/kasa1" variant="outlined">
        НИКОН 19
      </Button>
    </div>
  );
}

export default Home;
