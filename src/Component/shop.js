import React from 'react'
import { useState, useEffect  } from 'react'
import './shop.css'
import { AiFillHeart, AiFillEye, AiOutlineClose} from 'react-icons/ai';
import axios from 'axios';


const Shop = ({addtocart}) => {
    // Toggle Product Detail
    const [showDetail, setShowDetail] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    
    const [detail, setDetail] = useState([])
    

    //Showing Detail Box        
    const detailpage = (product) => 
    {
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        // console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () => 
    {
        setShowDetail(false)
    }

    useEffect(() => {
        // Make a GET request to fetch shop data using Axios
        axios
          .get('') // Replace with your actual API endpoint
          .then((response) => {
            const shopData = response.data;
            setShop(shopData);
          })
          .catch((error) => {
            console.error('Error fetching shop data:', error);
          });
      }, []);

        // Filter the products based on the search query and sort by name
        const [shop, setShop] = useState([]);
  const filteredShop = shop
  .filter((product) => product.Name.toLowerCase().includes(searchQuery.toLowerCase()))
  .sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.Name.localeCompare(b.Name);
    } else {
      return b.Name.localeCompare(a.Name);
    }
  });

  return (
    <>
       <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort A to Z</option>
          <option value="desc">Sort Z to A</option>
        </select>
      </div>

    {
        showDetail ? 
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.image} alt=''></img>
                </div>
                <div className='info'>
                    <h4>{detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>A Searchcreen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
                    <h3>${detail.price}</h3>
                    <button onClick={() => addtocart (detail)}>Add To Cart</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
    <div className='shop'>
        <h2>Products</h2>
        <p>Home . shop</p>
        <div className='container'>
            <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_top.webp' alt=''></img>
                    </div>
                </div>
                <div className='product_box'>
                    <h2>Shop Product</h2>
                    <div className='product_container'>
                        {
                            filteredShop.map((product) => 
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={product.image} alt=''></img>
                                            <div className='icon'>
                                               <li><AiFillHeart /></li> 
                                               <li onClick={() => detailpage (product)}><AiFillEye /></li> 
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{product.Name}</h3>
                                            <p>$ {product.price}</p>
                                            <button onClick={() => addtocart (product)}>Add To Cart</button>
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
    </div>
    </>
  )
}

export default Shop