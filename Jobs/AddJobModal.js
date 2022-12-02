import * as React from "react";
import {
  Grid,
  Typography,
  Button,
  Fade,
  Modal,
  Box,
  Backdrop,
  TextField,
  MenuItem,
  CssBaseline,
  Container,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  paddingTop: 1,
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "60%", lg: "50%" },
  height: { xs: 700, sm: 400 },
  //   scrollY:true,
  //   flexWrap:Scr,
  // overflow: "auto",
  bgcolor: "white",
  //   border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  pb: 0,
  p: 0,
  m: 0,
};
// Type = Edit or ADD

export default function AddJobModal() {
 const [open,setOpen]=useState(false)
 const handleSubmit=()=>{
    console.log('Haan')
 }
 const handleModalClose=()=>{
    setOpen(false)
 }
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {
        //   handleModalClose();
        //   GotoDefault();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container component="main" maxWidth="lg" sx={styles}>
          
            <Box
              component="form"
              validate
              onSubmit={handleSubmit}
              sx={{
                // overflow: "auto",
                height: { xs: 700, sm: 400 },
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              <Box
                sx={{
                  overflow: "auto",
                  height: { xs: 500, sm: 260 },
                  paddingTop: 2,
                }}
              >
                <Grid container spacing={2} sx={{ overflow: "auto" }}>
                 
                </Grid>
              </Box>
              <Grid container spacing={1} sx={{ padding: 2 }}>
                <Grid item xs={6} sm={6} lg={6}>
                  <Button
                    fullWidth
                    color="error"
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                    onClick={() => {
                      handleModalClose();
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} lg={6}>
                  <Button
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                    onClick={(e) => handleSubmit(e)}
                  >
                   'Save'
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Fade>
      </Modal>
    </>
  );
}
