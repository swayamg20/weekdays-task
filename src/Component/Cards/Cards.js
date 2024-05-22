import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FadePara from "../FadePara/FadePara";
import capitalizeFirstLetter from "../../Utils/capitalizeFirstLetter";
import formatSalaryRange from "../../Utils/formatSalaryRange";

export default function Cards(props) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        height: "75vh",
        borderRadius: "20px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <CardContent>
        <Box
          style={{
            fontSize: "12px",
            borderRadius: "20px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 5px 20px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            maxWidth: "fit-content",
            padding: "7px",
          }}
        >
          ⏳ Posted 10 days ago
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 1,
            marginTop: 2,
          }}
        >
          <Box
            component="img"
            sx={{
              height: 64,
              width: 64,
              marginRight: 2,
            }}
            alt="Logo"
            src={props.img}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingLeft: 0,
            }}
          >
            <Box>
              <Typography
                fontSize={"14px"}
                fontWeight={"600"}
                color={"#8B8B8B"}
              >
                {props.companyName}
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={"16px"} fontWeight={"400"} color={"#000"}>
                {capitalizeFirstLetter(props.role)}
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={"14px"} fontWeight={"400"} color={"#000"}>
                {capitalizeFirstLetter(props.location)}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography
          sx={{ padding: 1, color: "#4C5969" }}
          fontSize={"14px"}
          fontWeight={"600"}
        >
          Estimated Salary: {props.currency}{" "}
          {formatSalaryRange(props.minSalary, props.maxSalary)} LPA ✅
        </Typography>
        <Box sx={{ padding: 1 }}>
          <Typography fontWeight={"bold"}>About Company:</Typography>
          <Typography fontSize={"14px"} fontWeight={"bold"}>
            About us
          </Typography>
          <Typography fontSize={"14px"}>
            <FadePara content={props.about} maxHeight={"25vh"} />
          </Typography>
        </Box>
        <Typography sx={{ p: 1, pb: 0, color: "#8B8B8B", fontWeight: 600 }}>
          Minimum Experience <br />
        </Typography>
        <Typography sx={{ p: 1, pt: 0 }}>7 years</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
