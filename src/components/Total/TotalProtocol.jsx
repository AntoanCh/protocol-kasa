import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function TotalProtocol({ obekt }) {
  const [state, handleState] = useOutletContext();
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);
  const cash = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  const vouchers = [
    ["Суми по видове ваучери", "sum"],
    ["Содексо", "sodekso"],
    ["Етап Адресс", "etap"],
    ["Идънред", "idunred"],
    ["Бълг. пощи", "poshti"],
    ["Томбоу", "tombou"],
    ["Дежене", "dejene"],
    ["Призма лукс", "prizma"],
    ["Фидуция", "fiducia"],
    ["Терминал общо", "terminal"],
    ["Кеш бек", "cashBack"],
    ["РКО", "rko"],
  ];
  const refs = [
    ["По лента:", "lenta"],
    ["Чек:", "check"],
    ["С карта:", "karta"],
    ["Кредит(Glovo):", "glovo"],
    ["Бр. Клиенти", "klienti"],
  ];
  let totalRef = 0;
  refs.map((item) => {
    totalRef =
      totalRef +
      state.reduce((sum, obj) => sum + parseFloat(obj.ref[item[1]]), 0);
  });
  let totalCash = 0;
  cash.map((item) => {
    totalCash =
      totalCash + state.reduce((sum, obj) => sum + obj.cash[item], 0) * item;
  });
  let totalVouchers = 0;
  vouchers.map((item) => {
    totalVouchers =
      totalVouchers +
      state.reduce((sum, obj) => sum + parseFloat(obj.vouchers[item[1]]), 0);
  });

  const generateCashSales = () => {
    return cash.map((item, index) => (
      <div key={index} className="cash-table">
        <input
          disabled
          name={item}
          type="text"
          defaultValue={state.reduce((sum, obj) => sum + obj.cash[item], 0)}
        ></input>
        <input type="text" defaultValue={`${item} лв`} disabled></input>
        <input
          type="text"
          defaultValue={state.reduce(
            (sum, obj) => sum + obj.cash[item] * item,
            0
          )}
          disabled
        ></input>
      </div>
    ));
  };
  const generateVouchers = () => {
    return vouchers.map((item, index) => (
      <div key={index} className="inline-input">
        <label>{item[0]}</label>
        <input
          disabled
          name={item[1]}
          defaultValue={state.reduce(
            (sum, obj) => sum + parseFloat(obj.vouchers[item[1]]),
            0
          )}
          type="text"
        ></input>
      </div>
    ));
  };
  const generateRefs = () => {
    return refs.map((item, index) => (
      <div key={index} className="inline-input">
        <label>{item[0]}</label>
        <input
          disabled
          defaultValue={state.reduce(
            (sum, obj) => sum + parseFloat(obj.ref[item[1]]),
            0
          )}
          type="text"
        ></input>
      </div>
    ));
  };
  return (
    <div className="container">
      <h1>ПРОТОКОЛ ЗА РАБОТА НА ОБЕКТ {obekt}</h1>
      <div className="top">
        <div className="inline-input">
          <label>Обект</label>
          <input disabled type="text" defaultValue={obekt} />
        </div>
        <div className="inline-input">
          <label htmlFor="data">Дата:</label>
          <input defaultValue={date} type="date" id="date"></input>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>Продажби в брой</h3>
          {generateCashSales()}
          <div id="totalCash">
            <input type="text" value={"Всичко в брой :"} disabled></input>
            <input type="text" disabled value={totalCash}></input>
          </div>
        </div>
        <div>
          <h3>Ваучери</h3>
          {generateVouchers()}
          <div className="inline-input">
            <label>Тотал</label>
            <input
              disabled
              step="0.01"
              type="number"
              value={totalVouchers}
            ></input>
          </div>
        </div>
        <div>
          <h3>Справка</h3>
          {generateRefs()}
          <div className="inline-input">
            <label>Общо:</label>
            <input disabled value={totalRef} type="text"></input>
          </div>
        </div>

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

export default TotalProtocol;
