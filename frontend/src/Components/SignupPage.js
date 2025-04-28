import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            
            const response = await axios.post('http://localhost:5000/register', {
                email,
                password,
            });

            if (response.status === 201) {
                alert('Signup successful! Redirecting to login...');
                navigate('/login');
            }
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.data.message) {
                setErrorMessage(error.response.data.message); // Show the error message from backend
            } else {
                setErrorMessage('Server error, please try again later.');
            }
        }
    };

    return (
        <div style={styles.body}>
            <div style={styles.infoContainer}>
                <h1>Revolutionize Your Inventory Management</h1>
                <p>Take control of your inventory with real-time tracking, smart analytics, and seamless organization.</p>
                <img src="sign.jpg" alt="Smart Inventory Management" style={styles.img} />
            </div>

            <div style={styles.signupContainer}>
                <h2>Create an Account</h2>
                <p>Join InventoryPro today</p>
                <form onSubmit={handleSignup}>
                    <div style={styles.formGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            required
                            placeholder="Create a password"
                        />
                    </div>

                    {/* Display any error message */}
                    {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

                    <button type="submit" style={styles.button} disabled={loading}>
                        {loading ? 'Signing up...' : 'Signup'}
                    </button>
                </form>

                <p style={styles.loginLink}>Already have an account? <a href="/login">Login here</a></p>
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
        overflow: "hidden"
    },
    signupContainer: {
        background: "rgb(248, 248, 248)",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        width: "100%",
        maxWidth: "350px",
        textAlign: "center",
        position: "absolute",
        bottom: "10%",
        right: "5%",
        animation: "fadeIn 1s ease-in-out"
    },
    infoContainer: {
        color: "white",
        maxWidth: "50%",
        padding: "30px",
        animation: "slideIn 1.2s ease-in-out"
    },
    img: {
        width: "100%",
        maxWidth: "500px",
        borderRadius: "15px",
        marginTop: "20px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
    },
    formGroup: {
        marginBottom: "15px"
    },
    input: {
        width: "100%",
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        marginTop: "5px"
    },
    button: {
        backgroundColor: "#667eea",
        border: "none",
        borderRadius: "10px",
        padding: "12px 20px",
        width: "100%",
        color: "white",
        cursor: "pointer",
        transition: "0.3s"
    },
    buttonHover: {
        backgroundColor: "#764ba2"
    },
    loginLink: {
        marginTop: "15px"
    },
    errorMessage: {
        color: 'red',
        fontSize: '14px',
        marginBottom: '10px',
    }
};

export default Signup;
