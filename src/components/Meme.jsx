import memesData from "../memesData";
import { useState } from "react";

function Meme() {
  const [memeImage, setMemeImage] = useState(memesData);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

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
    <main className="sm:my-12 lg:my-0 p-4 sm:p-6 max-w-xl mx-auto flex flex-col justify-between gap-9 sm:gap-6">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="topText" className="text-gray-600">
            Top text
          </label>
          <input
            id="topText"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            type="text"
            className="w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-seance-600 shadow-sm border rounded-md p-2"
            placeholder="Shut up"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="bottomText" className="text-gray-600">
            Bottom text
          </label>
          <input
            id="bottomText"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            type="text"
            className="w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-seance-600 shadow-sm border rounded-md p-2"
            placeholder="And take my money"
          />
        </div>
      </div>
      <button
        className="getmemeimage"
        onClick={getMemeImage}
      >
        Get a new meme image 🖼
      </button>
      <div className="relative">
        <p className="impact top-1">{meme.topText}</p>
        <p className="impact bottom-1">{meme.bottomText}</p>
        <img className="w-full" src={meme.randomImage} />
      </div>
    </main>
  );
}

export default Meme;
