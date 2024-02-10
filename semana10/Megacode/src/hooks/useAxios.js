import { useState, useEffect } from "react";
import axios from "axios";

const useData = (url, options = { method: 'get', data: null }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      //https://axios-http.com/docs/api_intro
      const response = await axios({ url, ...options })
      setData(response.data);
    } catch (error) {
      setError(error)
    } finally {
      //despues que termina try y catch, finally siempre se ejecuta si o si
      setLoading(false);
    }
  }

  useEffect(() => {
    const getData = async () => {
      fetchData();
    }
    getData();
  }, [url, options.method, options.data])

  const refetch = () => {
    fetchData();
  }

  return { data, error, loading, refetch }
}

export default useData;
