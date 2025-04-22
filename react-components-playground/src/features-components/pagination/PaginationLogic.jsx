import ProductCard from "./ProductCard";

const PaginationLogic = ({
  products,
  start,
  end,
  handlePageChange,
  currentPage,
  noOfPages,
}) => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(start, end).map((product) => (
            <ProductCard
              key={product.id}
              image={product.thumbnail}
              title={product.title}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className={`h-9 w-9 rounded-full border flex items-center justify-center
      ${
        currentPage === 0
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
      }`}
            aria-label="Previous page"
          >
            &laquo;
          </button>

          {[...Array(noOfPages).keys()].map((n) => (
            <button
              key={n}
              onClick={() => handlePageChange(n)}
              className={`h-9 w-9 rounded-full border flex items-center justify-center
        ${
          currentPage === n
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
        }`}
            >
              {n + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === noOfPages - 1}
            className={`h-9 w-9 rounded-full border flex items-center justify-center
      ${
        currentPage === noOfPages - 1
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
      }`}
            aria-label="Next page"
          >
            &raquo;
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginationLogic;
