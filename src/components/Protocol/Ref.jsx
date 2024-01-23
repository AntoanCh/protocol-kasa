import React from "react";
import RefItem from "./RefItem";
import { Slide, Alert, AlertTitle } from "@mui/material";
import { useState } from "react";

function Ref({ state, handleRef, kasa, handleState }) {
  const refs = [
    ["Чек:", "check"],
    ["С карта:", "karta"],
    ["Кредит(Glovo):", "glovo"],
    ["В Брой", "broi"],
  ];
  const generateRefItems = () => {
    return refs.map((item, index) => (
      <RefItem
        key={index}
        state={state}
        handleRef={handleRef}
        handleAlert={handleAlert}
        label={item[0]}
        name={item[1]}
        kasa={kasa}
      />
    ));
  };

  const handleChange = (event) => {
    if (event.target.value) {
      const newValue = parseInt(event.target.value);

      handleState("main", "klienti", newValue, kasa);
    } else {
      handleState("main", "klienti", 0, kasa);
    }
  };

  const [alert, setAlert] = useState([false, "", ""]);

  const handleAlert = (valid, msg, kasa) => {
    if (valid) {
      const newAlert = [true, "", ""];
      newAlert[1] = msg;
      newAlert[2] = kasa;
      setAlert([...newAlert]);
    }
  };

  return (
    <div>
      {alert[0] && (
        <Slide in={alert} direction="left">
          <Alert
            variant="filled"
            severity="error"
            onClose={() => {
              setAlert([false, ""]);
            }}
          >
            <AlertTitle>Каса {alert[2]} :</AlertTitle>
            {alert[1]}
          </Alert>
        </Slide>
      )}

      <h3>Справка</h3>
      <div className="inline-input">
        <label>По лента:</label>
        <input
          disabled
          value={state[kasa - 1].totals.ref.toFixed(2)}
          type="text"
        ></input>
      </div>
      {generateRefItems()}

      <div className="inline-input">
        <label>Бр Клиенти:</label>
        <input
          name="klienti"
          onChange={handleChange}
          value={state[kasa - 1].main.klienti}
          type="text"
        ></input>
      </div>
    </div>
  );
}

export default Ref;
