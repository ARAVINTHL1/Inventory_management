import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();

        try {
            // Send the email and password to the backend
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password
            });
            if (response.status === 200) {
                sessionStorage.setItem("loggedInUser", email);
                alert("Login successful!");
                navigate('/home')
        }
     } catch (error) {
            
            if (error.response) {
                setErrorMessage(error.response.data.message); 
            } else {
                setErrorMessage("An error occurred while logging in.");
            }
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.infoContainer}>
                <h1>Efficient Inventory Control</h1>
                <p>Log in to track your stock, analyze data, and optimize your inventory management with ease.</p>
                <img src="login.jpg" alt="Inventory Management" style={styles.img} />
            </div>

            <div style={styles.loginContainer}>
                <h2>Welcome Back!</h2>
                <p>Please login to continue</p>
                <form onSubmit={login}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            id="login-email"
                            className="form-control"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            id="login-password"
                            className="form-control"
                            required
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
                    <button type="submit" className="btn btn-primary w-100" style={styles.button}>Login</button>
                </form>
                <p className="signup-link" style={styles.signupLink}>
                    Don't have an account? <a href="/signup">Sign up here</a>
                </p>
            </div>
        </div>
    );
};

const styles = {
    body: {
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #5b5b5c, #353436)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        position: "relative",
        overflow: "hidden",
    },
    loginContainer: {
        background: "rgb(255, 255, 255)",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        width: "100%",
        maxWidth: "350px",
        textAlign: "center",
        position: "absolute",
        bottom: "10%",
        right: "5%",
        animation: "fadeIn 1s ease-in-out",
    },
    infoContainer: {
        color: "white",
        maxWidth: "50%",
        padding: "30px",
        animation: "slideIn 1.2s ease-in-out",
    },
    img: {
        width: "100%",
        maxWidth: "500px",
        borderRadius: "15px",
        marginTop: "20px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
    input: {
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        marginTop: "5px",
    },
    button: {
        backgroundColor: "#667eea",
        border: "none",
        borderRadius: "10px",
        padding: "12px 20px",
        width: "100%",
        color: "white",
        cursor: "pointer",
        transition: "0.3s",
    },
    signupLink: {
        marginTop: "15px",
    },
};

export default Login;
