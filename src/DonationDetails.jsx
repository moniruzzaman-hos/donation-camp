import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonations } from "./uitilities/localStorageSetup";

function DonationDetails() {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((item) => item.id === idInt);
  const handleDonate = () => {
    const isDonated = saveDonations(donation);
    if (isDonated) {
      toast.success("Successfully donated to " + donation?.title + "");
    }
  };
  return (
    <div className="m-4 flex flex-col justify-center gap-4">
      <div className="w-full relative h-fit shadow-xl">
        <figure>
          <img className="w-full h-fit" src={donation?.picture} alt="Shoes" />
        </figure>
        <div className="absolute -bottom-0 bg-gray-500 w-full p-4 bg-opacity-40">
          <button
            onClick={handleDonate}
            style={{ backgroundColor: donation?.text_button_color }}
            className="btn text-white"
          >
            Donate ${donation?.price}
          </button>
        </div>
      </div>
      <p className="text-xl text-black font-semibold">{donation?.title}</p>
      <p className="text-black">{donation?.description}</p>
    </div>
  );
}

export default DonationDetails;
