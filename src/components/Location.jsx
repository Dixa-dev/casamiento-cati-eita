import { Box, Button, Link, Typography } from "@mui/material";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";

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
      <Box>
        <CalendarMonthTwoToneIcon
          sx={{
            color: "#FBF8F1",
            fontSize: "50px",
            fill: "none",
            stroke: "#FBF8F1",
            strokeWidth: 0.5,
            animation: `${bounce} 2s infinite`,
          }}
        />

        <Typography sx={{ color: "#FBF8F1", fontSize: 18, fontWeight: 300 }}>
          DOMINGO 29 de Marzo de 2026
        </Typography>

        <Divider />

        <Typography sx={{ color: "#FBF8F1", fontSize: 18, fontWeight: 300 }}>
          12:00 hs
        </Typography>
      </Box>

      <Box>
        <LocationOnTwoToneIcon
          sx={{
            color: "#FBF8F1",
            fontSize: "50px",
            fill: "none",
            stroke: "#FBF8F1",
            strokeWidth: 0.5,
            animation: `${bounce} 2s infinite`,
          }}
        />

        <Typography sx={{ color: "#FBF8F1", fontSize: 20, fontWeight: 300 }}>
          Puro Pilar
        </Typography>

        <Divider />

        <Typography sx={{ color: "#FBF8F1", fontSize: 20, fontWeight: 300 }}>
          Dr. Jose Penna 170, Pilar
        </Typography>
      </Box>

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
