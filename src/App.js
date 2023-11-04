import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react'
import Rout from './Component/rout'
import Nav from './Component/nav'
import Footer from './Component/footer'
import Homeproduct from './Component/home_product'

const App = () => {
  const [cart, setCart] = useState([])
  //Shop Page product
  const [shop, setShop] = useState(Homeproduct)
    //Shop Search Filter
  const [search, setSearch] = useState('')
  //Shop category filter
  const Filter = (x) =>
  {
    const catefilter = Homeproduct.filter((product) => 
    {
      return product.cat === x 
    })
    setShop(catefilter)
  }
  const allcatefilter = () =>
  {
    setShop(Homeproduct)
  }
  //Shop Search Filter
  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if(searchlength)
  {
    alert("Please Search Something !")
    setShop(Homeproduct)
  }
  else
  {
    
      const searchfilter = Homeproduct.filter((x) => 
      {
        return x.cat === search
      })
      setShop(searchfilter)
  }
}
  //Add To cart
  const addtocart = (product) =>
  {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if(exist)
    {
      alert("This product is alleardy added in cart")
    }
    else
    {
      setCart([...cart, {...product, qty:1}])
      alert("Added To cart")
    }
  }
 
  return (
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/signup" component={SignUp} />
    //       <Route path="/signin" component={SignIn} />
    //       {/* Add other routes for different pages as needed */}
    //     </Switch>
    //   </div>
    // </Router>

    <>
    <BrowserRouter>
      <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
      <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
