// https://newsapi.org/v2/top-headlines?country=in&apiKey=d48fea298140422fab95b2b8e1c573b7
import axios from "axios";
import { useEffect, useState } from "react";
export const useApi = (URl) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);

  //state for loading ,fulfillment rejected
  const getNews = async () => {
    try {
      const response = await axios.get(URL);
      console.log("response", response);
      setLoading(false);
      setNews(response);
    } catch (err) {
      console.log("error");
      setError(err);
    }
  };
  useEffect(() => {
    getNews();
  }, []);

  return { loading, news, error };
};
