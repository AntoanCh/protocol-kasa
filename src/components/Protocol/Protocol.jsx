import CashSales from "./CashSales";
import Vouchers from "./Vouchers";
import Ref from "./Ref";
import Shift from "./Shift";
import Others from "./Others";
import "../../App.css";
import { useOutletContext } from "react-router-dom";
import dayjs from "dayjs";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import UpdateIcon from "@mui/icons-material/Update";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Slide, Alert, AlertTitle } from "@mui/material";
import { useState } from "react";

function Protocol({ kasa, obekt }) {
  const [state, handleDial, handleState, handleCash, handleRef, printers] =
    useOutletContext();

  const handleChange = (event) => {
    if (event.target.value) {
      const newValue = event.target.value;

      handleState("main", "printer", newValue, kasa);
    } else {
      handleState("main", "printer", 0, kasa);
    }
  };
  const generatePrintOptions = (printers) => {
    return printers[obekt].map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
  };
  window.onblur = () => {
    window.location.reload();
  };
  window.onfocus = () => {
    window.location.reload();
  };
  const [alert, setAlert] = useState([false, "possitive"]);

  const handleAlert = (show, check) => {
    if (show) {
      const newAlert = [true, alert[1]];
      setAlert([...newAlert]);
    }
  };
  const handleClick = () => {
    handleAlert(true);
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className="container">
      <h1>ПРОТОКОЛ ЗА РАБОТА НА КАСА {kasa}</h1>
      <div className="top">
        <div className="inline-input">
          <label>Фискален принтер №</label>
          <select onChange={handleChange} value={state[kasa - 1].main.printer}>
            {generatePrintOptions(printers)}
          </select>
        </div>
        <div className="inline-input">
          <label>Обект</label>
          <input disabled type="text" defaultValue={obekt} />
        </div>
        <div className="inline-input">
          <label>Дата:</label>
          <input type="text" defaultValue={dayjs().format("DD/MM/YYYY")} />
        </div>
      </div>

      <Shift kasa={kasa} handleState={handleState} state={state} />

      <SpeedDial
        id="speed-dial"
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
        <SpeedDialAction
          onClick={() => handleDial(["remove", kasa])}
          icon={<DeleteForeverIcon />}
          tooltipTitle={"Изчисти"}
        />
        <SpeedDialAction
          onClick={() => {
            window.print();
          }}
          icon={<PrintIcon />}
          // tooltipTitle={"Принтирай"}
        />
        <SpeedDialAction
          onClick={() => handleDial(["contacts"])}
          icon={<ContactEmergencyIcon />}
          tooltipTitle={"Контакти"}
        />
        <SpeedDialAction
          onClick={() => handleDial(["patch"])}
          icon={<UpdateIcon />}
          tooltipTitle={"Patch Notes"}
        />
      </SpeedDial>
      {/* {alert[0] && (
        <Slide in={alert} direction="left">
          <Alert
            className="alert"
            style={{ margin: "auto", width: "90%", display: "block" }}
            variant="filled"
            severity="error"
          >
            <AlertTitle>Каса {kasa} :</AlertTitle>
            {alert[1] ? "Касата не се засича" : "Касата се засича"}
          </Alert>
        </Slide>
      )} */}
      <div className="bottomNew">
        <div className="bottom">
          <CashSales kasa={kasa} handleCash={handleCash} state={state} />
          <div>
            <Vouchers kasa={kasa} handleState={handleState} state={state} />
            <Others kasa={kasa} handleState={handleState} state={state} />
          </div>
        </div>

        <div className="bottom2">
          <Ref
            handleAlert={handleAlert}
            kasa={kasa}
            handleRef={handleRef}
            state={state}
            handleState={handleState}
          />
        </div>
      </div>

      <div>
        <button onClick={handleClick} className="print-btn">
          PRINT
        </button>
      </div>
    </div>
  );
}

export default Protocol;
