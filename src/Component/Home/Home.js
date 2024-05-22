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
          <Grid item xs={4} sx={{ paddingBottom: "20px" }}>
            <Cards
              img={job.logoUrl}
              companyName={job.companyName}
              location={job.location}
              role={job.jobRole}
              maxSalary={job.maxJdSalary}
              minSalary={job.minJdSalary}
              currency={job.salaryCurrencyCode}
              about={job.jobDetailsFromCompany}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
