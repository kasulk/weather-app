import { useEffect, useState } from "react";

/* export default function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(url);
      const newData = await response.json();

      setData(newData);
    }
    startFetching();
  }, []);

  return data;
}
 */

export default function useFetch(url) {
  const [data, setData] = useState();

  async function startFetching() {
    const response = await fetch(url);
    const newData = await response.json();

    setData(newData);
  }

  useEffect(() => {
    const intervalID = setInterval(startFetching, 5000);

    return () => {
      clearInterval(intervalID)
    }
  }, []);

  return data;
}


