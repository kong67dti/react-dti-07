import React, { useState, useEffect } from "react";
import Dtiheader from "../components/Dtiheader";

export default function Dtipage01() {
  const [title, setTitle] = useState("");
  const [fullname, setFullname] = useState("");
  const [faculty, setFaculty] = useState("");
  const [showwelcome, setShowwelcome] = useState("");
  const [showRealTimeWelcome, setShowRealTimeWelcome] = useState("");

  useEffect(() => {
    if (title && fullname && faculty) {
      setShowRealTimeWelcome(`สวัสดี ${title} ${fullname} จากคณะ ${faculty}`);
    } else {
      setShowRealTimeWelcome("")
    }
  }, [title, fullname, faculty]);

  const handleWelcomeClick = () => {
    if (title === "" || fullname === "" || faculty === "") {
      alert("กรุณาป้อนข้อมูลให้ครบ");
      return;
    }
    setShowwelcome(`สวัสดี ${title} ${fullname} จากคณะ ${faculty}`);
  };

  return (
    <div>
      <Dtiheader title="DTI PAGE B" detail="Hey... ^ ^" />
      <div className="mt-10 text-center font-bold text-blue-600 text-2xl">
        Welcome Form V.1.0
      </div>
      <div className="mt-10 w-8/12 border-2 border-gray-200 mx-auto p-8 shadow-lg rounded-xl flex flex-col">
        <label className="">คำนำหน้า</label>
        <div className="flex gap-5 mb-5">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="radio"
            name="dtiTitle"
            value="นาย"
          />
          นาย
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="radio"
            name="dtiTitle"
            value="นาง"
          />
          นาง
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="radio"
            name="dtiTitle"
            value="นางสาว"
          />
          นางสาว
        </div>

        <label>ป้อนชื่อ</label>
        <input
          value={fullname}
          placeholder="กรุณาป้อนชื่อ"
          onChange={(e) => setFullname(e.target.value)}
          type="text"
          className="border border-gray-400"
        />

        <label>คณะ</label>
        <select
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          className="border border-gray-400 p-2 mt-2"
        >
          <option value="">กรุณาเลือกคณะ</option>
          <option value="ศิลปศาสตร์และวิทยาศาสตร์">
            ศิลปศาสตร์และวิทยาศาสตร์
          </option>
          <option value="บริหารธุรกิจ">บริหารธุรกิจ</option>
          <option value="วิศวกรรมศาสตร์">วิศวกรรมศาสตร์</option>
        </select>

        <button
          onClick={handleWelcomeClick}
          className="mt-5 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Welcome
        </button>

        <h1 className="mt-5 text-3xl">{showRealTimeWelcome}</h1>
       
      </div>
    </div>
  );
}
