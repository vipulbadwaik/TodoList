import Card from "./Card";
import { useRef, useState } from "react";

const Body = () => {
  const [listData, setListData] = useState([]);

  const [inputData, setInputData] = useState("");

 

  const rem = (index) => {
    //listData.splice(index + 1, 1);
    setListData(oldval => {
      return oldval.filter((_,i) => i !== index)
    });


  };

  return (
    <div 
    className="bg-slate-600 border-2 w-[600px] h-[450px] flex  flex-col rounded-lg shadow-lg  list-none overflow-auto ">
      <div className="w-full h-8 pt-3 flex  ">
        <input
         
          type="text"
          className="text-center w-4/5 h-10 rounded-md border-none shadow-md ml-[10px]"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        />
        <div className="w-1/5 ml-4">
          <button
            className="bg-[#3c4eda] text-white px-8 py-2  rounded-md "
            onClick={() => {
              setListData((listData) => [...listData, inputData]);
              console.log(listData);
              console.log("----------");
              setInputData("");
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col mt-3">
        {listData.map((l, index) => (
          <Card key={index} list={l} rem={() => rem(index)} />
        ))}
      </div>
    </div>
  );
};

export default Body;
