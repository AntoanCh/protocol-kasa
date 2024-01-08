import React from "react";
import { Tab, Tabs, Avatar, Badge } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

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
    `/${obekt}`,
  ]);

  const currentTab = routeMatch?.pattern?.path;
  console.log(routeMatch?.pattern?.path);

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
      {/* <Badge
        badgeContent={""}
        color="success"
        sx={{ top: "13px", left: "10px" }}
      >
        <Avatar
          variant="rounded"
          sx={{
            padding: "2px",
            bgcolor: deepOrange[500],
          }}
        >
          {obekt.replace(/n/, "Н")}
        </Avatar>
      </Badge> */}

      <CustomTabs centered value={currentTab}>
        {generateTabs(kasi)}
        <CustomTab
          label={`ТОТАЛ`}
          value={`/${obekt}/total`}
          to={`/${obekt}/total`}
          component={Link}
        />
      </CustomTabs>

      <SpeedDial
        direction="down"
        ariaLabel="SpeedDial basic example"
        FabProps={{
          sx: {
            bgcolor: deepOrange[500],
            "&:hover": {
              bgcolor: "#4bb543",
            },
          },
        }}
        sx={{
          position: "fixed",
          top: "2px",
          left: "95%",
        }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<SaveIcon />} tooltipTitle={"Запази"} />
        <SpeedDialAction
          onClick={() => {
            window.print();
          }}
          icon={<PrintIcon />}
          tooltipTitle={"Принтирай"}
        />
      </SpeedDial>
    </div>
  );
}

export default Header;
