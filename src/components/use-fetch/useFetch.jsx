import React, { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setPending(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, pending, error];
};

export default useFetch;
