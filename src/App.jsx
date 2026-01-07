import { Box, keyframes, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { VolumeOff, VolumeUp } from "@mui/icons-material";

import Portada from "./components/Portada";
import Countdown from "./components/Countdown";
import Location from "./components/Location";
import Confirmation from "./components/Confirmation";
import Gift from "./components/Gift";
import Song from "./components/Song";
import Dresscode from "./components/Desscode";
import Photo from "./components/Photo";
import Footer from "./components/Footer";

const db = {
  name: "Cati & Eitan",
  date: "2026-03-29T12:00:00",
  location: "https://maps.app.goo.gl/3nJpzJ7bp6JXKmzd6",
  imgCover:
    "https://res.cloudinary.com/dqqbiacuz/image/upload/v1767399033/IMG-20250117-WA0001_-_copia_1_jevl5a.jpg",
  confirmationForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSe01rgpgb8P4N_N279ewrMXFI18iNgxpgQQortRwq8mIGTZ4Q/viewform",
  imgBank:
    "https://res.cloudinary.com/dqqbiacuz/image/upload/v1767577227/Group_1_1_fqyfw3.png",
  SpotifyList:
    "https://open.spotify.com/playlist/7bITT7j2PHK5vpdAFWz422",
  instagram: "https://www.instagram.com/bodacatiyeitan",
};

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  return (
    <>
      {/* Control música */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: "50%",
          p: "6px",
        }}
      >
        <IconButton onClick={() => setIsPlaying(!isPlaying)} sx={{ color: "#fff" }}>
          {isPlaying ? <VolumeUp /> : <VolumeOff />}
        </IconButton>
      </Box>

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source
          src="https://res.cloudinary.com/dqqbiacuz/video/upload/v1767577496/Alex_Warren_-_Ordinary_Sub._Espa%C3%B1ol_Lyrics_-_sweetblue._as04up.mp3"
          type="audio/mp3"
        />
      </audio>

      <Portada data={db} bounce={bounce} />
      <Countdown targetDate={db.date} />
      <Location data={db} bounce={bounce} />
      <Confirmation confirmationForm={db.confirmationForm} />
      <Gift imgCbu={db.imgBank} />
      <Song SongList={db.SpotifyList} />
      <Dresscode />
      <Photo instagram={db.instagram} />
      <Footer />
    </>
  );
}

export default App;
