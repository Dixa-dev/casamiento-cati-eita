import { Box, IconButton } from "@mui/material";
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
    "https://open.spotify.com/playlist/7bITT7j2PHK5vpdAFWz422?si=r79OCxafR5asgk6rc5CqgA&pt=231e7c5aebbb46b91581f1198d08b122&pi=u_rqoVohSsGxT",
  instagram: "https://www.instagram.com/bodacatiyeitan",
};

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Arranca música SOLO después de la primera interacción
  const startMusic = () => {
    if (!audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      })
      .catch(() => {
        // iOS bloquea hasta interacción real
      });
  };

  // Escuchamos primer click / touch / scroll
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        startMusic();
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
    });
    window.addEventListener("scroll", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const bounceAnimation = {
    animation: "bounce 2s infinite",
    "@keyframes bounce": {
      "0%, 20%, 50%, 80%, 100%": {
        transform: "translateY(0)",
      },
      "40%": {
        transform: "translateY(8px)",
      },
      "60%": {
        transform: "translateY(4px)",
      },
    },
  };

  return (
    <>
      {/* BOTÓN DE AUDIO */}
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
        <IconButton onClick={toggleMusic} sx={{ color: "#fff" }}>
          {isPlaying ? <VolumeUp /> : <VolumeOff />}
        </IconButton>
      </Box>

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source
          src="https://res.cloudinary.com/dqqbiacuz/video/upload/v1767577496/Alex_Warren_-_Ordinary_Sub._Espa%C3%B1ol_Lyrics_-_sweetblue._as04up.mp3"
          type="audio/mp3"
        />
      </audio>

      <Portada data={db} bounce={bounceAnimation} />
      <Countdown targetDate={db.date} />
      <Location data={db} bounce={bounceAnimation} />
      <Confirmation confirmationForm={db.confirmationForm} />
      <Gift imgCbu={db.imgBank} />
      <Song SongList={db.SpotifyList} bounce={bounceAnimation} />
      <Dresscode />
      <Photo instagram={db.instagram} />
      <Footer />
    </>
  );
}

export default App;
