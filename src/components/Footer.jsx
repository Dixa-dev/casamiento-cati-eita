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
          fontFamily: "Hattinand",
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
