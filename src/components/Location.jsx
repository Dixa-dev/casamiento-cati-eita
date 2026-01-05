import { Box, Button, Link, Typography } from "@mui/material";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";

const Divider = () => (
  <Box
    sx={{
      width: "10%",
      height: "2px",
      backgroundColor: "#F0ECE3",
      my: "10px",
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "4vh",
        minHeight: "60vh",
        py: "6vh",
      }}
    >
      <Box sx={{ width: "100%" }}>
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

        <Typography sx={{ color: "#FBF8F1", fontSize: "18px", fontWeight: 300 }}>
          DOMINGO 29 de Marzo de 2026
        </Typography>

        <Divider />

        <Typography sx={{ color: "#FBF8F1", fontSize: "18px", fontWeight: 300 }}>
          12:00 hs
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
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

        <Typography sx={{ color: "#FBF8F1", fontSize: "20px", fontWeight: 300 }}>
          Puro Pilar
        </Typography>

        <Divider />

        <Typography sx={{ color: "#FBF8F1", fontSize: "20px", fontWeight: 300 }}>
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
            mt: "1.5vh",
            borderRadius: "20px",
          }}
        >
          Como llegar
        </Button>
      </Link>
    </Box>
  );
};

export default Location;
