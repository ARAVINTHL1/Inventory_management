import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

const InventoryDashboard = () => {
    const [products, setProducts] = useState([]);
    const [totalStock, setTotalStock] = useState(0);
    const [productColors, setProductColors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        loadProducts();
    }, [navigate]);

    const getRandomColor = () => {
        return `hsl(${Math.random() * 360}, 70%, 60%)`; // Generates a random color in HSL format
    };

    const loadProducts = () => {
        let storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        let storedColors = JSON.parse(localStorage.getItem("productColors")) || {};
        let total = 0;

        storedProducts.forEach(product => {
            total += product.stock;

            // If product doesn't have a color assigned, generate one and store it
            if (!storedColors[product.name]) {
                storedColors[product.name] = getRandomColor();
            }
        });

        setProducts(storedProducts);
        setProductColors(storedColors);
        setTotalStock(total);
        localStorage.setItem("productColors", JSON.stringify(storedColors)); // Persist the product colors
    };

    const addProduct = () => {
        let name = prompt("Enter product name:");
        let stock = prompt("Enter stock quantity:");
        let image = prompt("Enter image URL (or leave blank for default):");

        if (name && stock) {
            let storedProducts = JSON.parse(localStorage.getItem("products")) || [];
            let storedColors = JSON.parse(localStorage.getItem("productColors")) || {};

            storedProducts.push({
                name,
                stock: parseInt(stock),
                image: image || "https://via.placeholder.com/150"
            });

            if (!storedColors[name]) {
                storedColors[name] = getRandomColor();
            }

            localStorage.setItem("products", JSON.stringify(storedProducts));
            localStorage.setItem("productColors", JSON.stringify(storedColors));
            loadProducts();
        }
    };

    const updateStock = (index, event) => {
        let storedProducts = JSON.parse(localStorage.getItem("products"));
        storedProducts[index].stock = parseInt(event.target.innerText) || 0;
        localStorage.setItem("products", JSON.stringify(storedProducts));
        loadProducts();
    };

    const deleteProduct = (index) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            let storedProducts = JSON.parse(localStorage.getItem("products"));
            let storedColors = JSON.parse(localStorage.getItem("productColors"));

            let deletedProduct = storedProducts[index].name;
            delete storedColors[deletedProduct];

            storedProducts.splice(index, 1);
            localStorage.setItem("products", JSON.stringify(storedProducts));
            localStorage.setItem("productColors", JSON.stringify(storedColors));
            loadProducts();
        }
    };

    const salesChartData = {
        labels: products.map(p => p.name),
        datasets: [{
            label: "Stock Levels",
            data: products.map(p => p.stock),
            backgroundColor: products.map(p => productColors[p.name]),
            borderColor: products.map(p => productColors[p.name].replace('60%', '50%')),
            borderWidth: 1
        }]
    };

    const stockPieChartData = {
        labels: products.map(p => p.name),
        datasets: [{
            data: products.map(p => p.stock),
            backgroundColor: products.map(p => productColors[p.name])
        }]
    };

    return (
        <div className="container mt-4">
            <h2>Dashboard</h2>
            <div className="row">
                <div className="col-md-12">
                    <div className="card p-3">
                        <h4>Products</h4>
                        <div className="d-flex mb-2">
                            <input type="text" className="form-control me-2" placeholder="Search Products..." />
                            <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Stock</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td>{product.name}</td>
                                        <td
                                            contentEditable
                                            onBlur={(e) => updateStock(index, e)}
                                        >
                                            {product.stock}
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h5>Total Stock: <span>{totalStock}</span></h5>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card p-3">
                        <h4>Stock Levels (Bar Chart)</h4>
                        <Bar data={salesChartData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3">
                        <h4>Stock Distribution (Pie Chart)</h4>
                        <Pie data={stockPieChartData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDashboard;
