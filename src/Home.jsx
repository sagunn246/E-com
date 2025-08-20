import React,{useState,useEffect} from 'react'
import { Outlet } from 'react-router'
import MainAuth from './components/Authentication/MainAuth'
import productDataApi from './components/Api/productData.api'
const Home = () => {
  const token  = localStorage.getItem('token')
  const [maindata,setmainData] = useState([])
  useEffect(() => {
    productDataApi(setmainData);
  }, [token]);
  return (
    <div className='h-[100vh]'>
      {token ? 
      <Outlet context={maindata}/> :
      <MainAuth />
      }
    </div>
  )
}

export default Home
