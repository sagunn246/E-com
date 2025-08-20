import SecureFetch from "../Auth/apiConfiguration";
import mainEndPiont from "../mainEndPiont";
const generateOrder = async (orderDetail,setErr) => {
  
  try {
    const request = await SecureFetch(
      mainEndPiont+"order",
      "POST",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      orderDetail
    );
  if (request.status === 200) {
  setErr('200')
  const items = orderDetail.items; 
  console.log(items);

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const temp = cart.filter(
  (cartItem) => !items.some((orderedItem) => orderedItem.id === cartItem._id)
);
  localStorage.setItem('cart',JSON.stringify(temp))
    }else if (request.status == 400){
      setErr('400')
    }
    else{
      
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

export default generateOrder;