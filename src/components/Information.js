import React from "react";
import { Box, Typography, styled, Grid } from "@mui/material";
import {
  LocationOn,
  Thermostat,
  Opacity,
  Air,
  Cloud,
  WbSunny,
  Grain,
} from "@mui/icons-material";

const Container = styled(Box)({
  padding: "0 20px 20px 20px",
  flexGrow: 1,
  overflowY: "auto",
});

const ErrorDisplay = styled(Typography)({
  color: "#d32f2f",
  textAlign: "center",
  marginTop: "30%",
  fontWeight: "500",
});

const InitialDisplay = styled(Typography)({
  color: "#2d3436",
  textAlign: "center",
  marginTop: "30%",
  fontWeight: "500",
});

const InfoCard = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "12px",
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.4)",
});

const IconWrapper = styled(Box)({
  marginRight: "15px",
  color: "#2d3436",
  display: "flex",
  alignItems: "center",
  "& > svg": {
    fontSize: "32px",
  },
});

const SectionTitle = styled(Typography)({
  color: "#2d3436",
  fontWeight: "700",
  marginBottom: "15px",
  borderBottom: "2px solid rgba(45, 52, 54, 0.1)",
  paddingBottom: "5px",
});

const AirQuality = ({ data }) => {
  const airQualityData = [
    { icon: <Grain />, label: "CO", value: data.co?.toFixed(2) ?? "N/A" },
    { icon: <Grain />, label: "NO₂", value: data.no2?.toFixed(2) ?? "N/A" },
    { icon: <Grain />, label: "O₃", value: data.o3?.toFixed(2) ?? "N/A" },
    { icon: <Grain />, label: "SO₂", value: data.so2?.toFixed(2) ?? "N/A" },
    { icon: <Grain />, label: "PM2.5", value: data.pm2_5?.toFixed(2) ?? "N/A" },
    { icon: <Grain />, label: "PM10", value: data.pm10?.toFixed(2) ?? "N/A" },
  ];

  return (
    <Box mt={3}>
      <SectionTitle variant="h6">Air Quality</SectionTitle>
      <Grid container spacing={2}>
        {airQualityData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <InfoCard>
              <IconWrapper>{item.icon}</IconWrapper>
              <Box>
                <Typography sx={{ fontWeight: "500", color: "#636e72" }}>
                  {item.label}
                </Typography>
                <Typography sx={{ fontWeight: "700", color: "#2d3436" }}>
                  {item.value}
                </Typography>
              </Box>
            </InfoCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default function Information({ result }) {
  if (result && result.error) {
    return <ErrorDisplay>{result.error}</ErrorDisplay>;
  }

  if (!result || !result.location || !result.current) {
    return <InitialDisplay>Enter a city to get started</InitialDisplay>;
  }

  const weatherData = [
    {
      icon: <LocationOn />,
      label: "Location",
      value: `${result.location.name}, ${result.location.country}`,
    },
    {
      icon: <Thermostat />,
      label: "Temperature",
      value: `${result.current.temp_c}°C`,
    },
    {
      icon: <Opacity />,
      label: "Humidity",
      value: `${result.current.humidity}%`,
    },
    {
      icon: <Air />,
      label: "Wind Speed",
      value: `${result.current.wind_kph} kph`,
    },
    {
      icon: <Cloud />,
      label: "Cloud Cover",
      value: `${result.current.cloud}%`,
    },
    { icon: <WbSunny />, label: "UV Index", value: result.current.uv },
  ];

  return (
    <Container>
      <SectionTitle variant="h6">Weather Details</SectionTitle>
      <Grid container spacing={2}>
        {weatherData.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <InfoCard>
              <IconWrapper>{item.icon}</IconWrapper>
              <Box>
                <Typography sx={{ fontWeight: "500", color: "#636e72" }}>
                  {item.label}
                </Typography>
                <Typography sx={{ fontWeight: "700", color: "#2d3436" }}>
                  {item.value}
                </Typography>
              </Box>
            </InfoCard>
          </Grid>
        ))}
      </Grid>
      {result.current.air_quality && (
        <AirQuality data={result.current.air_quality} />
      )}
    </Container>
  );
}
