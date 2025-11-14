import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  styled,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { getWeather } from "../services/api";

const Container = styled(Box)({
  padding: "20px",
});

const GetButton = styled(Button)({
  background: "#2d3436",
  color: "#FFF",
  fontWeight: "500",
  marginTop: "10px",
  "&:hover": {
    background: "#636e72",
  },
});

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: "8px",
  },
  "& .MuiInputLabel-root": {
    color: "#2d3436",
    fontWeight: "500",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

export default function Form({ setResult }) {
  const [data, setData] = useState({ city: "", country: "" });
  const [includeAqi, setIncludeAqi] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAqiChange = (e) => {
    setIncludeAqi(e.target.checked);
  };

  const getWeatherInfo = async () => {
    if (!data.city) {
      setResult({ error: "Please enter a city name." });
      return;
    }
    try {
      const aqi = includeAqi ? "yes" : "no";
      const response = await getWeather(data.city, data.country, aqi);
      setResult(response);
    } catch (error) {
      setResult({
        error:
          "Failed to fetch weather data. Please check the city and country name.",
      });
    }
  };

  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={5}>
          <StyledTextField
            label="City"
            variant="outlined"
            fullWidth
            name="city"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <StyledTextField
            label="Country (Optional)"
            variant="outlined"
            fullWidth
            name="country"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={includeAqi}
                onChange={handleAqiChange}
                style={{ color: "#2d3436" }}
              />
            }
            label="AQI"
            style={{ color: "#2d3436", fontWeight: "500" }}
          />
        </Grid>
        <Grid item xs={12}>
          <GetButton variant="contained" onClick={getWeatherInfo} fullWidth>
            Get Weather
          </GetButton>
        </Grid>
      </Grid>
    </Container>
  );
}
