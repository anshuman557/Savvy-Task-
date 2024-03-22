import React, { useState } from 'react';
import { Box, InputBase, Button, styled } from '@mui/material';
import { getWeather } from '../services/api';

const Container = styled(Box)({
    background: '#445A6F',
    padding: 10
});

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight: 20,
    fontSize: 18
});

const GetButton = styled(Button)({
    background: '#e67e22'
});

export default function Form({ setResult }) {
    const [data, setData] = useState({ city: '', country: '' });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const getWeatherInfo = async () => {
        try {
            const response = await getWeather(data.city, data.country);
            setResult(response);
        } catch (error) {
            setResult({ error: 'Failed to fetch weather data. Please try again.' });
        }
    }

    return (
        <Container>
            <Input placeholder='City' onChange={handleChange} name="city" />
            <Input placeholder='Country' onChange={handleChange} name="country" />
            <GetButton variant='contained' onClick={getWeatherInfo}>Get Weather</GetButton>
        </Container>
    )
}
