import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductSideBar = ({ productData, setData }) => {
    const [price, setPrice] = useState(2500);
    const [rating, setRating] = useState(0);
    const [stock, setStock] = useState(false);
    const [categories, setCategories] = useState([]);

    const allCategories = ["Breakfast", "Lunch", "Dinner", "Desserts"];

    const applyFilters = (newPrice = price, newRating = rating, newStock = stock, newCategories = categories) => {
        const filtered = productData.filter(item => {
            const priceMatch = item.price >= newPrice;
            const ratingMatch = item.rating >= newRating;
            const stockMatch = !newStock || item.availableStock > 0;
            const categoryMatch = newCategories.length === 0 || newCategories.includes(item.category);
            return priceMatch && ratingMatch && stockMatch && categoryMatch;
        });
        setData(filtered);
    };

    return (
        <aside className="fixed top-20 left-0 h-[calc(100vh-5rem)] w-64 p-5 bg-white shadow-xl rounded-tr-xl rounded-br-xl overflow-y-auto border-r border-orange-200">
            <h2 className="text-xl font-bold mb-6 text-orange-600">Filters</h2>

            {/* Price Range */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2 text-gray-700">Price Range</h3>
                <input
                    type="range"
                    min="0"
                    max="2500"
                    step="50"
                    value={price}
                    onChange={(e) => {
                        const val = Number(e.target.value);
                        setPrice(val);
                        applyFilters(val, rating, stock, categories);
                    }}
                    className="w-full accent-orange-500 hover:accent-orange-600 transition-colors"
                />
                <p className="text-sm mt-1 text-gray-500">Up to <span className="font-medium text-orange-600">${price}</span></p>
            </div>

            {/* Ratings */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2 text-gray-700">Ratings</h3>
                <ul className="space-y-1">
                    {[5, 4, 3, 2, 1].map(star => (
                        <li
                            key={star}
                            className="flex items-center gap-2 cursor-pointer hover:bg-orange-50 rounded-md p-1 transition"
                            onClick={() => {
                                setRating(star);
                                applyFilters(price, star, stock, categories);
                            }}
                        >
                            {Array(star).fill().map((_, i) => (
                                <FaStar key={i} className="text-orange-400" />
                            ))}
                            {star !== 5 && <span className="text-sm text-gray-600">& up</span>}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Categories */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2 text-gray-700">Category</h3>
                <ul className="space-y-2">
                    {allCategories.map(category => (
                        <li key={category}>
                            <label className="flex items-center gap-3 cursor-pointer hover:text-orange-600 transition">
                                <input
                                    type="checkbox"
                                    className="accent-orange-500"
                                    checked={categories.includes(category)}
                                    onChange={() => {
                                        let newCategories = [];
                                        if (categories.includes(category)) {
                                            newCategories = categories.filter(c => c !== category);
                                        } else {
                                            newCategories = [...categories, category];
                                        }
                                        setCategories(newCategories);
                                        applyFilters(price, rating, stock, newCategories);
                                    }}
                                />
                                <span className="text-gray-700 font-medium">{category}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Availability */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2 text-gray-700">Availability</h3>
                <label className="flex items-center gap-3 cursor-pointer hover:text-orange-600 transition">
                    <input
                        type="checkbox"
                        className="accent-orange-500"
                        checked={stock}
                        onChange={() => {
                            const newStock = !stock;
                            setStock(newStock);
                            applyFilters(price, rating, newStock, categories);
                        }}
                    />
                    <span className="text-gray-700 font-medium">In Stock</span>
                </label>
            </div>
        </aside>
    );
};

export default ProductSideBar;
