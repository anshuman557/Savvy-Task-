import React, { useState } from 'react';
import {Box,styled} from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import Form from '../components/Form';
import Information from '../components/Information';

const Component = styled(Box)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  width: '65%'
})

const Image = styled(Box)({
  backgroundImage: `url(${Sunset})`,
  width: '27%',
  height: '80%',
  backgroundSize: 'cover',
  borderRadius: '20px 0 0 20px'
})

export default function Home() {
  const [result, setResult] = useState({})

  return (
    <Component>
      <Image/>
      <Box style={{ width: '73%', height: '80%' }}>
        <Form setResult={setResult}/>
        <Information result={result} />
      </Box>
    </Component>
  )
}
