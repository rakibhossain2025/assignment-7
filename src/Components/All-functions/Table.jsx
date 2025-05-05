import React from "react";
import { useEffect, useState } from "react";
import Data from "./Data";
const Table = ({ handleFav, showAddNoti, adDisableID }) => {
  const [datas, satData] = useState([]);
  useEffect(() => {
    fetch("apis.json")
      .then((res) => res.json())
      .then((data) => satData(data));
  }, []);

  return (
    <>
      {datas.map((data, i) => (
     
        <Data
          showAddNoti={showAddNoti}
          adDisableID={adDisableID}
          handleFav={handleFav}
          data={data}
          lastChild={i == datas.length - 1}
          key={data.id}
        ></Data>
      ))}
    </>
  );
};

export default Table;
