import CashSales from "./CashSales";
import Vouchers from "./Vouchers";
import Ref from "./Ref";
import Shift from "./Shift";
import "../../App.css";
import { useOutletContext } from "react-router-dom";

function Protocol({ kasa, obekt }) {
  const [state, handleState] = useOutletContext();
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);

  return (
    <div className="container">
      <h1>ПРОТОКОЛ ЗА РАБОТА НА КАСА {kasa}</h1>
      <div className="top">
        <div className="inline-input">
          <label>№ на фискален принтер:</label>
          <input type="text"></input>
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
        <CashSales kasa={kasa} handleState={handleState} state={state} />
        <Vouchers kasa={kasa} handleState={handleState} state={state} />
        <Ref kasa={kasa} handleState={handleState} state={state} />

        <div>
          <label>Инкасо</label>
          <input type="text"></input>
          <label>Сторно</label>
          <input type="text"></input>
        </div>
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
