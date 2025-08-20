const generateCartItem = (product) => {
  const temp = [];
  product.map((item) => {
    temp.push({
      id:item._id,
      itemName: item.productName,
      quantity: item.quantity
    });
  });
  return temp;
};

export default generateCartItem;
