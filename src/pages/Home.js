import React, { useState } from "react";
import { Grid, Box, styled } from "@mui/material";
import Sunset from "../assets/images/bg.jpg";
import Form from "../components/Form";
import Information from "../components/Information";

const GlassContainer = styled(Box)({
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  "-webkit-backdrop-filter": "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  width: "90%",
  maxWidth: "1000px",
  minHeight: "80vh",
  display: "flex",
});

const Image = styled(Box)({
  backgroundImage: `url(${Sunset})`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "16px 0 0 16px",
  "@media (max-width: 899px)": {
    borderRadius: "16px 16px 0 0",
  },
});

export default function Home() {
  const [result, setResult] = useState({});

  return (
    <GlassContainer>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Image />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Form setResult={setResult} />
            <Information result={result} />
          </Box>
        </Grid>
      </Grid>
    </GlassContainer>
  );
}
