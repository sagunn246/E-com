import SecureFetch from "../Auth/apiConfiguration";
import mainEndPiont from "../mainEndPiont";

const updateProduct = async (productDetail) => {
  try {
    const request = await SecureFetch(
      mainEndPiont+"product",
      "PATCH",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      productDetail
    );    
    const response = await request.json();

    if (request.ok) {
        console.log("ok ho gaya");
    } else {
      console.log('err');
      
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default updateProduct;
