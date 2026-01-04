import { Box, Button, Link, Typography } from "@mui/material";

const Song = ({ SongList }) => {
  return (
    <Box
      sx={{
        bgcolor: "#F0ECE3",
        display: "flex",
        flexDirection: "column",
        height: "75vh",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          textAlign: "center",
          gap: "3vh",
        }}
      >
        <img
          src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767498147/Vector_1_lmy2zq.png"
          alt="song"
        />
        <Box sx={{ width: "83%" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "regular",
              color: "#ADA6A0",
            }}
          >
            ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
          </Typography>
        </Box>

        <Link
          href={SongList}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              color: "#FBF8F1",
              background: "#ADA6A0",
            //   marginTop: "1.5vh",
              borderRadius: "20px",
              fontSize:"12px"
            }}
          >
            AGREGAR CANCIÓN
          </Button>
        </Link>
      </Box>
      <Box>
        <img
          src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767399202/Footer2_1_nwh2b9.png"
          alt="foto3"
        />
      </Box>
    </Box>
  );
};

export default Song;
