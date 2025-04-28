import React, { useEffect } from 'react';

const InventoryPro = () => {
    useEffect(() => {
        if (!sessionStorage.getItem("loggedInUser")) {
        }
    }, []);

    const logout = () => {
        let confirmation = window.confirm("Are you sure you want to log out?");
        if (confirmation) {
            sessionStorage.removeItem("loggedInUser");
            alert("Logout successful!");
        }
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark" style={styles.navbar}>
                <div className="container">
                    <a className="navbar-brand" href="#" style={styles.navbarBrand}>InventoryPro</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" style={styles.navLink}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/stock" style={styles.navLink}>Stocks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard" style={styles.navLink}>Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about" style={styles.navLink}>About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login" style={styles.navLink}>Login</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="hero" style={styles.hero}>
                <h1 style={styles.heroTitle}>Welcome to InventoryPro</h1>
                <p style={styles.heroSubtitle}>Revolutionizing Inventory Management with AI-Powered Insights</p>
                <a href="/stock" className="btn btn-custom" style={styles.exploreButton}>Explore Now</a>
            </div>

            {/* Features Section */}
            <div className="container-fluid features" style={styles.features}>
                <h2 className="mb-5" style={styles.featuresTitle}>Advanced Features</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-box" style={styles.featureBox}>
                            <h4 style={styles.featureTitle}>AI-Driven Analytics</h4>
                            <p style={styles.featureDescription}>Leverage real-time data insights to make informed inventory decisions.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-box" style={styles.featureBox}>
                            <h4 style={styles.featureTitle}>Seamless Automation</h4>
                            <p style={styles.featureDescription}>Automate stock updates and low-stock alerts for effortless tracking.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-box" style={styles.featureBox}>
                            <h4 style={styles.featureTitle}>Smart Inventory Forecasting</h4>
                            <p style={styles.featureDescription}>Predict future stock needs using AI-based demand forecasting models.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer" style={styles.footer}>
                <p>&copy; 2025 InventoryPro | Elevate Your Inventory Management</p>
            </footer>
        </div>
    );
};

// Inline styles
const styles = {
    navbar: {
        background: "linear-gradient(135deg, #1c2b38, #2c3e50, #34495e)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        animation: "fadeIn 1s ease-in-out"
    },
    navbarBrand: {
        color: 'white',
        fontWeight: 600,
        fontFamily: "'Roboto', sans-serif",
        fontSize: '1.8rem'
    },
    navLink: {
        color: 'white',
        fontWeight: 600,
        fontFamily: "'Roboto', sans-serif",
        fontSize: '1.1rem'
    },
    logoutButton: {
        backgroundColor: '#ff4757',
        color: 'white',
        borderRadius: '5px',
        padding: '10px 20px',
        transition: '0.3s',
        fontWeight: '600'
    },
    logoutButtonHover: {
        backgroundColor: '#ff6b81'
    },
    hero: {
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #2c5364, #0f2027, #203a43)',
        color: 'white',
        padding: '20px',
        animation: 'fadeIn 1.5s ease-in-out'
    },
    heroTitle: {
        fontSize: '3.8rem',
        fontWeight: 'bold',
        fontFamily: "'Roboto', sans-serif"
    },
    heroSubtitle: {
        fontSize: '1.5rem',
        marginTop: '10px',
        fontFamily: "'Open Sans', sans-serif"
    },
    exploreButton: {
        padding: '14px 35px',
        fontSize: '1.2rem',
        borderRadius: '30px',
        background: '#ff6b6b',
        border: 'none',
        color: 'white',
        transition: '0.3s',
        fontWeight: '600',
        fontFamily: "'Roboto', sans-serif"
    },
    exploreButtonHover: {
        background: '#ff4757'
    },
    features: {
        padding: '80px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #203a43, #0f2027, #2c5364)',
        color: 'white'
    },
    featuresTitle: {
        marginBottom: '40px',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '2.5rem'
    },
    featureBox: {
        padding: '30px',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        cursor: 'pointer',
        boxSizing: 'border-box',
        animation: 'fadeIn 1.2s ease-in-out'
    },
    featureBoxHover: {
        boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.3)'
    },
    featureTitle: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        fontFamily: "'Roboto', sans-serif"
    },
    featureDescription: {
        color: 'lightgray',
        fontFamily: "'Open Sans', sans-serif"
    },
    footer: {
        background: '#1a1a2e',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        fontFamily: "'Roboto', sans-serif"
    }
};

export default InventoryPro;
