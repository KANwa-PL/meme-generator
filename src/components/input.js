import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";

function Input() {
  const memeCount = useRef(0);
  const memeReference = useRef();
  const [allMemes, setAllMemes] = useState({});
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    memeCount.current = memeCount.current + 1;
  }, [meme.image])

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    setMeme(() => {
      return {
        topText: "",
        bottomText: "",
        image: allMemes[Math.floor(Math.random() * allMemes.length)].url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((previousMeme) => {
      return {
        ...previousMeme,
        [name]: value,
      };
    });
  }

  const handleSave = async () => {
    const memeElement = memeReference.current;
    const canvasImage = await html2canvas(memeElement, {
      allowTaint: true,
      useCORS: true,
    });
    const data = canvasImage.toDataURL("image/jpg");
    const link = document.createElement("a");
    link.href = data;
    link.download = `meme_${memeCount.current}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    link.remove();
  };

  return (
    <main>
      <div className="form">
        <input
          name="topText"
          value={meme.topText}
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
        />
        <input
          name="bottomText"
          value={meme.bottomText}
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div ref={memeReference} className="meme">
        <img src={meme.image} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
      <button className="form--button" onClick={handleSave}>
        Download
      </button>
    </main>
  );
}

export default Input;
