import React from "react";

function Shift({ kasa, handleState, state }) {
  const handleChange = (event) => {
    const arr = event.target.id.split("-");
    if (event.target.value) {
      const newValue = event.target.value;
      handleState(arr[1], arr[0], newValue, kasa);
    } else {
      handleState(arr[1], arr[0], "", kasa);
    }
  };

  return (
    <div className="shift-container">
      <div className="shift">
        <h3>Начало на работната смяна</h3>
        <div className="cash-table">
          <div className="input1">
            <label htmlFor="name-start">Три имена на касиера</label>
            <input
              onChange={handleChange}
              id="name-start"
              type="text"
              value={state[kasa - 1].start.name}
            ></input>
          </div>
          <div className="input2">
            <label htmlFor="sum-start">Касов депозит</label>
            <input
              onChange={handleChange}
              id="sum-start"
              type="text"
              value={state[kasa - 1].start.sum}
            ></input>
          </div>
          <div className="input3">
            <label htmlFor="name-start">Брой цигари</label>
            <input
              onChange={handleChange}
              id="cigs-start"
              type="text"
              value={state[kasa - 1].start.cigs}
            ></input>
          </div>
        </div>

        <div>
          <input disabled placeholder="Подпис касиер" type="text"></input>
        </div>
        <div>
          <p>Имена и подпис на Зам. Управител/Главен касиер :</p>
          <input
            onChange={handleChange}
            id="name2-start"
            type="text"
            value={state[kasa - 1].start.name2}
          ></input>
        </div>
      </div>
      <div className="shift">
        <h3>Край на работната смяна</h3>
        <div className="cash-table">
          <div className="input1">
            <label htmlFor="name-end">Три имена на касиера</label>
            <input
              onChange={handleChange}
              id="name-end"
              type="text"
              value={state[kasa - 1].end.name}
            ></input>
          </div>
          <div className="input2">
            <label htmlFor="sum-end">Касов депозит</label>
            <input
              onChange={handleChange}
              id="sum-end"
              type="text"
              value={state[kasa - 1].end.sum}
            ></input>
          </div>
          <div className="input3">
            <label htmlFor="name-end">Брой цигари</label>
            <input
              onChange={handleChange}
              id="cigs-end"
              type="text"
              value={state[kasa - 1].end.cigs}
            ></input>
          </div>
        </div>

        <div>
          <input disabled placeholder="Подпис касиер" type="text"></input>
        </div>
        <div>
          <p>Имена и подпис на Зам. Управител/Главен касиер :</p>
          <input
            onChange={handleChange}
            id="name2-end"
            type="text"
            value={state[kasa - 1].end.name2}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Shift;
