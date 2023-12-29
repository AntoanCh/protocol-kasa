import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

function Header({ obekt, kasi }) {
  //Custom tabs from material ui
  const CustomTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: "#ffad35",
    },
  });

  const CustomTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
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
    `/${obekt}/kasa1`,
    `/${obekt}/kasa2`,
    `/${obekt}/kasa3`,
    `/${obekt}/kasa4`,
    `/${obekt}/kasa5`,
    `/${obekt}/kasa6`,
    `/${obekt}/total`,
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
          label={`КАСА ${i}`}
          value={`/${obekt}/kasa${i}`}
          to={`/${obekt}/kasa${i}`}
          component={Link}
        />
      );
    }
    return arr;
  };

  return (
    <div className="header">
      <CustomTabs centered value={currentTab}>
        {generateTabs(kasi)}
        <CustomTab
          label={`ТОТАЛ`}
          value={`/${obekt}/total`}
          to={`/${obekt}/total`}
          component={Link}
        />
      </CustomTabs>
    </div>
  );
}

export default Header;