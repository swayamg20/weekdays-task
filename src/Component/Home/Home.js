import React, { useEffect, useState } from "react";
import TopBar from "../Topbar/TopBar";
import Cards from "../Cards/Cards";
import {
  Grid,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";
// import jobData from "../../Assets/jobs";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // const [jobs, setJobs] = useState([]);
  const { jobs, filters } = useSelector((state) => state.jobState);
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const filterJobs = (jobs) => {
    return jobs.filter((job) => {
      const {
        minExperience,
        companyName,
        location,
        remoteOnsite,
        role,
        minBasePay,
      } = filters || {};

      return (
        (minExperience === null || job.minExp >= minExperience) &&
        (companyName === "" ||
          job.companyName.toLowerCase().includes(companyName.toLowerCase())) &&
        (location === "" ||
          job.location.toLowerCase().includes(location.toLowerCase())) &&
        (remoteOnsite === "" ||
          (remoteOnsite === "remote" && job.location === "remote") ||
          (remoteOnsite === "onsite" && job.location !== "remote")) &&
        (role === "" ||
          job.jobRole.toLowerCase().includes(role.toLowerCase())) &&
        (minBasePay === null ||
          (job.minJdSalary !== null && job.minJdSalary >= minBasePay))
      );
    });
  };

  const filteredJobs = filterJobs(jobs);
  console.log(filteredJobs);

  return (
    <ThemeProvider theme={theme}>
      <TopBar />

      <Grid container>
        {filteredJobs.map((job) => (
          <Grid
            item
            xs={isMobile ? "12" : "4"}
            sx={{
              paddingBottom: "20px",
              display: "flex",
              justifyContent: "center",
              
            }}
            key={job.jdUid}
          >
            <Cards
              img={job.logoUrl}
              companyName={job.companyName}
              location={job.location}
              role={job.jobRole}
              maxSalary={job.maxJdSalary}
              minSalary={job.minJdSalary}
              currency={job.salaryCurrencyCode}
              about={job.jobDetailsFromCompany}
              minExp={job.minExp}
            />
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
