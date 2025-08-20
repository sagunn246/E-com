const removeQuantity = (data, setItemState, setSelected,selected) => {
  const localData = JSON.parse(localStorage.getItem('cart'));
  const index = localData.findIndex(item => item._id === data._id);

  if (index !== -1 && localData[index].quantity > 1) {
   
    localData[index].quantity -= 1;
    localStorage.setItem('cart', JSON.stringify(localData));
    setItemState(localData[index]);
  }

  const updatedSelected = selected.map(item =>
    item._id === data._id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

  setSelected(updatedSelected);
};

export default removeQuantity;
