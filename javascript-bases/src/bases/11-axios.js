import axios from "axios";

const apiKey = "WEREoENXcdwL7CjuCdMEbD3sggdJo80T";

const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

giphyApi
  .get("/random")
  .then((res) => res.data)
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  });

  export { giphyApi };