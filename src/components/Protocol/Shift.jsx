import React from "react";

function Shift() {
  return (
    <div className="shift-container">
      <div className="shift">
        <h3>Начало на работната смяна</h3>
        <div className="cash-table">
          <div className="input1">
            <label htmlFor="name-start">Три имена на касиера</label>
            <input id="name-start" type="text"></input>
          </div>
          <div className="input2">
            <label htmlFor="sum-start">Сума касов депозит</label>
            <input id="sum-start" type="text"></input>
          </div>
          <div className="input3">
            <label htmlFor="name-start">Брой цигари</label>
            <input id="" type="text"></input>
          </div>
        </div>

        <div>
          <input disabled placeholder="Подпис касиер" type="text"></input>
        </div>
        <div>
          <p>Имена и подпис на Зам. Управител/Главен касиер :</p>
          <input type="text"></input>
        </div>
      </div>
      <div className="shift">
        <h3>Край на работната смяна</h3>
        <div className="cash-table">
          <div className="input1">
            <label htmlFor="name-start">Три имена на касиера</label>
            <input id="name-start" type="text"></input>
          </div>
          <div className="input2">
            <label htmlFor="sum-start">Сума касов депозит</label>
            <input id="sum-start" type="text"></input>
          </div>
          <div className="input3">
            <label htmlFor="name-start">Брой цигари</label>
            <input id="" type="text"></input>
          </div>
        </div>

        <div>
          <input disabled placeholder="Подпис касиер" type="text"></input>
        </div>
        <div>
          <p>Имена и подпис на Зам. Управител/Главен касиер :</p>
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
}

export default Shift;
