import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const MOBILE_WIDTH = "80%"; // 👈 cambiá a 60vw si querés

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };

    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / (1000 * 60)) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };

  const [t, setT] = useState(calculateTimeLeft());

  useEffect(() => {
    const i = setInterval(() => setT(calculateTimeLeft()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <Box
    id="countdown"
      sx={{
        
        backgroundColor: "#F0ECE3",
        height:"40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        // ⛔ solo mobile
        "@media (min-width: 768px)": {
          display: "none",
        },
      }}
    >
      {/* CONTENEDOR MOBILE */}
      <Box
        sx={{
          width: MOBILE_WIDTH,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* TÍTULO */}
        <Typography
          sx={{
            fontSize: "10vw",
            fontWeight: 100,
            letterSpacing: "1.5vw",
            color: "#746961",
            marginBottom: "4vh",
            lineHeight: 1,
          }}
        >
          FALTAN
        </Typography>

        {/* CONTADOR */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "1fr 10vw 1fr 10vw 1fr 10vw 1fr",
            alignItems: "center",
          }}
        >
          {/* NÚMEROS */}
          <Typography sx={num}>{t.d}</Typography>
          <Typography sx={dot}>·</Typography>
          <Typography sx={num}>{t.h}</Typography>
          <Typography sx={dot}>·</Typography>
          <Typography sx={num}>{t.m}</Typography>
          <Typography sx={dot}>·</Typography>
          <Typography sx={num}>{t.s}</Typography>

          {/* LABELS */}
          <Typography sx={label}>Días</Typography>
          <Typography sx={bar}>|</Typography>
          <Typography sx={label}>Hs</Typography>
          <Typography sx={bar}>|</Typography>
          <Typography sx={label}>Min</Typography>
          <Typography sx={bar}>|</Typography>
          <Typography sx={label}>Seg</Typography>
        </Box>
      </Box>
    </Box>
  );
};

/* === ESTILOS MOBILE === */

const num = {
  fontSize: "10.7vw", // ~42px
  fontWeight: 500,
  color: "#746961",
  textAlign: "center",
};

const dot = {
  fontSize: "12.8vw", // ~50px
  fontWeight: 300,
  color: "#C3937C",
  textAlign: "center",
};

const label = {
  fontSize: "3.6vw", // ~14px
  fontWeight: 300,
  color: "#9A9A9A",
  textAlign: "center",
  marginTop: "2vw",
};

const bar = {
  fontSize: "6.4vw", // ~25px
  fontWeight: 300,
  color: "#9A9A9A",
  textAlign: "center",
  marginTop: "2vw",
};

export default Countdown;
