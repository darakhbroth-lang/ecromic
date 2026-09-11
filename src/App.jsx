import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Mainlayout from './component/layout/Mainlayout'
import Homepage from './page/Homepage'
import Shoppage from './page/Shoppage'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/Cartcontext'
import ProductDetail from './component/product/ProductDetail'
import Cartpage from './page/Cartpage'
import Aboutpage from './page/Aboutpage'
import Contactpage from './page/Contactpage'

function App() {
  return (
    <ProductProvider>
       <CartProvider>
         <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout/>}>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/shop' element={<Shoppage/>}/> 
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cartpage/>}/>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
       </CartProvider>
    </ProductProvider>
  )
}
export default App
