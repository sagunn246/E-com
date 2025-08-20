const removeFromCart = (data,setItem)=>{
    let localst= JSON.parse(localStorage.getItem('cart'))
    const updateData = localst.filter((item)=>item._id != data._id)
    localStorage.setItem('cart',JSON.stringify(updateData))
    setItem(updateData)
}
export default removeFromCart;