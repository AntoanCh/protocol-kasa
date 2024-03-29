import { Divider } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import dayjs from "dayjs";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import WarningAmber from "@mui/icons-material/WarningAmber";
import { red } from "@mui/material/colors";

function TotalProtocol({ obekt }) {
  const [state, handleDial] = useOutletContext();
  const cash = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  const vouchers = [
    ["Содексо", "sodekso"],
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
    ["Кредит(glovo)", "glovo"],
    ["РКО", "rko"],
    ["Инкасо", "inkaso"],
    ["Сторно", "storno"],
  ];
  const refs = [
    ["Чек:", "check"],
    ["С карта:", "karta"],
    ["Кредит(Glovo):", "glovo"],
    ["В Брой:", "broi"],
  ];

  let totalRef = 0;
  totalRef = state.reduce((sum, obj) => sum + obj.totals.ref, 0);

  let totalOther = 0;
  totalOther = state.reduce((sum, obj) => sum + obj.totals.other, 0);

  let totalCash = 0;
  totalCash = state.reduce((sum, obj) => sum + parseFloat(obj.totals.cash), 0);

  let totalVouchers = 0;
  totalVouchers = state.reduce((sum, obj) => sum + obj.totals.vouchers, 0);

  let totalClients = 0;
  totalClients = state.reduce((sum, obj) => sum + obj.main.klienti, 0);

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
          defaultValue={state
            .reduce((sum, obj) => sum + parseFloat(obj.cash[item][1]), 0)
            .toFixed(2)}
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
          defaultValue={state
            .reduce((sum, obj) => sum + parseFloat(obj.vouchers[item[1]]), 0)
            .toFixed(2)}
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
          defaultValue={state
            .reduce((sum, obj) => sum + parseFloat(obj.other[item[1]]), 0)
            .toFixed(2)}
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
          defaultValue={state
            .reduce((sum, obj) => sum + parseFloat(obj.ref[item[1]]), 0)
            .toFixed(2)}
          type="text"
        ></input>
      </div>
    ));
  };

  const generateDifs = () => {
    return refs.map((item, index) => {
      let target;

      if (item[1] === "check") {
        target = parseFloat(totalVouchers.toFixed(2));
      }
      if (item[1] === "karta") {
        target = parseFloat(
          state
            .reduce((sum, obj) => sum + parseFloat(obj.other.terminal), 0)
            .toFixed(2)
        ).toFixed(2);
      }
      if (item[1] === "glovo") {
        target = parseFloat(
          state
            .reduce((sum, obj) => sum + parseFloat(obj.other.glovo), 0)
            .toFixed(2)
        ).toFixed(2);
      }
      if (item[1] === "broi") {
        target = totalCash.toFixed(2);
      }
      let highlight;

      if (
        target -
          parseFloat(
            state
              .reduce((sum, obj) => sum + parseFloat(obj.ref[item[1]]), 0)
              .toFixed(2)
          ).toFixed(2) ===
        0
      ) {
        highlight = "";
      } else {
        highlight = "red";
      }

      return (
        <div style={{ display: "flex" }}>
          <input
            style={{ borderColor: highlight, width: "80%" }}
            className="active"
            disabled
            type="text"
            defaultValue={(
              target -
              parseFloat(
                state
                  .reduce((sum, obj) => sum + parseFloat(obj.ref[item[1]]), 0)
                  .toFixed(2)
              )
            ).toFixed(2)}
          ></input>
          {highlight && <WarningAmber sx={{ color: red[500] }} />}
        </div>
      );
    });
  };

  const total =
    parseFloat(totalCash) + parseFloat(totalOther) + parseFloat(totalVouchers);

  const ostatak = () => {
    let count = 0;
    for (const index of state.keys()) {
      for (const [key, value] of Object.entries(state[index].cash)) {
        if (key > 5) {
          count = value[1] + count;
        }
      }
    }

    return count;
  };

  const handleClick = () => {
    // window.print();
    // fetch("POST", "192.168.0.145:27017", () => {});
  };
  return (
    <div className="container">
      <SpeedDial
        id="speed-dial"
        direction="down"
        ariaLabel="SpeedDial basic example"
        FabProps={{
          sx: {
            bgcolor: deepOrange[500],
            "&:hover": {
              bgcolor: "#4bb543",
            },
          },
        }}
        sx={{
          position: "fixed",
          top: "2px",
          left: "95%",
        }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          onClick={() => handleDial(["remove", "all"])}
          icon={<DeleteForeverIcon />}
          tooltipTitle={"Изчисти всички каси"}
        />
        <SpeedDialAction
          onClick={() => {
            window.print();
          }}
          icon={<PrintIcon />}
        />
        <SpeedDialAction
          onClick={() => handleDial(["contacts"])}
          icon={<ContactEmergencyIcon />}
          tooltipTitle={"Контакти"}
        />
      </SpeedDial>
      <h1>ПРОТОКОЛ ЗА РАБОТА НА ОБЕКТ {obekt}</h1>
      <div className="top">
        <div className="inline-input">
          <label>Обект</label>
          <input disabled type="text" defaultValue={obekt} />
        </div>
        <div className="inline-input">
          <label>Дата:</label>
          <input type="text" defaultValue={dayjs().format("DD/MM/YYYY")} />
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>Продажби в брой</h3>

          <div id="totalCash" className="underline">
            <input
              type="text"
              value={"Остатък едри (10 - 100лв) :"}
              disabled
            ></input>
            <input type="text" disabled value={ostatak().toFixed(2)}></input>
          </div>
          {generateCashSales()}
          <div id="totalCash">
            <input type="text" value={"Дребни(0.01 - 5лв) :"} disabled></input>
            <input
              type="text"
              disabled
              value={(totalCash - ostatak()).toFixed(2)}
            ></input>
          </div>
          <div id="totalCash">
            <input type="text" value={"Всичко в брой :"} disabled></input>
            <input type="text" disabled value={totalCash.toFixed(2)}></input>
          </div>
        </div>
        <div>
          <h3>Ваучери</h3>
          <div className="inline-input underline">
            <label>Сума ваучери</label>
            <input
              disabled
              type="text"
              value={totalVouchers.toFixed(2)}
            ></input>
          </div>
          {generateVouchers()}

          <Divider />
          {generateOther()}
          <Divider />
          <div className="inline-input topline">
            <label>ТОТАЛ</label>
            <input disabled type="text" value={total.toFixed(2)}></input>
          </div>
        </div>
        <div>
          <h3>Справка</h3>
          <div className="inline-input">
            <label>По лента:</label>
            <input disabled value={totalRef.toFixed(2)} type="text"></input>
          </div>
          {generateRefs()}
          <div className="inline-input">
            <label>Бр Клиенти:</label>
            <input disabled value={totalClients} type="text"></input>
          </div>
        </div>
        <div>
          <h3 style={{ width: "80%" }}>Разлика</h3>
          <div className="dif">
            <div style={{ display: "flex" }}>
              <input
                style={{ width: "80%" }}
                className="active"
                disabled
                type="text"
                value={(total.toFixed(2) - totalRef.toFixed(2)).toFixed(2)}
              ></input>
              {/* {highlight && <WarningAmber sx={{ color: red[500] }} />} */}
            </div>
            {generateDifs()}
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleClick} className="print-btn">
          ИЗПРАТИ
        </button>
      </div>
    </div>
  );
}

export default TotalProtocol;
