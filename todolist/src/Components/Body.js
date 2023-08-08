import Card from "./Card";
import { useState } from "react";

const Body = () => {
  const [listData, setListData] = useState([]);

  const [inputData, setInputData] = useState("");

  return (
    <div className="Body">
      <div className="text-box">
        <input
          type="text"
          className="inpt"
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        />

        <button
          className="add-btn"
          onClick={() => {
            setListData((listData) => [...listData, inputData]);
            setInputData("");
          }}
        >
          Add
        </button>
      </div>
      <div className="card-box">
        {listData.map((l, index) => (
          <Card key={index} list={l} />
        ))}
        
      </div>
    </div>
  );
};

export default Body;
