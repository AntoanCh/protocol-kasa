import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1>ОБЕКТ</h1>

      <Button component={Link} to="/n1" variant="outlined">
        Н1
      </Button>

      <Button component={Link} to="/n5" variant="outlined">
        Н5
      </Button>
      <Button component={Link} to="/n6" variant="outlined">
        Н6
      </Button>
      <Button component={Link} to="/n8" variant="outlined">
        Н8
      </Button>
      <Button component={Link} to="/n10" variant="outlined">
        Н10
      </Button>
      <Button component={Link} to="/n12" variant="outlined">
        Н12
      </Button>
      <Button component={Link} to="/n14" variant="outlined">
        Н14
      </Button>
      <Button component={Link} to="/n16" variant="outlined">
        Н16
      </Button>
      <Button component={Link} to="/n17" variant="outlined">
        Н17
      </Button>
      <Button component={Link} to="/n19" variant="outlined">
        Н19
      </Button>
    </div>
  );
}

export default Home;
