import React from "react";
import Box from "@mui/material/Box";
import "./style.css";

// The fade effect at the bottom of paragraph

const FadePara = ({ content, maxHeight }) => {
  return (
    <Box className="paragraph-container" style={{ maxHeight: maxHeight }}>
      <Box>{content}</Box>
      <Box className="fade-overlay"></Box>
      <Box className="fade-text" sx={{color:"#5049DB", fontSize:"16px"}}>View Job</Box>
    </Box>
  );
};

export default FadePara;
