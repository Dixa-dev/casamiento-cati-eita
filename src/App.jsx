  import { Box, keyframes, ThemeProvider, IconButton } from "@mui/material";
import Portada from "./components/Portada"
import { useEffect, useRef, useState } from "react";
import theme from "./theme";
import { VolumeOff, VolumeUp } from "@mui/icons-material";


const db = {
    name: "Cati & Eitan",
    date: "2026-03-29T12:00:00",
    location: "https://maps.app.goo.gl/3nJpzJ7bp6JXKmzd6",
    imgCover:
      "https://res.cloudinary.com/dqqbiacuz/image/upload/v1767399033/IMG-20250117-WA0001_-_copia_1_jevl5a.jpg",
    confirmationForm: "https://docs.google.com/forms/d/e/1FAIpQLSe01rgpgb8P4N_N279ewrMXFI18iNgxpgQQortRwq8mIGTZ4Q/viewform",
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

   const [data] = useState(db);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
      if (audioRef.current) {
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
      }
    }, [isPlaying]);

    // Función para activar la música al hacer scroll
    const handleScrollClick = () => {
      if (!isPlaying) {
        setIsPlaying(true);
      }
    };

  return (
    <ThemeProvider theme={theme}>
        {/* Ícono de megáfono para controlar la música */}
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "50%",
            padding: "6px",
          }}
        >
          <IconButton onClick={() => setIsPlaying(!isPlaying)} sx={{ color: "white" }}>
            {isPlaying ? <VolumeUp fontSize="medium" /> : <VolumeOff fontSize="medium" />}
          </IconButton>
        </Box>

        {/* Reproductor de audio oculto */}
        <audio ref={audioRef} loop>
          <source
            src="https://res.cloudinary.com/dqqbiacuz/video/upload/v1741745037/Goo_Goo_Muck_c5lsm7.mp3"
            type="audio/mp3"
          />
        </audio>

        {/* Pasamos la función al componente de Portada para activarla en el scroll */}
        <Portada data={data} bounce={bounce} onScrollClick={handleScrollClick} />
        
      </ThemeProvider>
    );
  
}

export default App
