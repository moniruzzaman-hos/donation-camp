const getStoredDonations = () => {
  const storedJobApplication = localStorage.getItem("donations");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveDonations = (item) => {
  const storedDonations = getStoredDonations();
  const exists = storedDonations.find((donationId) => donationId === item?.id);
  if (!exists) {
    storedDonations.push(item);
    localStorage.setItem("donations", JSON.stringify(storedDonations));
  }
};

export { getStoredDonations, saveDonations };
