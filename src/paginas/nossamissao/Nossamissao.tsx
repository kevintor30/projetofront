import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Nossamissao.css';

function Nossamissao() {
  return (
    <>
    <Grid container justifyContent='center' alignItems='center'>
    <Grid alignItems="center" item xs={6}>
     <Box paddingX={0}>
 
     <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'><h3>Nossa Missão</h3></Typography>
           <Typography variant="h5" component='h1' align='center'>Bem-vindos ao Site do Nosso Projeto Integrador. Nosso Projeto tem como finalidade relatar sobre a erradicação contra a pobreza, que é a primeira ODS. <Typography variant="h5" component='h1' align='center'>A erradicação da pobreza corresponde ao primeiro dos Objetivos de Desenvolvimento Sustentável (ODS) criados pela Organização das Nações Unidas (ONU) para cumprir com os acordos feitos na Agenda 2030. Seu princípio consiste em “reduzir pelo menos à metade, até 2030, a proporção de homens, mulheres e crianças que vivem na pobreza extrema, em todas as suas dimensões”.</Typography></Typography>
       </Box>
   </Grid>
   <Grid item xs={6} >
                   <img src="https://cdn.discordapp.com/attachments/1014550882538504273/1048231012536168468/erradicacao_da_PObreza2.jpg" alt="" width="632px" height="450px" />
               </Grid>
                </Grid>
               </>
  )
  
}

export default Nossamissao;