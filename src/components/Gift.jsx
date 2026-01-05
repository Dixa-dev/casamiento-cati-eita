import { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";

const Gift = ({ imgCbu }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        bgcolor: "#ADA6A0",
        width: "100%",
        minHeight: "50svh",
        py: "8svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4svh",
        textAlign: "center",
      }}
    >
      <img
        src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767497101/Vector_g3uqp2.png"
        alt="gift"
      />

      <Box sx={{ width: "80%" }}>
        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "#F0ECE3",
            my: 2,
          }}
        />

        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 300,
            color: "#F0ECE3",
          }}
        >
          Si deseas hacernos un regalo, te dejamos nuestros datos
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "#F0ECE3",
            my: 2,
          }}
        />
      </Box>

      <Button
        variant="contained"
        sx={{
          color: "#787878",
          background: "#F0ECE3",
          borderRadius: "20px",
          px: 3,
        }}
        onClick={() => setOpen(true)}
      >
        VER DATOS BANCARIOS
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            m: "auto",
            width: "90vw",
            height: "90svh",
            bgcolor: "white",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <img
            src={imgCbu}
            alt="CBU"
            style={{ width: "100%", maxWidth: "300px" }}
          />

          <Button
            sx={{
              mt: 2,
              background: "#8C8C8C",
              color: "white",
            }}
            onClick={() => setOpen(false)}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Gift;
