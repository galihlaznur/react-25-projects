import React, { useRef } from "react";
import useFetch from "../use-fetch/useFetch";

const ScrollToTopBottom = () => {
  const [data, pending, error] = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef();

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  if (pending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom</h1>
      <h3>This is the top section.</h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data?.products?.length &&
          data.products.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom section.</h3>
    </div>
  );
};

export default ScrollToTopBottom;
