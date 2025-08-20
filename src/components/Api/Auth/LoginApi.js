import mainEndPiont from "../mainEndPiont"
import SecureFetch from "./apiConfiguration"

const loginApi=async(userDetail,navigate,setLoginerr)=>{
    const request =await SecureFetch(mainEndPiont+"auth/login",
        "POST",
    {
        "content-type":"application/json",
    },
    userDetail
    )
    const response = await request.json()
    console.log(response)
    if(request.status == 200){
        localStorage.setItem('token',response.token)
        localStorage.setItem('userDetails',JSON.stringify(response.user))
        window.location.href="/"
    }else{
        setLoginerr("Invalid Credentials")
    }
}

export default loginApi;
