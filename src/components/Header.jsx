import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

function Header({ obekt }) {
  const CusTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: "#ffad35",
    },
  });

  const CusTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
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

  return (
    <div className="header">
      <CusTabs centered value={currentTab}>
        <CusTab
          label="КАСА 1"
          value={`/${obekt}/kasa1`}
          to={`/${obekt}/kasa1`}
          component={Link}
        />
        <CusTab
          label="КАСА 2"
          value={`/${obekt}/kasa2`}
          to={`/${obekt}/kasa2`}
          component={Link}
        />
        <CusTab
          label="КАСА 3"
          value={`/${obekt}/kasa3`}
          to={`/${obekt}/kasa3`}
          component={Link}
        />
        <CusTab
          label="КАСА 4"
          value={`/${obekt}/kasa4`}
          to={`/${obekt}/kasa4`}
          component={Link}
        />
        <CusTab
          label="КАСА 5"
          value={`/${obekt}/kasa5`}
          to={`/${obekt}/kasa5`}
          component={Link}
        />
        <CusTab
          label="КАСА 6"
          value={`/${obekt}/kasa6`}
          to={`/${obekt}/kasa6`}
          component={Link}
        />
        <CusTab
          label="ТОТАЛ"
          value={`/${obekt}/total`}
          to={`/${obekt}/total`}
          component={Link}
        />
      </CusTabs>
    </div>
  );
}

export default Header;
