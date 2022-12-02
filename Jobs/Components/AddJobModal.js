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
  Divider,
  Switch,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  paddingTop: 1,
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "60%", lg: "70%" },
  height: { xs: 700, sm: 500 },
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

export default function AddJobModal({ open, handleModalClose, handleSubmit }) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const LocationOptions = [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Waghodiya",
    "Lucknow",
    "Udaypur",
    "Indore",
  ];

  function getStyles(name, Location, theme) {
    return {
      fontWeight:
        Location.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [Location, setLocation] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLocation(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
                width: "100%",
                height: { xs: 700, sm: 500 },
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              <Box
                sx={{
                  overflow: "auto",
                  height: { xs: 500, sm: 400 },
                  paddingTop: 2,
                }}
              >
                <Typography sx={{ pl: 10, p: 2, fontWeight: "bold" }}>
                  Add a Job
                </Typography>

                <Divider variant="middle" />
                <Grid container spacing={3} sx={{ padding: 2 }}>
                  <Grid item xs={12} sm={12} lg={12}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Basic Details"
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} lg={6}>
                    <TextField
                      //  error={true}
                      autoComplete="given-name"
                      type="text"
                      name="Job Title"
                      // select={Fields.type === "Select" ? true : false}
                      required
                      fullWidth
                      id="Job Title"
                      label="Job Title"
                      // InputLabelProps={
                      //   Fields.type === "file" ? { shrink: true } : ""
                      // }
                      autoFocus
                      // onChange={handleChange}
                    >
                      {/* {Fields.type === "Select" ? (
                      Country.map((option) => (
                        <MenuItem
                          key={option.CountryCode}
                          value={option.CountryCode}
                        >
                          {option.CountryName}
                        </MenuItem>
                      ))
                    ) : (
                      <></>
                    )} */}
                    </TextField>
                  </Grid>
                  <Grid item xs={6} sm={6} lg={6}>
                    <TextField
                      //  error={true}
                      autoComplete="given-name"
                      type="text"
                      name="Position Type"
                      select={true}
                      required
                      fullWidth
                      id="Position Type"
                      label="Position Type"
                      // InputLabelProps={
                      //   Fields.type === "file" ? { shrink: true } : ""
                      // }
                      autoFocus
                      // onChange={handleChange}
                    >
                      <MenuItem value={"fulltime"}>Full Time</MenuItem>
                      <MenuItem value={"partTime"}>Part Time</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-multiple-chip-label">
                        Location
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={Location}
                        onChange={handleChange}
                        fullWidth
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Location"
                          />
                        }
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                        {LocationOptions.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, Location, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={true}
                          onChange={handleChange}
                          name="Remote Opportunity ?"
                        />
                      }
                      label="Remote Opportunity ?"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} lg={12}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Job Description"
                      multiline
                      rows={4}
                      fullWidth
                      placeholder="Enter Job Description"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ padding: 2 }}>
                  <Grid item xs={12} sm={12} lg={12}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Matching Criteria"
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} lg={6}>
                    <TextField
                      //  error={true}
                      autoComplete="given-name"
                      type="text"
                      name="Seniority"
                      select={true}
                      required
                      fullWidth
                      id="Seniority"
                      label="Seniority"
                      // InputLabelProps={
                      //   Fields.type === "file" ? { shrink: true } : ""
                      // }
                      autoFocus
                      // onChange={handleChange}
                    >
                      <MenuItem value={"fulltime"}>Senior Developer</MenuItem>
                      <MenuItem value={"partTime"}>Junior Developer</MenuItem>
                      <MenuItem value={"partTime"}>Internship</MenuItem>

                      <MenuItem value={"partTime"}>Trainee </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={6} sm={6} lg={6}>
                    <TextField
                      //  error={true}
                      autoComplete="given-name"
                      type="text"
                      name="Closest Job Function"
                      select={true}
                      required
                      fullWidth
                      id="Closest Job Function"
                      label="Closest Job Function"
                      // InputLabelProps={
                      //   Fields.type === "file" ? { shrink: true } : ""
                      // }
                      autoFocus
                      // onChange={handleChange}
                    >
                      <MenuItem value={"fulltime"}>UI Designer </MenuItem>
                      <MenuItem value={"partTime"}>UX Designer</MenuItem>
                      <MenuItem value={"partTime"}>
                        Front-End Developer
                      </MenuItem>
                      <MenuItem value={"partTime"}>Back-End Developer</MenuItem>
                      <MenuItem value={"partTime"}>Devops Engineer</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-multiple-chip-label">
                        Relevant Hard Skill
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={Location}
                        onChange={handleChange}
                        fullWidth
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Relevant Hard Skill"
                          />
                        }
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                        {LocationOptions.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, Location, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={true}
                          onChange={handleChange}
                          name="Is Visa Sponsorship Available ?"
                        />
                      }
                      label="Is Visa Sponsorship Available ?"
                    />
                  </Grid>
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
                    Save
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
