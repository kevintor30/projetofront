import { Button, Grid , TextField, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/Userlogin';

import { login } from '../../services/Service';
import './Login.css';

function Login(){
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: '',
            foto:''
        }
    )

    function updateModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !=='') {
            navigate('/')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        
        //  const resposta = await api.post(`/usuarios/logar`, userLogin)
        //     setToken(resposta.data.token)
         try {
            await login(`usuarios/logar`,userLogin,setToken)
            alert('Usuário logado com sucesso')
        } catch(error) {
            alert('Dados do usuário inconsistentes, Erro ao logar!');
        }
    }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center' className='imgb'>
            <Grid xs={5} className='img' >
            </Grid>
          <Grid alignItems='center' xs={6}>
            <Box padding={20}>
                <form onSubmit={onSubmit}>
                    <Typography><h1>Entre Agora</h1></Typography>
                    <TextField id='usuario' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='Insira o nome do seu usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField id='senha' value={userLogin.senha}  onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} label='Digite a sua senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                <Box marginTop={2} textAlign= 'center'>
               <Button type='submit' variant='contained' color='primary'>
                SUBMETER
               </Button>
                </Box>
                </form>
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'>Ainda não tem uma conta?</Typography>
                    </Box>
                    <Link to='/cadastro'>
                    <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>Cadastre-se!</Typography>
                </Link>
                </Box>
            </Box>
          </Grid >
          
        </Grid>
    );
}
export default Login;