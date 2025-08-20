import React, { useState } from "react";
import { useOutletContext } from "react-router";

function Categories({ setProductData }) {
  const Category = [
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg", title: "All" },
    { img: "https://potatorolls.com/wp-content/uploads/Lumberjack-Breakfast2.jpg", title: "Breakfast" },
    { img: "https://hips.hearstapps.com/hmg-prod/images/chipotle-shrimp-taco-bowls-lead-67dd8e0fedc8d.jpeg", title: "Lunch" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7F5QS9NuaYxwKfrNCwWYyDKkIyfNZ682KA&s", title: "Dinner" },
    { img: "https://cablevey.com/wp-content/uploads/2020/11/The-Complete-Guide-on-Snack-Foods.jpg", title: "Snacks" },
    { img: "https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts-500x500.jpg", title: "Desserts" },
  ];

  const maindata = useOutletContext();
  const [selected, setSelected] = useState("All");

  const setCategories = (title) => {
    setSelected(title);
    if (title === "All") {
      setProductData(maindata);
    } else {
      const filtered = maindata.filter(
        (item) => item.category.toLowerCase() === title.toLowerCase()
      );
      setProductData(filtered);
    }
  };

  return (
    <div className="md:px-20 px-4 py-10 border-b border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>

      {/* Responsive category grid */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {Category.map((element, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer w-20 sm:w-24"
            onClick={() => setCategories(element.title)}
          >
            <div
              className={`rounded-full transition-transform duration-300 flex items-center justify-center overflow-hidden
              ${selected === element.title
                  ? "bg-orange-100 shadow-xl scale-110"
                  : "bg-gray-200 hover:bg-gray-300 hover:scale-105"
                }`}
              style={{ width: 70, height: 70 }}
            >
              <img
                src={element.img}
                alt={element.title}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span
              className={`mt-2 text-center font-medium text-sm sm:text-base transition-colors duration-300
                ${selected === element.title ? "text-orange-600" : "text-black"}`}
            >
              {element.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
