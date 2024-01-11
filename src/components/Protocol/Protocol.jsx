import CashSales from "./CashSales";
import Vouchers from "./Vouchers";
import Ref from "./Ref";
import Shift from "./Shift";
import Others from "./Others";
import "../../App.css";
import { useOutletContext } from "react-router-dom";
import dayjs from "dayjs";

function Protocol({ kasa, obekt }) {
  const [state, handleState, handleCash, handleRef, printers] =
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
