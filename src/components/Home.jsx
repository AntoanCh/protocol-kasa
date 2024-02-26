import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";

function Home() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const btnStyle = { margin: "3px 0" };
  return (
    <div
      style={{
        maxWidth: "40%",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1>ПРОТОКОЛИ КАСИ</h1>
      <Button
        style={btnStyle}
        fullWidth
        variant="outlined"
        onClick={handleClick}
        color="error"
      >
        ОБЕКТИ(dev)
        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Button>
      {open && (
        <div>
          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n1/kasa1"
            variant="outlined"
          >
            НИКОН 1
          </Button>

          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n4/kasa1"
            variant="outlined"
          >
            НИКОН 4
          </Button>
          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n5/kasa1"
            variant="outlined"
          >
            НИКОН 5
          </Button>
          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n6/kasa1"
            variant="outlined"
          >
            НИКОН 6
          </Button>
          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n7/kasa1"
            variant="outlined"
          >
            НИКОН 7
          </Button>
          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n8/kasa1"
            variant="outlined"
          >
            НИКОН 8
          </Button>
          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n10/kasa1"
            variant="outlined"
          >
            НИКОН 10
          </Button>
          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n12/kasa1"
            variant="outlined"
          >
            НИКОН 12
          </Button>
          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n14/kasa1"
            variant="outlined"
          >
            НИКОН 14
          </Button>
          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n16/kasa1"
            variant="outlined"
          >
            НИКОН 16
          </Button>
          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n17/kasa1"
            variant="outlined"
          >
            НИКОН 17
          </Button>
          <Button
            style={btnStyle}
            fullWidth
            component={Link}
            to="/n19/kasa1"
            variant="outlined"
          >
            НИКОН 19
          </Button>
        </div>
      )}
      <Button
        style={btnStyle}
        component={Link}
        to="/dash"
        fullWidth
        variant="outlined"
        color="success"
      >
        ПРЕГЛЕД ПРОТОКОЛИ <YoutubeSearchedForIcon />
      </Button>
    </div>
  );
}

export default Home;
