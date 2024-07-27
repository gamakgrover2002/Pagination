import React, { useEffect, useState } from "react";
import ProductAPI from "./FetchingAPI";
import Pagination from "../Components/Pagination";

const productAPI = new ProductAPI("https://dummyjson.com/products");

function Fetching() {
  const [limit, setLimit] = useState(9);
  const [data, setData] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [productDetails, setProductDetails] = useState({});

  async function fetchData() {
    try {
      const result = await productAPI.apiGet(limit, offSet);
      setData(result.products);
      console.log(result.products);
    } catch (error) {
      console.log(error);
    }
  }
  async function getProduct(id) {
    try {
      const result = await productAPI.getProduct(id);
      setProductDetails(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight =
      e.target.documentElement.scrollTop + window.innerHeight;

    if (currentHeight + 10 > scrollHeight) {
      setOffSet((prevOffset) => prevOffset + 5);
    }
  };

  useEffect(() => {
    fetchData();
  }, [offSet]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentPage = Math.floor(offSet / 5) + 1;
  const totalPages = 39;

  const handlePageChange = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setOffSet((pageNum - 1) * 5);
    }
  };

  return (
    <>
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <div id="products-container">
        {data.map((e) => (
          <div key={e.id} className="product-div">
            {e.title}
            <br />
            Price: ${e.price}
            <br />
            <button onClick={() => getProduct(e.id)}>Get Details</button>
            {productDetails[e.id] && (
              <div>
                <p className="details">{productDetails[e.id].description}</p>
                <p className="rating">{productDetails[e.id].rating}/5</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Fetching;
