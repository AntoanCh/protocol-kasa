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

      <Button fullWidth component={Link} to="/n1" variant="outlined">
        НИКОН 1
      </Button>

      <Button fullWidth component={Link} to="/n4" variant="outlined">
        НИКОН 4
      </Button>
      <Button fullWidth component={Link} to="/n5" variant="outlined">
        НИКОН 5
      </Button>
      <Button fullWidth component={Link} to="/n6" variant="outlined">
        НИКОН 6
      </Button>
      <Button fullWidth component={Link} to="/n7" variant="outlined">
        НИКОН 7
      </Button>
      <Button fullWidth component={Link} to="/n8" variant="outlined">
        НИКОН 8
      </Button>
      <Button fullWidth component={Link} to="/n10" variant="outlined">
        НИКОН 10
      </Button>
      <Button fullWidth component={Link} to="/n12" variant="outlined">
        НИКОН 12
      </Button>
      <Button fullWidth component={Link} to="/n14" variant="outlined">
        НИКОН 14
      </Button>
      <Button fullWidth component={Link} to="/n16" variant="outlined">
        НИКОН 16
      </Button>
      <Button fullWidth component={Link} to="/n17" variant="outlined">
        НИКОН 17
      </Button>
      <Button fullWidth component={Link} to="/n19" variant="outlined">
        НИКОН 19
      </Button>
    </div>
  );
}

export default Home;
