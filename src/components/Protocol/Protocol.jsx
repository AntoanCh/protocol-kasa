import CashSales from "./CashSales";
import Vouchers from "./Vouchers";
import Ref from "./Ref";
import Shift from "./Shift";
import Others from "./Others";
import "../../App.css";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

function Protocol({ kasa, obekt }) {
  const [
    state,
    handleState,
    handleCash,
    handleRef,
    handleClients,
    handlePrinter,
  ] = useOutletContext();
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);

  const handleChange = (event) => {
    if (event.target.value) {
      const newValue = parseInt(event.target.value);

      handlePrinter(kasa, newValue);
    } else {
      handlePrinter(kasa, 0);
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
            placeholder="asdas"
            value={state[kasa - 1].printer}
          ></input>
        </div>
        <div className="inline-input">
          <label>Обект</label>
          <input disabled type="text" defaultValue={obekt} />
        </div>
        <div className="inline-input">
          <label htmlFor="data">Дата:</label>
          <input defaultValue={date} type="date" id="date"></input>
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
          handleClients={handleClients}
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
