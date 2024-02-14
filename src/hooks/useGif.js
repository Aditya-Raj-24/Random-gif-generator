import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;



const useGif = (tag) => {
    
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=`;

  async function fetchData(tag) {
    setLoading(true);

    const { data } = await axios.get(tag ? tagMemeUrl + tag : randomMemeUrl);
    const imageUrl = data.data.images.downsized_large.url;
    setGif(imageUrl);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData};
}

export default useGif;
