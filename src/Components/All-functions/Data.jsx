import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Data = ({ data, lastChild, handleFav, showAddNoti, adDisableID }) => {
  const [before, setBefore] = useState([]);

  const isAdded = (id) => before.includes(id);

  const handleDisable = (i) => {
    if (!isAdded(i.id)) {
      handleFav(i);
      setBefore([...before, i.id]);
    }
  };
  return (
    <>
      <tr
        className={`border-b-2 border-gray-400 ${
          lastChild ? "border-none" : ""
        }`}
      >
        <td className="p-4">
          <div className="flex items-center gap-2">
            <img className="w-18 h-18 object-cover" src={data.image} alt="" />
            <h2>{data.title}</h2>
          </div>
        </td>
        <td className="p-4">{data.currentBidPrice} </td>

        <td className="p-4">{data.timeLeft}</td>
        <td className="p-4">
          <button
            disabled={adDisableID.includes(data.id)}
            onClick={() => {
              handleDisable(data);
              showAddNoti(data.title);
            }}
            className={`font-black ${
              isAdded(data.id)
                ? `text-red-600 cursor-not-allowed`
                : "text-gray-800"
            }`}
          >
            {isAdded(data.id) ? (
              <FaHeart size={20} />
            ) : (
              <FaRegHeart size={20} />
            )}
          </button>
        </td>
      </tr>
    </>
  );
};

export default Data;
