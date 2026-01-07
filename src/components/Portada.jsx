import { Box, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Portada = ({ data }) => {
  const handleScroll = () => {
    const nextSection = document.getElementById("countdown");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fondo */}
      <Box
        component="img"
        src={data.imgCover}
        alt="Portada"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.05)",
        }}
      />

      {/* BLOQUE CENTRAL */}
      <Box
        sx={{
          position: "absolute",
          top: "62%", // ⬇️ más abajo
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        {/* IMAGEN NOS CASAMOS */}
        <Box
          component="img"
          src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767401478/NOS_CASAMOS_wypygl.png"
          alt="Nos casamos"
          sx={{
            width: { xs: 220, sm: 260 },
            height: "auto",
            mb: 3, // ⬅️ más aire entre imagen y nombres
          }}
        />

        {/* NOMBRES */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "'Hattinand', cursive !important",
              fontSize: "48px",
              lineHeight: 1.05,
              mb: 0.8, // ⬅️ espacio abajo
              color: "#423636",
            }}
          >
            Cati
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Hattinand', cursive",
              fontSize: "28px",
              lineHeight: 1.4,
              mb: 0.8, // ⬅️ separa más del nombre de abajo
              color: "#423636",
            }}
          >
            &
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Hattinand', cursive",
              fontSize: "48px",
              lineHeight: 1.05,
              color: "#423636",
            }}
          >
            Eitan
          </Typography>
        </Box>
      </Box>

      {/* Flecha */}
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom:"5vh"
        }}
      >
        <KeyboardArrowDownRoundedIcon
          onClick={handleScroll}
          sx={{
            fontSize: 48,
            cursor: "pointer",
            color: "rgba(0,0,0,0.7)",
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
              "40%": { transform: "translateY(8px)" },
              "60%": { transform: "translateY(4px)" },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Portada;
