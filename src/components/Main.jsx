/* eslint-disable default-case */
import React from "react";
import Header from "./Header";
import { Outlet, json } from "react-router-dom";
import Footer from "./Footer";
import { useState, useEffect, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Main({ kasi, obekt }) {
  //function that generates the whole state of the application
  //state is array of objects of nested objects containing values
  const generateState = () => {
    const arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push({
        main: {
          printer: "",
          klienti: 0,
        },

        start: {
          name: "",
          sum: "",
          cigs: "",
          name2: "",
        },
        cash: {
          100: [0, 0],
          50: [0, 0],
          20: [0, 0],
          10: [0, 0],
          5: [0, 0],
          2: [0, 0],
          1: [0, 0],
          0.5: [0, 0],
          0.2: [0, 0],
          0.1: [0, 0],
          0.05: [0, 0],
          0.02: [0, 0],
          0.01: [0, 0],
        },
        vouchers: {
          sodekso: 0,
          etap: 0,
          idunred: 0,
          poshti: 0,
          tombou: 0,
          dejene: 0,
          prizma: 0,
          fiducia: 0,
        },
        other: {
          terminal: 0,
          cashBack: 0,
          glovo: 0,
          rko: 0,
          inkaso: 0,
          storno: 0,
        },
        ref: {
          check: 0,
          karta: 0,
          glovo: 0,
          broi: 0,
        },
        totals: {
          cash: 0.0,
          vouchers: 0,
          other: 0,
          total: 0,
          ref: 0,
        },
      });
    }
    return arr;
  };

  const printers = {
    Н1: ["Избери", "DT511610", "DT794867", "DT794870"],
    Н4: [],
    Н5: [
      "Избери",
      "DT794832",
      "DT794834",
      "DT794835",
      "DT794846",
      "DT794831",
      "DT511664",
      "DT511677",
    ],
    Н6: ["Избери", "DT890249", "DT511930", "DT890047", "DT790266", "DT890051"],
    Н7: [],
    Н8: ["Избери", "DT794869", "DT794858", "DT794866", "DT511692"],
    Н10: ["Избери", "DT794373", "DT794374", "DT794358", "DT511727"],
    Н12: ["Избери", "DT556965", "DT890482", "DT890483"],
    Н14: [
      "Избери",
      "DT511361",
      "DT794380",
      "DT792454",
      "DT511359",
      "DT511353",
      "DT511386",
      "DT511574",
    ],
    Н16: ["Избери", "DT794349", "DT794384", "DT511691"],
    Н17: ["Избери", "DT790238", "DT790237", "DT511693"],
    Н19: ["Избери", "DT511387", "DT511380", "DT511607"],
  };
  const [state, setState] = useState(generateState());

  const newTotalCash = (obj) => {
    let newTotal = 0;
    for (let item in obj) {
      newTotal = newTotal + obj[item][1];
    }
    return newTotal;
  };
  const newTotal = (obj) => {
    let newTotal = 0;
    for (let item in obj) {
      newTotal = newTotal + parseFloat(obj[item]);
    }
    return newTotal;
  };
  const newTotalRef = (obj) => {
    let newTotal = 0;
    for (let item in obj) {
      newTotal = newTotal + parseFloat(obj[item]);
    }
    return newTotal;
  };

  const handleCash = (input, newValue, kasa) => {
    const newState = [...state];
    switch (kasa) {
      case "1":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
      case "2":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].cash[input][1].toFixed(2);
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
      case "3":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
      case "4":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
      case "5":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
      case "6":
        newState[kasa - 1].cash[input][0] = newValue;
        newState[kasa - 1].cash[input][1] = newValue * input;
        newState[kasa - 1].totals.cash = newTotalCash(
          newState[kasa - 1].cash
        ).toFixed(2);

        setState([...newState]);
        break;
    }
  };

  const handleRef = (group, input, newValue, kasa) => {
    const newState = [...state];
    switch (kasa) {
      case "1":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
      case "2":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
      case "3":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
      case "4":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
      case "5":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
      case "6":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotalRef(
          newState[kasa - 1][group]
        );
        newState[kasa - 1].totals.lenta =
          newState[kasa - 1].totals.cash + newState[kasa - 1].totals.ref2;
        newState[kasa - 1].totals.obshto =
          newState[kasa - 1].totals.lenta + newState[kasa - 1].totals.ref;
        setState([...newState]);
        break;
    }
  };
  //function handling state changing based on cash register
  //so every cash register has its own object in the state
  //group is the second object
  const handleState = (group, input, newValue, kasa) => {
    const newState = [...state];
    switch (kasa) {
      case "1":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
      case "2":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
      case "3":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
      case "4":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
      case "5":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
      case "6":
        newState[kasa - 1][group][input] = newValue;
        newState[kasa - 1].totals[group] = newTotal(newState[kasa - 1][group]);
        setState([...newState]);
        break;
    }
  };
  const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
      if (didMount.current) func();
      else didMount.current = true;
    }, deps);
  };

  useEffect(() => {
    if (localStorage.getItem("STATE")) {
      const newState = JSON.parse(localStorage.getItem("STATE"));
      setState([...newState]);
    }
  }, []);
  useDidMountEffect(() => {
    window.localStorage.setItem("STATE", JSON.stringify(state));
  }, [state]);

  const [removeDial, setRemoveDial] = useState([false, ""]);
  const [contactDial, setContactDial] = useState(false);
  const handleSave = () => {
    window.localStorage.setItem("STATE", JSON.stringify(state));
  };
  const handleRemove = (kasa) => {
    if (kasa === "all") {
      window.localStorage.removeItem("STATE");
    } else {
      const newState = [...state];
      newState[kasa - 1] = {
        main: {
          printer: "",
          klienti: 0,
        },

        start: {
          name: "",
          sum: "",
          cigs: "",
          name2: "",
        },
        cash: {
          100: [0, 0],
          50: [0, 0],
          20: [0, 0],
          10: [0, 0],
          5: [0, 0],
          2: [0, 0],
          1: [0, 0],
          0.5: [0, 0],
          0.2: [0, 0],
          0.1: [0, 0],
          0.05: [0, 0],
          0.02: [0, 0],
          0.01: [0, 0],
        },
        vouchers: {
          sodekso: 0,
          etap: 0,
          idunred: 0,
          poshti: 0,
          tombou: 0,
          dejene: 0,
          prizma: 0,
          fiducia: 0,
        },
        other: {
          terminal: 0,
          cashBack: 0,
          glovo: 0,
          rko: 0,
          inkaso: 0,
          storno: 0,
        },
        ref: {
          check: 0,
          karta: 0,
          glovo: 0,
          broi: 0,
        },
        totals: {
          cash: 0.0,
          vouchers: 0,
          other: 0,
          total: 0,
          ref: 0,
        },
      };
      window.localStorage.setItem("STATE", JSON.stringify(newState));
    }

    window.location.reload();
    setSnack(true);
  };
  const handleDial = (dial) => {
    if (dial[0] === "remove") {
      setRemoveDial([true, dial[1]]);
    }
    if (dial[0] === "contacts") {
      setContactDial(true);
    }
  };
  const handleClose = () => {
    setRemoveDial([false, ""]);
    setContactDial(false);
  };
  //snackbar
  const [snack, setSnack] = useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnack(false);
  };

  return (
    <div>
      <Dialog open={removeDial[0]} onClose={handleClose}>
        <DialogTitle>{"Изтриване на данните?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {removeDial[1] === "all"
              ? "Сигурни ли сте, че искате да изтриете данните за ВСИЧКИ каси"
              : ` Сигурни ли сте, че искате да изтриете данните за каса
            ${removeDial[1]}?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Не
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={() => handleRemove(removeDial[1])}
          >
            Да
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={contactDial}
        onClose={handleClose}
        fullWidth
        maxWidth={"xs"}
      >
        <DialogTitle>{"Контакти"}</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ maxWidth: 230, fontWeight: "600" }}>
            Антоан Чавдаров Отдел ИТ email: a.chavdarov@magazinidar.bg Phone:
            0882112291
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="success" variant="outlined" onClick={handleClose}>
            ОК
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snack} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert
          onClose={handleCloseSnack}
          severity="error"
          sx={{ width: "100%" }}
        >
          Данните са изтрити!
        </Alert>
      </Snackbar>

      <Header
        kasi={kasi}
        obekt={obekt}
        handleSave={handleSave}
        handleDial={handleDial}
      />
      <Outlet
        context={[
          state,
          handleDial,
          handleState,
          handleCash,
          handleRef,
          printers,
        ]}
      />
      <Footer />
    </div>
  );
}

export default Main;
