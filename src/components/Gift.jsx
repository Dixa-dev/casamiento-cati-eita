import { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";

const Gift = ({ imgCbu }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        bgcolor: "#ADA6A0",
        minHeight: "50vh",
        py: "6vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "1.5vh",
        }}
      >
        <img
          src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1767497101/Vector_g3uqp2.png"
          alt="gift"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8vh",
            width: "80%",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "95%",
              height: "2px",
              backgroundColor: "#F0ECE3",
              my: "10px",
            }}
          />

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 300,
              color: "#F0ECE3",
              mb: "2.5vh",
            }}
          >
            Si deseas hacernos un regalo, te dejamos nuestros datos
          </Typography>

          <Box
            sx={{
              width: "95%",
              height: "2px",
              backgroundColor: "#F0ECE3",
              my: "10px",
            }}
          />
        </Box>

        <Button
          variant="contained"
          sx={{
            color: "#787878",
            background: "#F0ECE3",
            mt: "1.5vh",
            borderRadius: "20px",
          }}
          onClick={handleOpen}
        >
          VER DATOS BANCARIOS
        </Button>
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            height: "90vh",
            bgcolor: "white",
            p: 2,
            boxShadow: 24,
            borderRadius: "10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={imgCbu}
            alt="CBU"
            style={{ width: "100%", maxWidth: "300px" }}
          />

          <Button
            onClick={handleClose}
            sx={{
              mt: "10px",
              background: "#8C8C8C",
              color: "white",
              ":hover": { background: "#6C6C6C" },
            }}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Gift;
