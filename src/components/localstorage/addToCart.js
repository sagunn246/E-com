import addQuantiy from "./addQuantiy";

const addToCart = (productData)=>{
    productData.quantity=1;
    let localData =localStorage.getItem('cart');
    
    if(localData==null)
    {
        
        let tempArr = [];
        tempArr.push(productData)
        localStorage.setItem('cart',JSON.stringify(tempArr))
    }
    else{

        
        let tempArr = JSON.parse(localStorage.getItem('cart'));
        let tempArray = tempArr.filter((item)=>item._id==productData._id)
        if (tempArray != 0 ){
            addQuantiy(productData)
            return;
        }   
        tempArr.push(productData)
        localStorage.setItem('cart',JSON.stringify(tempArr))
    }
};


export default addToCart;