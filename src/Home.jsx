import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [donation, setDonation] = useState([]);
  const [rawData, setRawData] = useState([]);
  const handleSearch = () => {
    const filteredData = rawData.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );
    setDonation(filteredData);
  };
  useEffect(() => {
    fetch("./donation.json")
      .then((res) => res.json())
      .then((data) => {
        setRawData(data);
        setDonation(data);
      });
  }, []);
  return (
    <div className="mx-auto w-full">
      {/* banner */}
      <div className="h-96 flex flex-col align-middle justify-center bg-fixed bg-center bg-cover bg-no-repeat items-center bg-[url('https://i.ibb.co/WpFmMxC/Food.png')] bg-green-500 bg-opacity-25">
        <p className="text-4xl font-black text-red-600">
          I Grow By Helping People In Need
        </p>
        <div className="form-control">
          <div className="input-group mt-4">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered bg-white w-32 md:w-48 lg:w-96"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button onClick={handleSearch} className="btn btn-error">
              search
            </button>
          </div>
        </div>
      </div>
      {/* card */}

      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 my-4">
          {donation?.map((item, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: item?.card_bg }}
                className="w-56 p-4 rounded-xl cursor-pointer"
              >
                <Link to={`/donation/${item?.id}`}>
                  <div className="rounded-lg">
                    <img
                      className="h-20 w-full rounded-lg mb-4"
                      src={item?.picture}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col h-fit justify-end">
                    <p
                      style={{ backgroundColor: item?.category_bg }}
                      className={`p-1 px-2 rounded-lg w-fit text-white`}
                    >
                      {item?.category}
                    </p>
                    <p
                      style={{ color: item?.text_button_color }}
                      className={`text-[${item?.text_button_color}]`}
                    >
                      {item?.title}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
