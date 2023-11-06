import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi";
import axios from 'axios'

const Home = ({addtocart}) => {
  // Product category
  const [newProduct, setNewProduct] =  useState([])
  const [featuredProduct, setFeaturedProduct] =  useState([])
  const [topProduct, setTopProduct] =  useState([])
  const [trendingProduct, setTrendingProduct] = useState([])
  const [categories, setCategories] = useState([]);


    // Define the filtercate function
    const filtercate = (category) => {
      // You can use this function to filter products based on the selected category
      const filteredProducts = trendingProduct.filter((product) => product.category === category);
      setTrendingProduct(filteredProducts);
    };

  useEffect(() => {
    // Make a GET request using Axios
    axios.get('')
      .then((response) => {

        const data = response.data;

        setNewProduct(data.newProduct);
        setFeaturedProduct(data.featuredProduct);
        setTopProduct(data.topProduct);
        setTrendingProduct(data.trendingProduct);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  
  
    // Make a separate GET request for categories
    axios.get('')
      .then((response) => {
        // Update the categories state variable with the category data from the response.
        const categoryData = response.data;
        setCategories(categoryData);
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
      });
  }, []);
  return (
    <>
    <div className='home'>
        <div className='top_banner'>
            <div className='contant'>
                <h2>AllSexToys</h2>
                <p>30% off at your first odder</p>
                <Link to='/shop' className='link'>Shop Now</Link>
            </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => setTrendingProduct()}>trending product</h2>
                </div>
                <div className='cate'>
                {categories.map((category) => (
                  <h3 key={category.id} onClick={() => filtercate(category.name)}>
                    {category.name}
                  </h3>
                ))}
              </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((product) => 
                    {
                      return(
                        <>
                        <div className='box'>
                          <div className='img_box'>
                            <img src={product.image} alt='' />
                            <div className='icon'>
                              <div className='icon_box'>
                                <AiFillEye />
                              </div>    
                              <div className='icon_box'>
                                <AiFillHeart />
                              </div>                        
                            </div>
                          </div>
                          <div className='info'>
                            <h3>{product.Name}</h3>
                            <p>${product.price}</p>
                            <button className='btn' onClick={() => addtocart (product)}>Add to cart</button>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
                <button>Show More</button>
              </div>
            </div>
            <div className='right_box'>
              <div className='right_container'>
                {/* <div className='testimonial'>
                  <div className='head'>
                    <h3>our testmonial</h3>
                  </div>
                  <div className='detail'>
                    <div className='img_box'>
                      <img src='image/T1.avif' alt='testmonial'></img>
                    </div>
                    <div className='info'>
                      <h3>stephan robot</h3>
                      <h4>web designer</h4>
                      <p>Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattisr nullam mattis.</p>
                    </div>
                  </div>
                </div> */}
                <div className='newsletter'>
                  <div className='head'>
                    <h3>newsletter</h3>
                  </div>
                  <div className='form'>
                    <p>join our malling list</p>
                    <input type='email' placeholder='E-mail' autoComplete='off'></input>
                    <button>subscribe</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <BiLogoFacebook />
                      </div>
                      <div className='icon'>
                        <BiLogoTwitter />
                      </div>
                      <div className='icon'>
                        <BiLogoInstagram />
                      </div>
                      <div className='icon'>
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src='image/Multi-Banner-1.avif' alt='banner'></img>
              </div>
              <div className='box'>
                <img src='image/Multi-Banner-2.avif' alt='banner'></img>
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='image/Multi-Banner-3.webp' alt=''></img>
                <img src='image/Multi-Banner-4.avif' alt=''></img>
              </div>
              <div className='bottom'>
                <img src='image/Multi-Banner-5.webp' alt=''></img>
              </div>
            </div>
          </div>
        </div> */}
        <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>New Product</h2>
              </div>
              {
                newProduct.map((product) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={product.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{product.Name}</h3>
                        <p>$ {product.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (product)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
                featuredProduct.map((product) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={product.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{product.Name}</h3>
                        <p>$ {product.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (product)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Top Product</h2>
              </div>
              {
                topProduct.map((product) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={product.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{product.Name}</h3>
                        <p>$ {product.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (product)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home