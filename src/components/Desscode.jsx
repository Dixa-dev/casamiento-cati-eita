import { Box, Typography } from '@mui/material'

const Dresscode = () => {
  return (
    <Box
            sx={{
              bgcolor: "#ADA6A0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "30vh",
              justifyContent: "center",
              textAlign: "center",
              gap:"1.5vh"
            }}
          >
            <Box
              sx={{
                width: "70%", // Esto hace que la línea ocupe el 25% del contenedor
                height: "2px", // Grosor de la línea
                backgroundColor: "#F0ECE3", // Color de la línea
                margin: "10px 0", // Márgenes si los deseas
              }}
            />
            <Typography sx={{ color:"#F0ECE3" ,fontSize: "24px", fontWeight: "500" }}>
              DRESS CODE
            </Typography>
            <img src='https://res.cloudinary.com/dqqbiacuz/image/upload/v1767572340/Vector_2_ggnige.png' alt='icon-hanger'/>
            <Typography sx={{ color:"#F0ECE3", fontSize: "24px", fontWeight: "100" }}>
              ELEGANTE{" "}
            </Typography>
            <Box
              sx={{
                width: "70%", // Esto hace que la línea ocupe el 25% del contenedor
                height: "2px", // Grosor de la línea
                backgroundColor: "#F0ECE3", // Color de la línea
                margin: "10px 0", // Márgenes si los deseas
              }}
            />
          </Box>
  )
}

export default Dresscode