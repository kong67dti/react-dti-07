import React, { useEffect, useState } from "react";
import Dtiheader from "../components/Dtiheader";

export default function Dtipage01() {
  const [money, setMoney] = useState("");
  const [people, setPeople] = useState("");
  const [MoneyShare, setMoneyShare] = useState("0.00");

  const calmoneyShare = () => {
    if (money == "" || people === "") {
      setMoneyShare("0.00");
      return;
    }

    let moneyInput = parseFloat(money);
    let peopleInput = parseInt(people);
    let result = moneyInput / peopleInput;
    setMoneyShare(result.toFixed(2));
  };

  useEffect(() => {
    calmoneyShare();
  }, [money, people]);

  const handleInputPeople = (e) => {
    setPeople(e.target.value);
  };

  const handelMoneyShareClick = () => {
    if (people <= 0) {
      alert("จำนวนคนต้องมากว่า 0");
      return;
    }
  };

  return (
    <div>
      <Dtiheader title="DTI PAGE A" detail="Hello... ^ ^" />
      <div className="mt-10 text-center font-bold text-blue-600 text-2xl">
        Money Share V.1.0
      </div>
      <div className="mt-10 w-8/12 border-2 border-gray-200 mx-auto p-8 shadow-lg rounded-xl flex flex-col">
        <label> ป้อนเงิน (บาท)</label>
        <input
          value={money}
          placeholder="0.00"
          onChange={(e) => setMoney(e.target.value)}
          type="number"
          className="border border-gray-400"
        />
        <label className="mt-5"> ป้อนจำนวนคน (คน)</label>
        <input
          value={people}
          placeholder="0"
          onChange={handleInputPeople}
          type="number"
          className="border border-gray-400"
        />
        <button
          onClick={handelMoneyShareClick}
          className="mt-5 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          คำนวณเงินคนละ
        </button>
        <div className="mt-5 text-xl">
          เงินคนละ : <span className="font-bold">{MoneyShare} บาท</span>
        </div>
      </div>
    </div>
  );
}
