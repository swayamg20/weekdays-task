import React, { useEffect, useState } from "react";
import TopBar from "../Topbar/TopBar";
import Cards from "../Cards/Cards";
import { Grid } from "@mui/material";
import jobData from "../../Assets/jobs";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobsData = jobData;
    setJobs(jobsData);
  }, []);

  return (
    <>
      <TopBar />

      <Grid container>
        {jobs.map((job) => (
          <Grid item xs={4}>
            <Cards />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
