import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#ADA6A0",
        height: "10vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Hattinand, serif !important",
          fontSize: "1.1rem",
          color: "#FBF8F1",
        }}
      >
        ¡Gracias por acompañarnos en este momento!
      </Typography>
    </Box>
  );
};

export default Footer;
