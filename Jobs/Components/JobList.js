import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Add } from "@mui/icons-material";

export default function JobList() {
  const options = ["Delete", "Updated", "View"];
  const ITEM_HEIGHT = 30;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Paper elevation={4} sx={{ width: "80vw", height: "80vh", p: 5, m: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              p: 2,
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Active Jobs</Typography>
            <Button variant="contained" startIcon={<Add />}>
              Add Jobs
            </Button>
          </Box>
          <Divider variant="middle" />
        </Grid>
        {Array(10).fill(
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ borderRadius: 5, height: 70 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <FiberManualRecordIcon size={5} color="success" />
                <Typography sx={{ fontWeight: "bold" }}>
                  Mern Stack Developer
                  <Typography sx={{ fontSize: 10, fontStyle: "italic" }}>
                    Asansol, West bengol ,India
                  </Typography>
                </Typography>{" "}
                <Box>
                  <Chip icon={<GroupIcon />} label="5" />
                </Box>{" "}
                <Box>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "View"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
