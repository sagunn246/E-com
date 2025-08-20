import SecureFetch from "../Auth/apiConfiguration";
import mainEndPiont from "../mainEndPiont";
const updateOrderStatus = async (status,id) => {
    const data = {
        id:id,
        status:status
    }
  try {
    const request = await SecureFetch(mainEndPiont+"order", "PATCH", {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },data
);
    const response = await request.json()
    if (request.status == 200) {
        window.location.href = '/dashboard'
    } else if (request.status == 502) {
    } else {
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default updateOrderStatus;
