import React from "react";
import { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import WarningAmber from "@mui/icons-material/WarningAmber";
import { red } from "@mui/material/colors";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function DashProto({ kasa }) {
  // const [state, handleDial, handleState, handleCash, handleRef, printers] =
  //   useOutletContext();

  // window.onblur = () => {
  //   window.location.reload();
  // };
  // window.onfocus = () => {
  //   window.location.reload();
  // };
  const [alert, setAlert] = useState([false, "possitive"]);
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
  const generateCashSales = () => {
    return cash.map((item, index) => (
      <div key={index} className="cash-table">
        <input
          disabled
          name={item}
          type="text"
          // defaultValue={state.reduce((sum, obj) => sum + obj.cash[item][0], 0)}
        ></input>
        <input type="text" defaultValue={`${item} лв`} disabled></input>
        <input
          type="text"
          // defaultValue={state
          //   .reduce((sum, obj) => sum + parseFloat(obj.cash[item][1]), 0)
          //   .toFixed(2)}
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
          // defaultValue={state
          //   .reduce((sum, obj) => sum + parseFloat(obj.vouchers[item[1]]), 0)
          //   .toFixed(2)}
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
          // defaultValue={state
          //   .reduce((sum, obj) => sum + parseFloat(obj.other[item[1]]), 0)
          //   .toFixed(2)}
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
          // defaultValue={state
          //   .reduce((sum, obj) => sum + parseFloat(obj.ref[item[1]]), 0)
          //   .toFixed(2)}
          type="text"
        ></input>
      </div>
    ));
  };
  const generateDif = () => {
    return refs.map((item, index) => (
      <div key={index} style={{ display: "flex" }}>
        <input
          style={{ borderColor: "highlight", width: "80%" }}
          className="active"
          disabled
          type="text"
          // value={(target - parseFloat(state[kasa - 1].ref[name])).toFixed(2)}
        ></input>
        {/* {highlight && <WarningAmber sx={{ color: red[500] }} />} */}
      </div>
    ));
  };
  // const [highlight, setHighlight] = useState("");
  // useEffect(() => {
  //   if (target - parseFloat(state[kasa - 1].ref[name]) == 0) {
  //     setHighlight("");
  //   } else {
  //     setHighlight("red");
  //   }
  // }, [state]);

  return (
    <div>
      <h3>DASHPROTO</h3>
      <div className="container">
        <h1>ПРОТОКОЛ ЗА РАБОТА НА КАСА {"kasa"}</h1>
        <div className="top">
          <div className="inline-input">
            <label>Фискален принтер №</label>
            <input disabled defaultValue={"test"}></input>
          </div>
          <div className="inline-input">
            <TextField
              disabled
              id="outlined-disabled"
              label="Обект"
              defaultValue="асд"
            />
          </div>
          <div className="inline-input">
            {/* <label>Дата:</label> */}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker format="DD/MM/YYYY" label="Дата" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>

        <div className="shift">
          {/* <h3>Начало на работната смяна</h3> */}

          <div className="cash-table">
            <div className="input1">
              <label htmlFor="name-start">Три имена на касиера</label>
              <input id="name-start" type="text" defaultValue="test"></input>
            </div>
            <div className="input2">
              <label htmlFor="sum-start">Касов депозит</label>
              <input id="sum-start" type="text" defaultValue="test"></input>
            </div>
            <div className="input3">
              <label htmlFor="name-start">Брой цигари</label>
              <input id="cigs-start" type="text" defaultValue="test"></input>
            </div>
          </div>

          <div>
            <p>Имена и подпис на Зам. Управител/Главен касиер :</p>
            <input id="name2-start" type="text" defaultValue="test"></input>
          </div>
        </div>

        {/* <SpeedDial
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
          onClick={() => handleDial(["remove", kasa])}
          icon={<DeleteForeverIcon />}
          tooltipTitle={"Изчисти"}
        />
        <SpeedDialAction
          onClick={() => {
            window.print();
          }}
          icon={<PrintIcon />}
          // tooltipTitle={"Принтирай"}
        />
        <SpeedDialAction
          onClick={() => handleDial(["contacts"])}
          icon={<ContactEmergencyIcon />}
          tooltipTitle={"Контакти"}
        />
        <SpeedDialAction
          onClick={() => handleDial(["patch"])}
          icon={<UpdateIcon />}
          tooltipTitle={"Patch Notes"}
        />
      </SpeedDial> */}

        <div className="bottomNew">
          <div className="bottom">
            <div>
              <h3>Продажби в брой</h3>
              <div id="totalCash" className="underline">
                <input
                  type="text"
                  defaultValue={"Остатък едри(10 -100лв) :"}
                  disabled
                ></input>
                <input
                  type="text"
                  disabled
                  // value={ostatak().toFixed(2)}
                ></input>
              </div>
              {generateCashSales()}
              <div id="totalCash" className="underline">
                <input
                  type="text"
                  defaultValue={"Дребни(0.01 - 5лв) :"}
                  disabled
                ></input>
                <input
                  type="text"
                  // value={(
                  //   parseFloat(state[kasa - 1].totals.cash) - ostatak()
                  // ).toFixed(2)}
                  disabled
                ></input>
              </div>
              <div id="totalCash">
                <input
                  type="text"
                  defaultValue={"Всичко в брой :"}
                  disabled
                ></input>
                <input
                  type="text"
                  disabled
                  // value={parseFloat(state[kasa - 1].totals.cash).toFixed(2)}
                ></input>
              </div>
            </div>
            <div>
              <h3>Ваучери</h3>
              <div className="inline-input underline">
                <label>Сума ваучери</label>
                <input
                  disabled
                  type="text"
                  // value={totalVouchers.toFixed(2)}
                ></input>
              </div>
              {generateVouchers()}

              <Divider />
              {generateOther()}
              <Divider />
              <div className="inline-input topline">
                <label>ТОТАЛ</label>
                <input
                  disabled
                  type="text"
                  defaultValue={"total.toFixed(2)"}
                ></input>
              </div>
            </div>
          </div>

          <div className="bottom2">
            <>
              <div>
                <h3>Справка</h3>
                <div className="inline-input">
                  <label>По лента:</label>
                  <input
                    disabled
                    // value={state[kasa - 1].totals.ref.toFixed(2)}
                    type="text"
                  ></input>
                </div>
                {generateRefs()}

                <div className="inline-input">
                  <label>Бр Клиенти:</label>
                  <input
                    disabled
                    name="klienti"
                    // value={state[kasa - 1].main.klienti}
                    type="text"
                  ></input>
                </div>
              </div>
              <div>
                <h3 style={{ width: "80%" }}>Разлика</h3>
                <div className="dif">{generateDif()}</div>
              </div>
            </>
          </div>
        </div>

        <div>{/* <button className="print-btn">PRINT</button> */}</div>
      </div>
    </div>
  );
}

export default DashProto;
