import { useState } from "react";
import "./App.css";
import Table from "./Components/All-functions/Table";
import Banner from "./Components/HF-section/Banner";
import Footer from "./Components/HF-section/Footer";
import Header from "./Components/HF-section/Header";
import { ToastContainer, toast } from "react-toastify";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

function App() {
  const showAddNoti = (title) => {
    toast.success(`success to add: ${title}`, { autoClose: 1000 });
  };
  const showRemoveNoti = (title) => {
    toast.error(`remove : ${title}`, {
      autoClose: 1000,
    });
  };
  const [adDisableID, setDisableID] = useState([]);
  const [bookmark, satBookmark] = useState([]);

  const [taka, setTaka] = useState(0);

  const handleFav = (data) => {
    const ifHave = bookmark.find((a) => a.id === bookmark.id);

    if (!ifHave) {
      satBookmark([...bookmark, data]);

      setTaka(
        (total) =>
          total + parseFloat(data.currentBidPrice.replace(/[^0-9.]/g, ""))
      );
    }
    setDisableID([...adDisableID, data.id]);
  };

  const removeFav = (productId) => {
    setDisableID(adDisableID.filter((fel) => fel !== productId));
    const updateBookMark = bookmark.filter((a) => a.id !== productId);
    const updatRemobeBookMark = bookmark.find((a) => a.id === productId);
    satBookmark(updateBookMark);

    if (updatRemobeBookMark) {
      setTaka(
        (total) =>
          total -
          parseFloat(
            updatRemobeBookMark.currentBidPrice.replace(/[^0-9.]/g, "")
          )
      );
    }
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className=" bg-gray-300 pt-14 pb-14">
        <div className="mb-14 w-11/12 mx-auto">
          <h2 className="text-3xl font-medium">Active Auctions</h2>

          <p className="mt-1 text-lg font-sans font-light">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="flex gap-4 w-11/12 mx-auto">
          <div className="w-[70%]">
            <table className="w-full text-left mx-auto  rounded-b-3xl bg-white rounded-tr-3xl rounded-tl-3xl">
              <thead className="border-b-2 border-gray-400">
                <tr>
                  <th className="p-4">Items</th>
                  <th className="p-4">Current Bid</th>
                  <th className="p-4">Time Left</th>
                  <th className="p-4">Bid Now</th>
                </tr>
              </thead>

              <tbody>
                <Table
                  adDisableID={adDisableID}
                  showAddNoti={showAddNoti}
                  handleFav={handleFav}
                ></Table>
              </tbody>
            </table>
          </div>
          <div className="w-[30%] ">
            <div>
              <ToastContainer
                position="top-right"
                autoClose={900}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <div className="rounded-3xl text-center space-y-4 bg-white ">
                <div className="flex items-center border-b-2 p-4 text-gray-800 border-gray-300 text-3xl justify-center font-bold gap-2">
                  <span>
                    <FaRegHeart size={24} className="font-black" />
                  </span>
                  <h1>Favorite Items</h1>
                </div>

                <div className="border-b-2 border-gray-300 pb-4">
                  {bookmark.length == 0 ? (
                    <>
                      <h2 className="text-xl font-bold mb-1">
                        No favorites yet
                      </h2>
                      <h2 className="text-md w-3/4 mx-auto">
                        Click the heart icon on any item to add it to your
                        favorites
                      </h2>
                    </>
                  ) : (
                    bookmark.map((markAsRead, key) => (
                      <div key={key}>
                        <div
                          className={`text-left hover:bg-sky-100 select-none relative  border-b-2 border-gray-300 ${
                            key == bookmark.length - 1 ? "border-none" : ""
                          }`}
                        >
                          <button
                            onClick={() => {
                              showRemoveNoti(markAsRead.title);
                              removeFav(markAsRead.id);
                            }}
                            className={`absolute right-2 top-1 cursor-pointer rounded-4xl font-black`}
                          >
                            <IoMdCloseCircle
                              size={25}
                              className="hover:text-[#ff0000]"
                            />
                          </button>

                          <div className="flex px-3 py-3 gap-2">
                            <img
                              src={markAsRead.image}
                              className="w-3/12 h-18 object-cover"
                              alt=""
                            />
                            <div className="w-9/12">
                              <p className="text-xl ">{markAsRead.title}</p>
                              <div className="flex gap-4 font-bold">
                                <h5>bids: {markAsRead.currentBidPrice}</h5>
                                <h5>bids: {markAsRead.bidsCount}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="pb-4 font-medium px-4 flex justify-between">
                  <h3 className="text-xl">Total bids Amount</h3>
                  <div className="text-xl">
                    {bookmark.length == 0 ? <h2>$00</h2> : <p>$ {taka}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
