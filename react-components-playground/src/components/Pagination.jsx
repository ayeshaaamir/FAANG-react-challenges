import { useEffect, useState } from "react";
import { GET_PRODUCTS_API, PAGE_SIZE } from "../config";
import PaginationLogic from "../features-components/pagination/PaginationLogic";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetchData = async () => {
    const data = await fetch(GET_PRODUCTS_API);
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !products.length ? (
    <h1>No data found</h1>
  ) : (
    <PaginationLogic
      products={products}
      start={start}
      end={end}
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      noOfPages={noOfPages}
    />
  );
};

export default Pagination;
