import mainEndPiont from "./mainEndPiont";

const productDataApi=async(setmainData)=>{
    const res = await fetch(mainEndPiont+'product')
    const responce = await res.json();
    if(res.status == 200 ){
        
        setmainData(responce.data)
    }
}

export default productDataApi