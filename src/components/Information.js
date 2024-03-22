import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity,Air, Cloud } from '@mui/icons-material';


const Container = styled(Box)({
    background: 'white',
    height: '91%',
    width:'100%',
    marginRight: 20,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1, 
});
const Row = styled(Typography)({
    padding: '10px 10px 5px 10px', 
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Error = styled(Typography)({
    color: 'red',
    margin: 50,
    padding: 20
});
export default function Information({ result }) {
    return (
        <Container>
            {result && result.data && result.data.length > 0 ? (
                <>
                    <Row style={{marginTop:40}}><LocationOn />Location: {result.data[0].city_name}, {result.data[0].country_code}</Row>
                    <Row><SettingsBrightness />Temperature: {result.data[0].temp}</Row>
                    <Row><Opacity />Humidity: {result.data[0].rh}</Row>
                    <Row><Air />Wind-Speed: {result.data[0].wind_spd}</Row>
                    <Row><Cloud />Clouds: {result.data[0].clouds}%</Row>
                </>
            ) : (
                <Error>{result && result.error ? result.error : 'Please enter the values to check weather'}</Error>
            )}
        </Container>
    );
}