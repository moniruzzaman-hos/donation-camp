import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "./uitilities/localStorageSetup";

function DonationDetails() {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((item) => item.id === idInt);
  const handleDonate = () => {
    saveDonations(donation);
    toast.success("Successfully donated to " + donation?.title + "");
  };
  return (
    <div className="m-4 flex flex-col justify-center gap-4">
      <div className="card w-full  h-96 shadow-xl image-full">
        <figure>
          <img src={donation?.picture} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <div className="card-actions h-full flex items-end">
            <button
              onClick={handleDonate}
              style={{ backgroundColor: donation?.text_button_color }}
              className="btn text-white"
            >
              Donate ${donation?.price}
            </button>
          </div>
        </div>
      </div>
      <p className="text-xl text-black font-semibold">{donation?.title}</p>
      <p className="text-black">{donation?.description}</p>
    </div>
  );
}

export default DonationDetails;
