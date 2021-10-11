import { giphyApi } from "./bases/11-axios";

const getImage = async () => {
  try {
    const { data } = (await giphyApi.get("/random")).data;
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

getImage();
