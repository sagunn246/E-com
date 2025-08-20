import SecureFetch from "../Auth/apiConfiguration";
import mainEndPoint from "../mainEndPiont";

const changeuserPassword = async (updatedData,setError) => {
  console.log(updatedData);
  
  try {
    const request = await SecureFetch(
      mainEndPoint+"auth",
      "PATCH",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      updatedData
    );    
    if(request.status == 200){
      setError("Password Changed Successfully")
    }else if (request.status == 502){
      setError("Password Doesn't Match")
    }
    else{
      console.log("Pass no change")
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default changeuserPassword;