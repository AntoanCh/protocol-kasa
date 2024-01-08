import { Divider } from "@mui/material";
import { useOutletContext } from "react-router-dom";

function TotalProtocol({ obekt }) {
  const [state] = useOutletContext();
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);
  const cash = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  const vouchers = [
    ["Содексо", "sodekso"],
    ["Етап Адресс", "etap"],
    ["Идънред", "idunred"],
    ["Бълг. пощи", "poshti"],
    ["Томбоу", "tombou"],
    ["Дежене", "dejene"],
    ["Призма лукс", "prizma"],
    ["Фидуция", "fiducia"],
  ];
  const other = [
    ["Терминал общо", "terminal"],
    ["Кеш бек", "cashBack"],
    ["РКО", "rko"],
  ];
  const refs = [
    ["Чек:", "check"],
    ["С карта:", "karta"],
    ["Кредит(Glovo):", "glovo"],
  ];
  const refs2 = [
    ["Инкасо", "inkaso"],
    ["Сторно", "storno"],
  ];
  let totalRef = 0;
  refs.map((item) => {
    totalRef =
      totalRef +
      state.reduce((sum, obj) => sum + parseFloat(obj.ref[item[1]]), 0);
  });
  let totalRef2 = 0;
  refs2.map((item) => {
    totalRef2 =
      totalRef2 +
      state.reduce((sum, obj) => sum + parseFloat(obj.ref2[item[1]]), 0);
  });
  let totalOther = 0;
  totalOther = state.reduce((sum, obj) => sum + obj.totals.other, 0);
  let totalCash = 0;
  totalCash = state.reduce((sum, obj) => sum + obj.totals.cash, 0);

  let totalVouchers = 0;
  totalVouchers = state.reduce((sum, obj) => sum + obj.totals.vouchers, 0);

  let totalClients = 0;
  totalClients = state.reduce((sum, obj) => sum + obj.klienti, 0);
  const generateCashSales = () => {
    return cash.map((item, index) => (
      <div key={index} className="cash-table">
        <input
          disabled
          name={item}
          type="text"
          defaultValue={state.reduce((sum, obj) => sum + obj.cash[item][0], 0)}
        ></input>
        <input type="text" defaultValue={`${item} лв`} disabled></input>
        <input
          type="text"
          defaultValue={state.reduce((sum, obj) => sum + obj.cash[item][1], 0)}
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
  const generateOther = () => {
    return other.map((item, index) => (
      <div key={index} className="inline-input">
        <label>{item[0]}</label>
        <input
          disabled
          name={item[1]}
          defaultValue={state.reduce(
            (sum, obj) => sum + parseFloat(obj.other[item[1]]),
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
  const generateRefs2 = () => {
    return refs2.map((item, index) => (
      <div key={index} className="inline-input">
        <label>{item[0]}</label>
        <input
          disabled
          defaultValue={state.reduce(
            (sum, obj) => sum + parseFloat(obj.ref2[item[1]]),
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
            <label>Сума ваучери</label>
            <input
              disabled
              step="0.01"
              type="number"
              value={totalVouchers}
            ></input>
          </div>
          <Divider />
          {generateOther()}
          <Divider />
          <div className="inline-input">
            <label>ТОТАЛ</label>
            <input
              disabled
              step="0.01"
              type="number"
              value={totalVouchers + totalOther + totalCash}
            ></input>
          </div>
        </div>
        <div>
          <h3>Справка</h3>
          <div className="inline-input">
            <label>По лента:</label>
            <input disabled value={totalCash + totalRef2} type="text"></input>
          </div>
          {generateRefs()}
          {generateRefs2()}
          <div className="inline-input">
            <label>Бр Клиенти:</label>
            <input disabled value={totalClients} type="text"></input>
          </div>
          <div className="inline-input">
            <label>Общо:</label>
            <input
              disabled
              value={totalCash + totalRef2 + totalRef}
              type="text"
            ></input>
          </div>
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
