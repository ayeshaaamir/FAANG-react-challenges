const ProductCard = ({ image, title }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
