import React from "react";
import CashSales from "../Protocol/CashSales";
import Vouchers from "../Protocol/Vouchers";
import Ref from "../Protocol/Ref";
import { useContext } from "react";
import { TotalContext } from "../../Context/TotalContext";

function TotalProtocol({ obekt }) {
  const { total, setTotal } = useContext(TotalContext);
  console.log(total[2][2]);
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);
  return (
    <div className="container">
      <h1>ПРОТОКОЛ ЗА РАБОТА НА ОБЕКТ {obekt}</h1>
      <div className="top">
        <div className="inline-input">
          <label>Обект</label>
          <input disabled type="text" value={obekt} />
        </div>
        <div className="inline-input">
          <label htmlFor="data">Дата:</label>
          <input value={date} type="date" id="date"></input>
        </div>
      </div>

      <div className="bottom">
        <CashSales disabled={true} />
        <div>
          <h3>Ваучери</h3>
          <div className="inline-input">
            <label>ВАучери</label>

            <input
              value={total[2][0][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>Содексо</label>

            <input
              value={total[2][1][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>Етап Адрес</label>

            <input
              value={total[2][2][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>Идънред</label>

            <input
              value={total[2][3][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>Бълг. пощи</label>

            <input
              value={total[2][4][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>Томбоу</label>

            <input
              value={total[2][5][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>Дежене</label>

            <input
              value={total[2][6][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>Призма лукс</label>

            <input
              value={total[2][7][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>Фидужия</label>

            <input
              value={total[2][8][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>Терминал общо</label>

            <input
              value={total[2][9][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>Кеш бек</label>

            <input
              value={total[2][10][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>РКО</label>

            <input
              value={total[2][11][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>
          <div className="inline-input">
            <label>ВАучери</label>

            <input
              value={total[2][12][0]}
              onWheel={(e) => e.target.blur()}
              type="number"
            ></input>
          </div>

          <div className="inline-input">
            <label>Тотал</label>
            <input
              disabled
              //   value={values.reduce((sum, item) => sum + item[0], 0).toFixed(2)}
              step="0.01"
              type="number"
            ></input>
          </div>
        </div>
        <Ref />

        <div>
          <label>Инкасо</label>
          <input type="text"></input>
          <label>Сторно</label>
          <input type="text"></input>
        </div>
      </div>
      <div>
        <button className="print-btn">PRINT</button>
      </div>
    </div>
  );
}

export default TotalProtocol;
