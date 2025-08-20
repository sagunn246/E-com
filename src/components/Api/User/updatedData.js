import SecureFetch from "../Auth/apiConfiguration";
import mainEndPoint from "../mainEndPiont";

const updateduserData = async (updatedData) => {
  try {
    const request = await SecureFetch(
      mainEndPoint+"auth/user",
      "PATCH",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      updatedData
    );    
    const response = await request.json();

    if (request.ok) {
        localStorage.setItem('userDetails',JSON.stringify(response.user))
    } else {
      console.error("Update failed:", response);
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default updateduserData;
