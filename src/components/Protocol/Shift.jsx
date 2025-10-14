import React from "react";
import { useState } from "react";
import { Slide, Alert,Box, Divider } from "@mui/material";
import { useAppState } from "../AppStateContext";



function Shift(
  { kasa, 
    // handleState, state 
  }
) {

  const { state, handleCash, handleState, handleRef } = useAppState();
  const [alert, setAlert] = useState(false);
  function isNumeric(value) {
    return /\d+(\.\d+)?$/.test(value);
  }

  const handleBlur = (event) => {
    if (isNumeric(event.target.value) || event.target.value === "") {
      setAlert(false);
      event.target.style.borderColor = "";
    } else {
      setAlert(true);
      event.target.style.borderColor = "red";
    }
  };
  const handleChange = (event) => {
    const arr = event.target.id.split("-");
    if (event.target.value) {
      const newValue = event.target.value;
      handleState(arr[1], arr[0], newValue, kasa);
    } else {
      handleState(arr[1], arr[0], "", kasa);
    }
  };

  return (
    <>
      {alert && (
        <Slide in={alert} direction="down">
          <Alert
            variant="filled"
            severity="error"
            onClose={() => {
              setAlert(false);
            }}
          >
            Въведете число
          </Alert>
        </Slide>
      )}

      <div className="shift">
        {/* <h3>Начало на работната смяна</h3> */}

        <div className="cash-table">
          <div className="input1">
            <label htmlFor="name-start">Три имена на касиера</label>
            <input
              onChange={handleChange}
              id="name-start"
              type="text"
              value={state[kasa - 1].start.name}
            ></input>
          </div>
          <div className="input2">
            <label htmlFor="sum-start">Касов депозит</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              id="sum-start"
              type="text"
              value={state[kasa - 1].start.sum}
            ></input>
          </div>
          {/* <div className="input3">
            <label htmlFor="name-start">Брой цигари</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              id="cigs-start"
              type="text"
              value={state[kasa - 1].start.cigs}
            ></input>
          </div> */}
        </div>

        <Box > 
          <input disabled placeholder="Подпис касиер" type="text"></input>
        </Box>
        <Box sx={{marginTop: -2}}>
          <p>Имена и подпис на Зам. Управител/Главен касиер :</p>
          <input
            onChange={handleChange}
            id="name2-start"
            type="text"
            value={state[kasa - 1].start.name2}
          ></input>
        </Box>
      </div>

      {/* <div className="shift">
          <h3>Край на работната смяна</h3>
          <div className="cash-table">
            <div className="input1">
              <label htmlFor="name-end">Три имена на касиера</label>
              <input
                onChange={handleChange}
                id="name-end"
                type="text"
                value={state[kasa - 1].end.name}
              ></input>
            </div>
            <div className="input2">
              <label htmlFor="sum-end">Касов депозит</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="sum-end"
                type="text"
                value={state[kasa - 1].end.sum}
              ></input>
            </div>
            <div className="input3">
              <label htmlFor="name-end">Брой цигари</label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="cigs-end"
                type="text"
                value={state[kasa - 1].end.cigs}
              ></input>
            </div>
          </div>

          <div>
            <input disabled placeholder="Подпис касиер" type="text"></input>
          </div>
          <div>
            <p>Имена и подпис на Зам. Управител/Главен касиер :</p>
            <input
              onChange={handleChange}
              id="name2-end"
              type="text"
              value={state[kasa - 1].end.name2}
            ></input>
          </div>
        </div> */}
    </>
  );
}

export default Shift;
