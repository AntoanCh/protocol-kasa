import CashSales from "./CashSales";
import Vouchers from "./Vouchers";
import Ref from "./Ref";
import Shift from "./Shift";
import "../App.css";

function Protocol({ kasa, obekt }) {
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
          <input disabled type="text" value={obekt} />
        </div>
        <div className="inline-input">
          <label htmlFor="data">Дата:</label>
          <input value={date} type="date" id="date"></input>
        </div>
      </div>

      <Shift />

      <div className="bottom">
        <CashSales />
        <Vouchers />
        <Ref />

        <div>
          <label>Инкасо</label>
          <input type="text"></input>
          <label>Сторно</label>
          <input type="text"></input>
        </div>
      </div>
      <div>
        <button className="print-btn">ГОТОВО</button>
      </div>
    </div>
  );
}

export default Protocol;
