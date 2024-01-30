import React from "react";
import { Tab, Tabs, Avatar, Badge } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

import logo from "../../static/dar_logo.jpg";

function HeaderProverka() {
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
    `/proverka/n1`,
    `/proverka/n4`,
    `/proverka/n5`,
    `/proverka/n6`,
    `/proverka/n7`,
    `/proverka/n8`,
    `/proverka/n10`,
    `/proverka/n12`,
    `/proverka/n14`,
    `/proverka/n16`,
    `/proverka/n17`,
    `/proverka/n19`,
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
          value={`/proverka/n${name}`}
          to={`/proverka/n${name}`}
          component={Link}
        />
      );
    }
    return arr;
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
            value={`/proverka/total`}
            to={`/proverka/total`}
            component={Link}
          />
        </CustomTabs>
      </div>
      <div></div>
    </div>
  );
}

export default HeaderProverka;
