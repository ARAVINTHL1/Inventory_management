import React, { useEffect, useState } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () => {
    const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(wishlistData);
  };

  const handleRemoveFromWishlist = (name) => {
    let updatedWishlist = wishlist.filter(item => item.name !== name);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  return (
    <div className="wishlist-page">
      <style>
        {`
          body {
            font-family: 'Montserrat', sans-serif;
            background-color: #e0f7fa;
            color: #333;
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100vh; /* Make sure the body takes full height */
          }
          .navbar {
            font-weight: 600;
            font-size: 1.2rem;
            background-color: #0288d1;
          }
          .page-title {
            text-align: center;
            font-size: 3rem;
            font-weight: 700;
            margin-top: 30px;
            color: #00796b;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          }
          .wishlist-card {
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
            margin-bottom: 20px;
            background-color: white;
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .wishlist-card img {
            width: 60%;
            max-height: 180px;
            border-radius: 8px;
            margin-bottom: 15px;
            object-fit: cover;
          }
          .wishlist-card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
          }
          .remove-btn {
            background-color: #d32f2f;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .remove-btn:hover {
            background-color: #c62828;
          }
          .wishlist-empty {
            text-align: center;
            font-size: 1.5rem;
            color: #00796b;
            margin-top: 20px;
          }
          .container {
            padding: 20px;
            flex-grow: 1; /* Ensures the content area grows and takes remaining space */
            overflow-y: auto; /* Prevents content overflow */
          }
          footer {
            background-color: #0288d1;
            color: white;
            text-align: center;
            padding: 20px 0;
            width: 100%;
            margin-top: auto; /* This ensures the footer is pushed to the bottom */
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/index.html">InventoryPro</a>
          <a className="btn btn-light ms-auto" href="/stock">Back to Stocks</a>
        </div>
      </nav>

      <div className="page-title">My Wishlist</div>

      <div className="container mt-5">
        {wishlist.length === 0 ? (
          <p className="wishlist-empty">Your wishlist is empty. Add some items to your wishlist!</p>
        ) : (
          wishlist.map(item => (
            <div key={item.name} className="card wishlist-card bg-light">
              <img src={item.image} alt={item.name} />
              <h5>{item.name}</h5>
              <p>Stock: {item.stock}</p>
              <button
                className="btn btn-sm remove-btn"
                onClick={() => handleRemoveFromWishlist(item.name)}
              >
                Remove from Wishlist
              </button>
            </div>
          ))
        )}
      </div>

      
    </div>
  );
};

export default Wishlist;
