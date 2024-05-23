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
} from "@mui/material";

const TopBar = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.jobState);

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
    <Box sx={{ display: "flex" }}>
      <FormControl fullWidth margin="normal">
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

      <FormControl fullWidth margin="normal">
        <TextField
          label="Min Experience"
          type="number"
          value={filters.minExperience || ""}
          onChange={handleMinExperienceChange}
          fullWidth
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Company Name"
          type="text"
          value={filters.companyName}
          onChange={handleCompanyNameChange}
          fullWidth
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Location"
          type="text"
          value={filters.location}
          onChange={handleLocationChange}
          fullWidth
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Remote/Onsite</InputLabel>
        <Select
          value={filters.remoteOnsite}
          onChange={handleRemoteOnsiteChange}
          label="Remote/Onsite"
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="onsite">Onsite</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Role"
          type="text"
          value={filters.role}
          onChange={handleRoleChange}
          fullWidth
        />
      </FormControl>
    </Box>
  );
};

export default TopBar;
