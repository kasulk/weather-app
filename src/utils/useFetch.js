import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(url);
      const newData = await response.json();

      setData(newData);
      //   console.log("data:", data);
    }
    startFetching();
  }, [url]);

  return data;
}
