import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Homepage from './components/herosection/Homepage'
import Footer from './components/footer/footer'
import Categories from './components/category/Categories'
import Popularitem from './components/Product/Popularitem'
import productDataApi from './components/Api/productData.api'
import { useState,useEffect } from 'react'
import { useOutletContext } from 'react-router'

const App = () => {
  
  const maindata = useOutletContext()
  const [productData, setProductData] = useState(maindata);
  useEffect(()=>{
    setProductData(maindata)
  },[maindata])
  return (
    <div className=''>
      <Navbar setProductData={setProductData}/>
      <Homepage />
      <div id='product'>
      <Categories setProductData={setProductData} maindata={maindata} />
      </div>
      <div >
      <Popularitem  productData={productData} setProductData={setProductData}/>
      </div>
      <Footer />
    </div>
  )
}

export default App
