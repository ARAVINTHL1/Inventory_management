import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';

const InventoryDashboard = () => {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState('Loading...');
    const [lowStock, setLowStock] = useState('Loading...');
    const [recentOrders, setRecentOrders] = useState('Loading...');
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);
    const navigate = useNavigate();
    const chartRef = useRef(null); // Create a reference for the chart

    useEffect(() => {
        fetchInventoryData();
    }, []);

    const fetchInventoryData = () => {
        const productsData = JSON.parse(localStorage.getItem("products")) || [
            { name: "Laptop", stock: 15, image: "https://source.unsplash.com/200x150/?laptop" },
            { name: "Mobile", stock: 8, image: "https://source.unsplash.com/200x150/?mobile" },
            { name: "Headphones", stock: 12, image: "https://source.unsplash.com/200x150/?headphones" },
            { name: "Keyboard", stock: 5, image: "https://source.unsplash.com/200x150/?keyboard" }
        ];

        setProducts(productsData);

        const total = productsData.length;
        const lowStockCount = productsData.filter(product => product.stock < 10).length;
        const recentOrders = Math.floor(Math.random() * 100) + 1;

        setTotalProducts(total);
        setLowStock(lowStockCount);
        setRecentOrders(recentOrders);

        // Check if the canvas element is available
        if (chartRef.current) {
            // Destroy any existing chart before creating a new one
            if (window.myChart) {
                window.myChart.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            window.myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: productsData.map(p => p.name),
                    datasets: [{
                        label: 'Stock Levels',
                        data: productsData.map(p => p.stock),
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2
                    }]
                }
            });
        }
    };

    const handleAddToWishlist = (product) => {
        if (!wishlist.some(item => item.name === product.name)) {
            const updatedWishlist = [...wishlist, product];
            setWishlist(updatedWishlist);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            alert(`${product.name} added to wishlist!`);
            navigate('/wish');
        } else {
            alert(`${product.name} is already in your wishlist!`);
        }
    };
    

    return (
        <div style={styles.container}>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">InventoryPro</a>
                </div>
                <div className="container-fluid">
                    <a className="btn btn-light ms-auto" href="/index">Wishlist</a>
                </div>
            </nav>

            {/* Page Title */}
            <div style={styles.pageTitle}>Advanced Inventory Management System</div>

            {/* Stats Cards */}
            <div style={styles.cardContainer}>
                <div style={styles.card}>
                    <h3>Total Products</h3>
                    <p style={styles.cardText}>{totalProducts}</p>
                </div>
                <div style={styles.card}>
                    <h3>Low Stock Alerts</h3>
                    <p style={{ ...styles.cardText, color: 'red' }}>{lowStock}</p>
                </div>
                <div style={styles.card}>
                    <h3>Recent Orders</h3>
                    <p style={styles.cardText}>{recentOrders}</p>
                </div>
            </div>

            <center> 
                <button style={styles.button} onClick={() => navigate('/dashboard')}>Add Product</button>
            </center>

            {/* Bar Chart */}
            <div style={styles.chartContainer}>
                <h2 style={styles.chartTitle}>Stock Overview</h2>
                <canvas ref={chartRef}></canvas> {/* Use ref for the canvas */}
            </div>

            {/* Product Display */}
            <div style={styles.productContainer}>
                <h2 style={styles.chartTitle}>Available Products</h2>
                <div style={styles.productDisplay}>
                    {products.map(p => (
                        <div key={p.name} style={styles.productCard}>
                            <img src={p.image} alt={p.name} style={styles.productImage} />
                            <div style={styles.productBody}>
                                <h5>{p.name}</h5>
                                <p>Stock: {p.stock}</p>
                                <button style={styles.wishlistButton} onClick={() => handleAddToWishlist(p)}>
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer style={styles.footer}>
                <p>&copy; 2025 InventoryPro | All Rights Reserved</p>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "'Montserrat', sans-serif",
        backgroundColor: '#f4f4f4',
        color: '#333',
        paddingBottom: '50px'
    },
    pageTitle: {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginTop: '30px',
        color: '#2c5364'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '50px'
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '30%'
    },
    cardText: {
        fontSize: '2rem',
        fontWeight: '600'
    },
    button: {
        padding: '10px 30px',
        fontSize: '1.2rem',
        backgroundColor: '#007bff',
        border: 'none',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px'
    },
    chartContainer: {
        marginTop: '50px',
        textAlign: 'center'
    },
    chartTitle: {
        fontSize: '2rem',
        fontWeight: '600'
    },
    productContainer: {
        marginTop: '50px'
    },
    productDisplay: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
    },
    productCard: {
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        width: '200px',
        textAlign: 'center'
    },
    productImage: {
        width: '100%',
        maxHeight: '150px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '10px'
    },
    productBody: {
        textAlign: 'center'
    },
    wishlistButton: {
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    footer: {
        backgroundColor: '#007bff',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
        marginTop: '50px'
    }
};

export default InventoryDashboard;
