import Card from "./Card";
import rainSvg from "./assets/svg/rain.svg";
import wavesSvg from "./assets/svg/waves.svg";
import musicSvg from "./assets/svg/music.svg";
import campfireSvg from "./assets/svg/campfire.svg";
import windSvg from "./assets/svg/wind.svg";
import forestSvg from "./assets/svg/forest.svg";
import playgroundSvg from "./assets/svg/playground.svg";
import circusSvg from "./assets/svg/circus.svg";
import casinoSvg from "./assets/svg/casino.svg";
import fireworkSvg from "./assets/svg/firework.svg";
import coffeeSvg from "./assets/svg/coffee.svg";
import highwaySvg from "./assets/svg/highway.svg";
// import githubSvg from "./assets/svg/github.svg";

import pianoSvg from "./assets/svg/piano.svg";
import acousticSvg from "./assets/svg/acoustic-guitar.svg";
import spanishSvg from "./assets/svg/spanish-guitar.svg";
import violinSvg from "./assets/svg/violin.svg";
import fluteSvg from "./assets/svg/flute.svg";
// import drummerSetSvg from "./assets/svg/drummer-set.svg";



import bg from "./assets/bg.png";
import music1Svg from "./assets/svg/music-1.svg";
import music2Svg from "./assets/svg/music-2.svg";
import music3Svg from "./assets/svg/music-3.svg";

import { useState } from "react";
import Title from "./Title";

function App() {
  const [hasInteracted, setHasInteracted] = useState(false);

  // Function to handle user interaction, hides the popup
  const handleInteraction = () => {
    setHasInteracted(true); // Hide the popup after interaction
  };

  return (
    <div
      className="relative h-[100%] bg-black text-white flex flex-col p-4 items-center"
      onClick={handleInteraction}
    >
      <img
        className="fixed inset-0 top-0 h-full w-full object-cover"
        src={bg}
      />
      <div className="my-5 select-none sm:my-8 text-center z-[1]">
        <p className="text-5xl sm:text-6xl yeseva-one-regular">AMBIENT</p>
        <p className="text-8xl sm:text-9xl protest-strike-regular text-green-400">
          CHAOS
        </p>
      </div>
      <Title title="NATURE" />
      <div className="grid grid-cols-2 gap-10 sm:my-10 sm:grid-cols-3 sm:gap-30 md:gap-24 protest-strike-regular">
        <Card icon={rainSvg} name={"Rain"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742648755/rain_zx8zgj.mp3'} />
        <Card icon={musicSvg} name={"Lo-fi Beats"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742649057/lofi_zy5iel.mp3'} />
        <Card icon={wavesSvg} name={"Waves"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742648831/waves_ergw0t.mp3'} />
        <Card icon={campfireSvg} name={"Campfire"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742649262/campfire_bowe0p.mp3'} />
        <Card icon={windSvg} name={"Wind"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742649363/wind_iyz6nt.mp3'} />
        <Card icon={forestSvg} name={"Forest"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742649483/forest_loqygo.mp3'} />
      </div>
      <Title title="MUSIC INSTRUMENTS" />
      <div className="grid grid-cols-2 gap-10 sm:my-10 sm:grid-cols-3 sm:gap-30 md:gap-24 protest-strike-regular">
        <Card icon={pianoSvg} name={"Piano"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742650177/beethoven_ffcaml.mp3'} />
        <Card icon={acousticSvg} name={"Acoustic Guitar"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742650216/guitar-summer-walk_lzus0t.mp3'} />
        <Card icon={spanishSvg} name={"Spanish Guitar"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742650237/spanish-the-lively-dancer_dulysn.mp3'} />
        <Card icon={violinSvg} name={"Violin"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742650315/wind_xty2qb.mp3'} />
        <Card icon={fluteSvg} name={"Flute"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742650343/indian-flute_eqdqqa.mp3'} />
        {/* <Card icon={drummerSetSvg} name={"Drums"} audio={drumsMp3} /> */}
      </div>
      <Title title="OTHER" />
      <div className="grid grid-cols-2 gap-10 sm:my-10 sm:grid-cols-3 sm:gap-30 md:gap-24 protest-strike-regular">
        <Card icon={playgroundSvg} name={"Playground"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742649787/playground_ob7pbe.mp3'} />
        <Card icon={circusSvg} name={"Circus"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742649845/carnival_dvfivk.mp3'} />
        <Card icon={casinoSvg} name={"Casino"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742649900/casino_blxw4z.mp3'} />
        <Card icon={fireworkSvg} name={"Firework"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742650062/fireworks_dno63o.mp3'} />
        <Card icon={coffeeSvg} name={"Coffee Shop"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742650109/coffee_i5y1qh.mp3'} />
        <Card icon={highwaySvg} name={"Highway"} audio={'https://res.cloudinary.com/dfcqmkj0k/video/upload/v1742650141/highway_hbyidx.mp3'} />
      </div>

      {!hasInteracted && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="popup-container bg-home-gradient text-white p-6 rounded-xl shadow-lg text-center animate-fade-in">
            <div className="flex justify-center">
              <img
                src={music1Svg}
                alt="Music Icon"
                className="w-16 h-16 mb-4 animate-bounce-alternate-1"
              />
              <img
                src={music2Svg}
                alt="Music Icon"
                className="w-16 h-16 mb-4 animate-bounce-alternate-2"
              />
              <img
                src={music3Svg}
                alt="Music Icon"
                className="w-16 h-16 mb-4 animate-bounce-alternate-1"
              />
            </div>
            <p className="text-2xl font-bold protest-strike-regular">
              Elevate the volume!
            </p>
            <p className="text-lg mt-2 font-bold">
              "Rain" and "Lo-fi Beats" are pure bliss.
              <br />
              For the best experience, use headphones!
            </p>
            <button
              onClick={handleInteraction}
              className="mt-6 bg-green-900 hover:bg-green-800 px-6 py-2 rounded-lg font-semibold transition duration-300"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* <div className="z-[1] py-10">
        <a href="https://github.com/Yagnik-Gohil/Ambient-Chaos" target="_blank">
          <img
            src={githubSvg}
            alt="Github Icon"
            className="w-16 h-16 mb-4 filter invert"
          />
        </a>
      </div> */}
    </div>
  );
}

export default App;
