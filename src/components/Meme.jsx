import memesData from "../memesData";
import { useState } from "react";

function Meme() {
  const [memeImage, setMemeImage] = useState(memesData);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage() {
    const memesAray = memeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memesAray.length);
    const url = memesAray[randomNumber].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }

  return (
    <div className="sm:my-12 lg:my-0 p-4 sm:p-6 max-w-xl mx-auto flex flex-col justify-between gap-9 sm:gap-6">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="top-text" className="text-gray-600">
            Top text
          </label>
          <input
            id="top-text"
            type="text"
            className="w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-seance-600 shadow-sm border rounded-md p-2"
            placeholder="Shut up"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="bottom-text" className="text-gray-600">
            Bottom text
          </label>
          <input
            id="bottom-text"
            type="text"
            className="w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-seance-600 shadow-sm border rounded-md p-2"
            placeholder="And take my money"
          />
        </div>
      </div>
      <button
        className="p-2 rounded-md bg-gradient-to-r from-seance-900 to-seance-700 text-white"
        onClick={getMemeImage}
      >
        Get a new meme image 🖼
      </button>
      <img src={meme.randomImage} />
    </div>
  );
}

export default Meme;
