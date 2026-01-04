import { Box, Button, Link, Typography } from "@mui/material";

const Confirmation = ({confirmationForm}) => {
  return (
    <Box
      sx={{
        bgcolor: "#FBF8F1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "90vh",
        // justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "#FBF8F1",
          marginTop: "5vh",
          alignContent: "center",
        }}
      >
        <Box>
          <img src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767399170/Rectangle_13_eo1o17.png" />
        </Box>
      </Box>

      <Box sx={{
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly"
      }}>
        <Box>
          <img
            src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767495148/hojs_1_wprcna.png"
            alt="hoja"
          />
        </Box>

        <Typography
          sx={{
            fontSize: "24px",
            width: "75%",
            fontWeight: "regular",
            color: "#ADA6A0",
            mx: "auto", // 👈 ESTO lo centra horizontalmente
            textAlign: "center",
            marginTop:"-3vh"
          }}
        >
          ¿Venis a festejar? ¡Confirmá tu asistencia!
        </Typography>
        <Link
          href={confirmationForm}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              color: "#F0ECE3",
              background: "#ADA6A0",
              marginTop: "1.5vh",
              borderRadius:"20px"
            }}
          >Avisanos
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Confirmation;
