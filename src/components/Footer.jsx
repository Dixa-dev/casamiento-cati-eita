import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#ADA6A0",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Parisienne",
          fontSize: "1.2rem",
          color: "#FBF8F1",
        }}
      >
        ¡Gracias por acompañarnos en este momento!
      </Typography>
    </Box>
  );
};

export default Footer;
