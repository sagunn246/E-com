import mainEndPiont from "../mainEndPiont"
import SecureFetch from "./apiConfiguration"

const signupApi=async(userDetail,navigate,setstage,setUserDetail)=>{
    const request =await SecureFetch(mainEndPiont+"auth/signup",
        "Post",
    {
        "content-type":"application/json",
    },
    userDetail
    )
    const response = await request.json()
    if(request.status == 200){
        localStorage.setItem('token',response.token)
        localStorage.setItem('userDetails',JSON.stringify(response.user))
        window.location.href="/"
    }else{
        setUserDetail({
            username: "",
            email: "",
            contactNumber: "",
            password: "", 
            city: "",
            street: "",
            deliveryDescription: "",
            })
            setstage(0)
    }
}

export default signupApi;
