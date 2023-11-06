import React from 'react';
import { useState } from 'react'


const Categories = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

   
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


      <div className='shop'>
        <h2>Shop</h2>
        <p>Home . Shop</p>
        <div className='container'>
            <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_top.webp' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
        </div>



        </>

        
    );
}

export default Categories;
