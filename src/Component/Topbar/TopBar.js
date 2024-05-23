import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../Redux/actions";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const TopBar = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.jobState);
  
  // responsiveness
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // handlers
  const handleMinBasePayChange = (e) => {
    dispatch(setFilter({ minBasePay: Number(e.target.value) }));
  };

  const handleMinExperienceChange = (e) => {
    dispatch(setFilter({ minExperience: Number(e.target.value) }));
  };

  const handleCompanyNameChange = (e) => {
    dispatch(setFilter({ companyName: e.target.value }));
  };

  const handleLocationChange = (e) => {
    dispatch(setFilter({ location: e.target.value }));
  };

  const handleRemoteOnsiteChange = (e) => {
    dispatch(setFilter({ remoteOnsite: e.target.value }));
  };

  const handleRoleChange = (e) => {
    dispatch(setFilter({ role: e.target.value }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          margin: "10px",
          marginBottom: "10vh",
          // marginTop: "10vh",
        }}
      >
        <FormControl
          size="small"
          margin="dense"
          fullWidth
          sx={{ margin: "5px" }}
        >
          <InputLabel>Min Base Pay</InputLabel>
          <Select
            value={filters.minBasePay || ""}
            onChange={handleMinBasePayChange}
            label="Min Base Pay"
          >
            <MenuItem value="">Select</MenuItem>
            {[...Array(11).keys()].map((i) => (
              <MenuItem key={i} value={i * 10}>
                {i * 10} LPA
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          size="small"
          margin="dense"
          fullWidth
          sx={{ margin: "5px" }}
        >
          <TextField
            size="small"
            label="Min Experience"
            type="number"
            value={filters.minExperience || ""}
            onChange={handleMinExperienceChange}
          />
        </FormControl>

        <FormControl
          sx={{ margin: "5px" }}
          size="small"
          margin="dense"
          fullWidth
        >
          <TextField
            size="small"
            label="Company Name"
            type="text"
            value={filters.companyName}
            onChange={handleCompanyNameChange}
          />
        </FormControl>

        <FormControl
          sx={{ margin: "5px" }}
          size="small"
          margin="dense"
          fullWidth
        >
          <TextField
            size="small"
            label="Location"
            type="text"
            value={filters.location}
            onChange={handleLocationChange}
            fullWidth
          />
        </FormControl>

        <FormControl
          sx={{ margin: "5px" }}
          size="small"
          margin="dense"
          fullWidth
        >
          <InputLabel id="demo-select-small-label">Remote/Onsite</InputLabel>
          <Select
            id="demo-select-small-label"
            value={filters.remoteOnsite}
            onChange={handleRemoteOnsiteChange}
            label="Remote/Onsite"
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="onsite">Onsite</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ margin: "5px" }} margin="dense" fullWidth>
          <TextField
            size="small"
            label="Role"
            type="text"
            value={filters.role}
            onChange={handleRoleChange}
            fullWidth
          />
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

export default TopBar;
