import React from 'react';

const LoginSelection = () => {
  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

          body {
            font-family: 'Poppins', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: url('i.jpg') no-repeat center center fixed;
            background-size: cover;
            text-align: center;
            color: white;
            padding: 20px;
            animation: fadeIn 1.5s ease-in-out;
          }

          h1 {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
            animation: slideDown 1s ease-in-out;
          }

          p {
            font-size: 16px;
            margin-bottom: 30px;
            animation: slideUp 1s ease-in-out;
          }

          .login-container {
            display: flex;
            gap: 30px;
            animation: fadeIn 2s ease-in-out;
          }

          .login-card {
            background: rgb(23, 25, 30);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
            width: 260px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
            cursor: pointer;
            border: 2px solid rgba(255, 255, 255, 0.3);
            animation: floating 3s infinite ease-in-out;
          }

          .login-card:hover {
            transform: translateY(-10px) scale(1.05);
            background: rgba(59, 86, 107, 0.3);
            box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.4);
          }

          .login-card img {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
            animation: pulse 1.5s infinite;
          }

          .login-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 5px;
          }

          .login-description {
            font-size: 14px;
          }

          /* Animations */
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideDown {
            from {
              transform: translateY(-20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes floating {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>

      <h1>Welcome to Inventory Management System</h1>
      <p>Select your role to log in:</p>
      <div className="login-container">
        
        <div
          className="login-card"
          onClick={() => (window.location.href = '/login')}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="User Icon"
          />
          <div className="login-title">User Login</div>
          <div className="login-description">Login using email</div>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;
