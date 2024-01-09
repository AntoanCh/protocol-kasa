import CashSales from "./CashSales";
import Vouchers from "./Vouchers";
import Ref from "./Ref";
import Shift from "./Shift";
import Others from "./Others";
import "../../App.css";
import { useOutletContext } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";

function Protocol({ kasa, obekt }) {
  const [state, handleState, handleCash, handleRef] = useOutletContext();
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);

  const handleChange = (event) => {
    if (event.target.value) {
      const newValue = parseInt(event.target.value);

      handleState("main", "printer", newValue, kasa);
    } else {
      handleState("main", "printer", 0, kasa);
    }
  };

  return (
    <div className="container">
      <h1>ПРОТОКОЛ ЗА РАБОТА НА КАСА {kasa}</h1>
      <div className="top">
        <div className="inline-input">
          <label>№ на фискален принтер:</label>
          <input
            type="text"
            onChange={handleChange}
            value={state[kasa - 1].main.printer}
          ></input>
        </div>
        <div className="inline-input">
          <label>Обект</label>
          <input disabled type="text" defaultValue={obekt} />
          {/* <TextField label="Обект" disabled value={obekt} /> */}
        </div>
        <div className="inline-input">
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Дата"
              defaultValue={dayjs()}
              format="DD/MM/YYYY"
            />
          </LocalizationProvider> */}
          <label>Дата:</label>
          <input type="text" defaultValue={dayjs().format("DD/MM/YYYY")} />
        </div>
      </div>

      <Shift kasa={kasa} handleState={handleState} state={state} />

      <div className="bottom">
        <CashSales kasa={kasa} handleCash={handleCash} state={state} />
        <div>
          <Vouchers kasa={kasa} handleState={handleState} state={state} />
          <Others kasa={kasa} handleState={handleState} state={state} />
        </div>
      </div>
      <div className="bottom2">
        <Ref
          kasa={kasa}
          handleRef={handleRef}
          state={state}
          handleState={handleState}
        />
      </div>
      <div>
        <button onClick={() => window.print()} className="print-btn">
          PRINT
        </button>
      </div>
    </div>
  );
}

export default Protocol;
