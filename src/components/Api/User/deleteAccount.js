
import SecureFetch from "../Auth/apiConfiguration";
import mainEndPoint from "../mainEndPiont";

const deleteAccount = async () => {
  try {
    const request = await SecureFetch(
      mainEndPoint+"auth",
      "DELETE",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    );    
    const response = await request.json();

    if (request.ok) {
        localStorage.removeItem('token')
        localStorage.removeItem('userDetails')
        localStorage.removeItem('cart')
        window.location.href = '/'
    } else {
      console.error("Update failed:", response);
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default deleteAccount;
