import React from "react";
import { Tab, Tabs, Avatar, Badge } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import logo from "../../static/dar_logo.jpg";

function DashHeader() {
  //Custom tabs from material ui
  const CustomTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: "#ffad35",
    },
  });
  const CustomTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    fontWeight: "800",
    color: "#ec8c00",
    "&:hover": {
      color: "#00ad05",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#00ad05",
      fontWeight: "800",
    },
    "&& .MuiTouchRipple-child": {
      backgroundColor: "green",
    },

    "&.Mui-focusVisible": {
      backgroundColor: "#00ef07",
    },
  }));
  //function for matching the current route for the tabs
  function useRouteMatch(patterns) {
    const { pathname } = useLocation();
    const pn = pathname.replace(/\/kasa[0-9]/, "");

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pn);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
    return null;
  }

  const routeMatch = useRouteMatch([
    `/dash/n1`,
    `/dash/n4`,
    `/dash/n5`,
    `/dash/n6`,
    `/dash/n7`,
    `/dash/n8`,
    `/dash/n10`,
    `/dash/n12`,
    `/dash/n14`,
    `/dash/n16`,
    `/dash/n17`,
    `/dash/n19`,
  ]);

  const currentTab = routeMatch?.pattern?.path;

  const magazini = [
    "1",
    "4",
    "5",
    "6",
    "7",
    "8",
    "10",
    "12",
    "14",
    "16",
    "17",
    "19",
  ];
  //constructor function to generate number of tabs equal to
  //number of cash desks in current store based on prop
  //passed from Main.jsx which is passed from App.jsx with Route definition

  const generateTabs = () => {
    const arr = [];
    for (let [index, name] of magazini.entries()) {
      arr.push(
        <CustomTab
          key={index}
          label={`Н${name}`}
          value={`/dash/n${name}`}
          to={`/dash/n${name}/kasa1`}
          component={Link}
        />
      );
    }
    return arr;
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div>
        {/* <Badge
          badgeContent={obekt.replace("n", "Н")}
          color="success"
          sx={{ top: "13px", left: "10px" }}
        >
          <Avatar
            variant="rounded"
            src={logo}
            sx={{
              padding: "2px",
              bgcolor: deepOrange[500],
            }}
          ></Avatar>
        </Badge> */}
      </div>

      <div>
        <CustomTabs centered value={currentTab}>
          {generateTabs()}
          <CustomTab
            label={`ТОТАЛ`}
            value={`/dash/total`}
            to={`/dash/total`}
            component={Link}
          />
        </CustomTabs>
      </div>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          color="success"
          variant="outlined"
          style={{ top: "5px", right: "20px" }}
        >
          МЕНЮ
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default DashHeader;
