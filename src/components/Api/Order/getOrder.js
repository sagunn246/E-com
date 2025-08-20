import SecureFetch from "../Auth/apiConfiguration";
import mainEndPiont from "../mainEndPiont";
const getOrder = async (setOrder) => {
  try {
    const request = await SecureFetch(mainEndPiont+"order", "GET", {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
    const response = await request.json()
    if (request.status == 200) {
        setOrder(response.data)
    } else if (request.status == 502) {
    } else {
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default getOrder;
