import SecureFetch from "../Auth/apiConfiguration";
import mainEndPiont from "../mainEndPiont";
const deleteProductApi = async (data) => {
  
  try {
    const request = await SecureFetch(
      mainEndPiont+"product",
      "DELETE",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data
    );    
    if(request.status == 200){
      window.location.href= '/'
    }else if (request.status == 502){
      
    }
    else{
     alert('No Deleted')
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default deleteProductApi;