import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Donation() {
  const donations = useLoaderData();
  const [seeAll, setSeeAll] = useState(false);

  return (
    <div className="flex flex-col mx-4 justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-4">
        {donations?.slice(0, 4).map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: item?.card_bg }}
              className="hero h-fit rounded-lg"
            >
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={item?.picture}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <p
                    style={{ backgroundColor: item?.category_bg }}
                    className={`p-1 px-2 rounded-lg w-fit text-white`}
                  >
                    {item?.category}
                  </p>
                  <h2
                    style={{ color: item?.text_button_color }}
                    className="card-title"
                  >
                    {item?.title}
                  </h2>
                  <p style={{ color: item?.text_button_color }}>
                    {item?.description}
                  </p>
                  <p style={{ color: item?.text_button_color }}>
                    {item?.description}
                  </p>
                  <p style={{ color: item?.text_button_color }}>
                    $ {item?.price}
                  </p>
                  <div className="card-actions">
                    <Link to={`/donation/${item?.id}`}>
                      <button
                        style={{ backgroundColor: item?.text_button_color }}
                        className="btn text-white"
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!seeAll && (
        <button onClick={() => setSeeAll(true)} className="btn btn-primary">
          See All
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-4">
        {seeAll
          ? donations?.slice(-8).map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: item?.card_bg }}
                  className="hero h-fit rounded-lg"
                >
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src={item?.picture}
                      className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                      <p
                        style={{ backgroundColor: item?.category_bg }}
                        className={`p-1 px-2 rounded-lg w-fit text-white`}
                      >
                        {item?.category}
                      </p>
                      <h2
                        style={{ color: item?.text_button_color }}
                        className="card-title"
                      >
                        {item?.title}
                      </h2>
                      <p style={{ color: item?.text_button_color }}>
                        {item?.description}
                      </p>
                      <p style={{ color: item?.text_button_color }}>
                        {item?.description}
                      </p>
                      <p style={{ color: item?.text_button_color }}>
                        $ {item?.price}
                      </p>
                      <div className="card-actions">
                        <Link to={`/donation/${item?.id}`}>
                          <button
                            style={{ backgroundColor: item?.text_button_color }}
                            className="btn text-white"
                          >
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Donation;
