import { Box, Button, Link, Typography } from "@mui/material";

const Photo = ({ instagram }) => {
  return (
    <Box
      sx={{
        bgcolor: "#F0ECE3",
        display: "flex",
        flexDirection: "column",
        height: "40vh",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            width: "83%",
            gap: "1.5vh",
          }}
        >
          <Typography sx={{ color: "#ADA6A0", fontSize: "20px" }}>
            COMPARTÍ CON NOSTROS!
          </Typography>

          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "regular",
                color: "#ADA6A0",
              }}
            >
              Subí tus fotos y videos del día de la fiesta y etiquetanos
            </Typography>
          </Box>
        </Box>
        <Box>
          <Link
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767573120/line-md_instagram_kcljcn.png"
              alt="ig_img"
            />
          </Link>

          <Typography sx={{ color: "#ADA6A0", fontSize: "16px" }}>
            @bodacatiyeitan
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Photo;
