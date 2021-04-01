import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
      {category && <h2>{category}</h2>}

      <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </li>
        {/* <li>
          Sort By{' '}
          <select name="sortOrder" onChange={sortHandler}>
            <option value="newest">Newest</option>
            <option value="highest">Lowest</option>
            <option value="lowest">Highest</option>
          </select>
        </li> */}
      </ul>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <section class="product-list">

      <h1 class="aligncenter">
        Products
      </h1>


    <div class="product-container">
      {products.map((product) => (
        <li key={product._id}>
          <div className="card">
              <img
                className="image"
                src={product.image}
                alt="product"
              />
            <div className="chip">₱{product.price}</div>
            <div className="title">
             {product.name}
            </div>
            <div className="text">{product.brand}</div>
            <div className="product-rating">
              <Rating
                value={product.rating}
                text={product.numReviews + ' reviews'}
              ></Rating>
               <Link to={'/product/' + product._id} style={{display: 'inline-block'}} className="buy-button">
              Buy Now
              </Link>
              </div>
          </div>
        </li>
      ))}

    </div>
  </section>
      )}
    </>
  );
}
export default HomeScreen;