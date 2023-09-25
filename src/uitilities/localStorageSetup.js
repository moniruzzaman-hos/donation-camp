import toast from "react-hot-toast";

const getStoredDonations = () => {
  const storedJobApplication = localStorage.getItem("donations");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveDonations = (item) => {
  const storedDonations = getStoredDonations();
  const exists = storedDonations.find(
    (donationId) => donationId?.id === item?.id
  );
  console.log(exists);
  if (!exists?.id) {
    storedDonations.push(item);
    localStorage.setItem("donations", JSON.stringify(storedDonations));
    return true;
  } else {
    toast.error("You have already donated to this cause");
    return false;
  }
};

export { getStoredDonations, saveDonations };
