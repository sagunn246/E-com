import SecureFetch from "../Auth/apiConfiguration";
import mainEndPiont from "../mainEndPiont";

const addproductApi = async (productDetail) => {
  
  
  try {
    const request = await SecureFetch(
      mainEndPiont+"product",
      "POST",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      productDetail
    );    
    if(request.status == 200){
      window.location.href = '/'
    }else if (request.status == 502){
      
    }
    else{
      console.log("Pass no change")
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default addproductApi;