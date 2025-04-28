import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    // Redirect if user is not logged in
    if (!sessionStorage.getItem("loggedInUser")) {
      window.location.href = "welcome.html";
    }

    const teamImages = document.querySelectorAll(".team-member img");
    const modal = document.getElementById("teamModal");
    const modalImg = document.getElementById("modalImg");
    const modalName = document.getElementById("modalName");
    const modalRole = document.getElementById("modalRole");
    const closeModal = document.querySelector(".close");

    teamImages.forEach((img) => {
      img.addEventListener("click", function () {
        const name = img.getAttribute("data-name");
        const role = img.getAttribute("data-role");
        const imageSrc = img.getAttribute("data-img");

        modalImg.src = imageSrc;
        modalName.textContent = name;
        modalRole.textContent = role;
        modal.style.display = "flex";
      });
    });

    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }, []);

  return (
    <div>
      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(to right, #353636, #0c2e2ecd);
            color: #fff;
          }
          .container {
            margin-top: 50px;
          }
          .team-member img {
            border-radius: 50%;
            width: 120px;
            height: 120px;
            object-fit: cover;
            border: 3px solid #fff;
            transition: transform 0.3s ease-in-out;
            cursor: pointer;
          }
          .team-member img:hover {
            transform: scale(1.2);
          }
          .section-title {
            text-align: center;
            font-size: 2.8rem;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 40px;
            color: #d4cece;
          }
          .card {
            background: rgba(165, 162, 162, 0.452);
            border: none;
            border-radius: 15px;
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            color: #cccaca;
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.2);
          }
          .navbar-brand {
            color: #c7c3c3 !important;
          }
          
          /* Modal Styles */
          .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .modal-content {
            background: #333;
            color: white;
            padding: 30px;
            width: 40%;
            text-align: center;
            border-radius: 10px;
            position: relative;
            box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.2);
          }
          .close {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 30px;
            cursor: pointer;
            color: #fff;
          }
          .modal-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid white;
            margin: 10px auto;
            display: block;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            InventoryPro
          </a>
        </div>
      </nav>

      <div className="container text-center">
        <div className="card">
          <h1 className="section-title">Revolutionizing Inventory Management</h1>
          <p className="lead">
            At InventoryPro, we bring you next-generation inventory management
            solutions that streamline operations, reduce overheads, and enhance
            business productivity. Designed with precision, our system ensures
            effortless stock tracking and optimization.
          </p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="card">
          <h2 className="section-title">Our Vision</h2>
          <p className="text-center lead">
            To empower businesses of all sizes with cutting-edge inventory
            management solutions that enhance efficiency, reduce waste, and drive
            growth in an ever-evolving marketplace.
          </p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="card">
          <h2 className="section-title">Our Team</h2>
          <div className="row text-center">
            <div className="col-md-4 team-member">
              <img
                src="i.jpg"
                alt="Divyabharathi"
                data-name="Divyabharathi"
                data-role="TEAM LEADER"
                data-img="i.jpg"
              />
              <h5>Divyabharathi</h5>
              <p>TEAM LEADER</p>
            </div>
            <div className="col-md-4 team-member">
              <img
                src="i.jpg"
                alt="Aishwarrya"
                data-name="Aishwarrya"
                data-role="TEAM MEMBER"
                data-img="i.jpg"
              />
              <h5>Aishwarrya</h5>
              <p>TEAM MEMBER</p>
            </div>
            <div className="col-md-4 team-member">
              <img
                src="i.jpg"
                alt="Aravinth"
                data-name="Aravinth"
                data-role="TEAM MEMBER"
                data-img="aravinth.jpg"
              />
              <h5>Aravinth</h5>
              <p>TEAM MEMBER</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div id="teamModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <img id="modalImg" className="modal-img" alt="Team Member" />
          <p id="modalName"></p>
          <p id="modalRole"></p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
