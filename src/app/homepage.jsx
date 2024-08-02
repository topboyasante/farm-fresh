import React, { useState } from "react";
import { groceryCategories } from "../constants/categories";
import { items } from "../constants/items";
import { cn } from "../lib/cn";
import { Link } from "react-router-dom";

function HomePage() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const currentCategory = groceryCategories[currentCategoryIndex].name;

  const filteredItems = items.filter(
    (item) => item.category === currentCategory
  );

  return (
    <div>
      <div className="flex items-center gap-5 overflow-scroll border-b pt-2">
        {groceryCategories.map((category) => {
          return (
            <button
              key={category.id}
              className={cn("cursor-pointer p-3 hover:border-b-[5px]", {
                "border-b-[5px] border-b-green-600/70":
                  currentCategoryIndex === category.id,
              })}
              type="button"
              onClick={() => setCurrentCategoryIndex(category.id)}
            >
              <p className="text-nowrap text-green-600">
                {category.name} {category.icon}
              </p>
            </button>
          );
        })}
      </div>
      <div className="p-3">
        <div className="my-5">
          <h4 className="text-2xl font-bold mb-2">
            {groceryCategories[currentCategoryIndex].name}
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
          {filteredItems.map((item) => (
            <Link
            to={`/products/${item.id}`}
              key={item.id}
              className="border rounded-md shadow lg:col-span-2"
            >
              <img
                src={item.image_url}
                alt={item.name}
                className="w-full h-32 object-cover mb-2 rounded"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold">{item.name}</h5>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
