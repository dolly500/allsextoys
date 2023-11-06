import React from 'react'
import './allcategories.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Allcategories = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch the data from the API
    axios.get('')
      .then(response => {
        const data = response.data;
        setCategoryData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {/* <div className="product-card">
        <div className='middle'>
        <h2>{categoryData.category}</h2>
        <p>({categoryData.productCount} products)</p>
        <div>
            <a href={categoryData.subCategoriesUrl}>View sub categories</a>
        </div>
        <div>
            <a href={categoryData.allProductsUrl}>View all Products in Category</a>
        </div>
        </div>
    </div> */}

<div className='shop'>
        <h2>All Categories</h2>
        <p>Home . All categories</p>
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

{categoryData.map((data, index) => (
        <div className="product-card" key={index}>
          <h2>{data.category}</h2>
          <p>({data.productCount} products)</p>
          <div>
            <a href={data.subCategoriesUrl}>View sub categories</a>
          </div>
          <div>
            <a href={data.allProductsUrl}>View all Products in Category</a>
          </div>
        </div>
      ))}
    </>
  )
}

export default Allcategories