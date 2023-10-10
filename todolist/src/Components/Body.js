import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [listData, setListData] = useState([]);

  const [inputData, setInputData] = useState("");

  const rem = (index) =>{
          listData.splice(index,1);

  };

  return (
    <div className="bg-slate-600 border-2 w-96 h-auto flex justify-between  ">
      <div className="w-full h-8 pt-3 flex flex-row">
        <input
          type="text"
          className="text-center w-4/5 h-full rounded-md border-none shadow-md ml-[10px]"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        />

        <button
          className="bg-[#3c4eda] text-white p-1 rounded-md w-1/10 ml-6"
          onClick={() => {
            setListData((listData) => [...listData, inputData]);
            setInputData("");
          }}
        >
          Add
        </button>
      </div>
      <div className="w-full flex flex-row mt-3">
        {listData.map((l, index) => (
          <Card key={index} list={l} />
        ))}
        
      </div>
    </div>
  );
};

export default Body;
