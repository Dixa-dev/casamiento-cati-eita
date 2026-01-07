import { Box } from "@mui/material";
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
      {/* FONDO */}
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

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.15)",
        }}
      />

      {/* BLOQUE CENTRAL */}
      <Box
        sx={{
          position: "absolute",
          top: "62%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        {/* NOS CASAMOS */}
        <Box
          component="img"
          src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767401478/NOS_CASAMOS_wypygl.png"
          alt="Nos casamos"
          sx={{
            width: { xs: 200, sm: 230 },
            height: "auto",
            mb: 1.5,
          }}
        />

        {/* CATI & EITAN */}
        <Box
          component="img"
          src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767573922/Cati_Eitan_mmllng.png"
          alt="Cati & Eitan"
          sx={{
            width: { xs: 100, sm: 110 },
            height: "auto",
          }}
        />
      </Box>

      {/* FLECHA */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 3,
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
          }}
        />
      </Box>
    </Box>
  );
};

export default Portada;
