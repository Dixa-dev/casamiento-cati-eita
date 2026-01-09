import { Box, Button, Link, Typography } from "@mui/material";

const Divider = () => (
  <Box
    sx={{
      width: "10%",
      height: "2px",
      backgroundColor: "#F0ECE3",
      my: "12px",
      mx: "auto",
    }}
  />
);

const Location = ({ data, bounce }) => {
  return (
    <Box
      id="location"
      sx={{
        bgcolor: "#ADA6A0",
        width: "100%",
        minHeight: "60svh",
        py: "8svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "6svh",
      }}
    >
      {/* FECHA */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
        <Box sx={{ ...bounce }}>
          <img
            src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767922502/Icono_calendario_ulbgp3.png"
            alt="calendar"
          />
        </Box>

        <Typography sx={{ color: "#F0ECE3", fontSize: 18, fontWeight: 300 }}>
          DOMINGO 29 de Marzo de 2026
        </Typography>

        <Divider />

        <Typography sx={{ color: "#F0ECE3", fontSize: 18, fontWeight: 300 }}>
          12:00 hs
        </Typography>
      </Box>

      {/* UBICACIÓN */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
        <Box sx={{ ...bounce }}>
          <img
            src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767922502/Vector_3_rdyqra.png"
            alt="location"
          />
        </Box>

        <Typography sx={{ color: "#F0ECE3", fontSize: 18, fontWeight: 300 }}>
          Puro Pilar
        </Typography>

        <Divider />

        <Typography sx={{ color: "#F0ECE3", fontSize: 18, fontWeight: 300 }}>
          Dr. Jose Penna 170, Pilar
        </Typography>
      </Box>

      {/* BOTÓN */}
      <Link
        href={data.location}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          sx={{
            color: "#4F4F4F",
            background: "#F0ECE3",
            borderRadius: "20px",
            px: 3,
          }}
        >
          Como llegar
        </Button>
      </Link>
    </Box>
  );
};

export default Location;
