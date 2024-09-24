import { useEffect, useState } from "react";

function Meme() {
  const [allMemes, setAllMemes] = useState([]); //Initialize with empty array
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []); //No dependencies array, will not run again

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function getRandomMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
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
        className="p-2 rounded-md bg-gradient-to-r from-seance-900 to-seance-700 text-white focus:outline-none focus:ring-2 focus:ring-seance-600"
        onClick={getRandomMeme}
      >
        Get a new meme image 🖼
      </button>
      <div className="relative">
        <p className="impact top-[0.2em] sm:top-1">{meme.topText}</p>
        <p className="impact bottom-[0.2em] sm:bottom-1">{meme.bottomText}</p>
        <img className="w-full" src={meme.randomImage} />
      </div>
    </main>
  );
}

export default Meme;
