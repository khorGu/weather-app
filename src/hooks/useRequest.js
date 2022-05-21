import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useRequest = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setLoading(false);
        setData(result.data);
      })
      .catch((err) => {
        toast.error("Error loading data");
      });
  }, [url]);

  return { loading, data };
};

export default useRequest;
