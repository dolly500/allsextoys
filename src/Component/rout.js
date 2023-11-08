import React from 'react'
import { Routes, Route} from 'react-router';
// import Home from './home';
import Shop from './shop';
import Cart from './cart';
import Allcategories from './allcategories';
import LiveChat from './livechat'
import Contact from './contact'
import Categories from './categories';



const Rout = ({shop, addtocart, cart, setCart}) => {
  return (
    <>
    <Routes>
        {/* <Route path='/' element={<Home addtocart={addtocart}/>}/> */}
        <Route path='/cart' element={<Cart cart={cart} setCart ={setCart}/>} />
        <Route path='/shop' element={<Shop shop={shop} addtocart={addtocart}/>} />
        <Route path='/allcategories' element={<Allcategories />} />
        <Route path='/livechat' element={<LiveChat />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/categories' element={<Categories addtocart={addtocart} />} />
    </Routes>
    </>
  )
}

export default Rout