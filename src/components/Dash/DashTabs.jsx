import React from "react";
import { Tab, Tabs, Avatar, Badge } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

import logo from "../../static/dar_logo.jpg";

function DashTabs({ obekt, kasi }) {
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

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
    return null;
  }

  const routeMatch = useRouteMatch([
    `/dash/${obekt}/kasa1`,
    `/dash/${obekt}/kasa2`,
    `/dash/${obekt}/kasa3`,
    `/dash/${obekt}/kasa4`,
    `/dash/${obekt}/kasa5`,
    `/dash/${obekt}/kasa6`,
  ]);

  const currentTab = routeMatch?.pattern?.path;

  //constructor function to generate number of tabs equal to
  //number of cash desks in current store based on prop
  //passed from Main.jsx which is passed from App.jsx with Route definition

  const generateTabs = (kasi) => {
    const arr = [];
    for (let i = 1; i <= kasi; i++) {
      arr.push(
        <CustomTab
          key={i}
          label={`КАСА ${i}`}
          value={`/dash/${obekt}/kasa${i}`}
          to={`/dash/${obekt}/kasa${i}`}
          component={Link}
        />
      );
    }
    return arr;
  };
  return (
    <div className="header">
      <div>
        <Badge
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
        </Badge>
      </div>

      <div>
        <CustomTabs centered value={currentTab}>
          <CustomTab
            label={`ТОТАЛ`}
            value={`/dash/total`}
            to={`/dash/total`}
            component={Link}
          />
          {generateTabs(kasi)}
        </CustomTabs>
      </div>
      <div></div>
    </div>
  );
}

export default DashTabs;
