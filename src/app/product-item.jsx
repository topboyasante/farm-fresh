import { useParams } from "react-router-dom";
import { items } from "../constants/items";

const ProductItemPage = () => {
  const params = useParams();
  const { id } = params;
  const item = items.find((item) => item.id === parseInt(id, 10));

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <img
          src={item.image_url}
          alt={item.name}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <div className="p-5">
          <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
          <p className="text-gray-700 text-xl">${item.price.toFixed(2)}</p>
          <p className="text-gray-500 mt-4">{item.description}</p>
          <p className="text-gray-500 mt-2">
            <strong>Category:</strong> {item.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItemPage;
